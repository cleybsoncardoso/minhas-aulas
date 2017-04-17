class ListaNegociacoes {

    constructor(/*armadilha,conteexto*/){

        this._negociacoes = [];
        //this._armadilha = armadilha;
        //this._contexto = contexto;
    }

    adiciona(negociacao){
        this._negociacoes = [].concat(this._negociacoes, negociacao);
        //this._armadilha(this);
        //Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
        //Reflect.apply(this._armadilha, this._contexto, [this]);
        //this._armadilha(this);        
    }
}