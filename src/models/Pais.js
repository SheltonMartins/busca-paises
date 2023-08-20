class Pais {

    constructor(nome, capital, lingua, populacao, bandeira){
        this.nome = nome
        this.capital = capital
        this.lingua = lingua
        this.populacao = populacao
        this.bandeira= bandeira
    }

    get _nome(){
        return this.nome
    }

    get _capital(){
        return this.capital
    }

    get _lingua(){
        return this.lingua
    }

    get _populacao(){
        return this.populacao
    }

    get _bandeira(){
        return this.brandeira
    }

    set _lingua(arg){
        this.lingua=arg
        return this.lingua
    }

}

export default Pais