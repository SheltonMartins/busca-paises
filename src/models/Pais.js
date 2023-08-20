class Pais {

    constructor(nome, capital){
        this.nome = nome
        this.capital = capital
    }

    get _nome(){
        return this.nome
    }

    get _capital(){
        return this.capital
    }

}

export default Pais