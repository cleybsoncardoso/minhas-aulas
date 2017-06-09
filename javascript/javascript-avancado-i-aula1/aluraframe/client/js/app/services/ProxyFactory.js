class ProxyFactory {
    static create(objeto, props, acao) {
        return new Proxy(new ListaNegociacoes(), {

            //get chama toda vez que tentar ler alguma propriedade
            //target referencia ao objeto que esta sendo encapsulado
            //prop referencia a propriedade
            //receiver referencia ao proxy
            get: function (target, prop, receiver) {

                if (props.includes(prop) && typeof (target[prop]) == typeof (Function)) {
                    return function () {
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);

                    }
                }
                return Reflect.get(target, prop, receiver);
            }


            /*
            //get chama toda vez que tentar ler alguma propriedade
            //target referencia ao objeto que esta sendo encapsulado
            //prop referencia a propriedade
            //value valor recebido
            //receiver referencia ao proxy
            set: function(target, prop, value, receiver) {
                
                console.log(`${target[prop]} Novo valor "${value}"`);
                return Reflect.get(target, prop, value, receiver);
            }
            */

        });
    }
}