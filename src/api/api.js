import Pais from '../models/Pais';

async function buscaAPI(argumentos) {

    const paises = await fetch(`https://restcountries.com/v3.1/name/${argumentos}`)

    const paisesTraduzido = await paises.json()

    if (!paisesTraduzido[0]) {

      return null

    } else {

      console.log(paisesTraduzido[0])

      const nome = paisesTraduzido[0].name.common

      const capital = paisesTraduzido[0].capital[0]

      const lingua = paisesTraduzido[0].languages

      const populacao = paisesTraduzido[0].population

      const bandeira = paisesTraduzido[0].flags.png

      const pais = new Pais(nome, capital, lingua, populacao, bandeira)

      return pais
    }

}

export default buscaAPI