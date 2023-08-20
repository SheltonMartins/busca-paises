 async function buscaAPI(nome){
  
    const paises = await fetch(`https://restcountries.com/v3.1/name/${nome}`)
  
    const paisesTraduzido = paises.json()
  
    return paisesTraduzido
  
  }

  export default buscaAPI