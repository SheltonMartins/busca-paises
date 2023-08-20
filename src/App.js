import './App.css';
import buscaAPI from './api/api.js';
import Botao from './components/Botao';
import CampoBandeira from './components/CampoBandeira';
import CampoTexto from './components/CampoTexto';
import { useState } from 'react'



function App() {

  const [valor, setValor] = useState(' ')

  const [pais, setPais] = useState(null)

  const processarBusca = async () => {

    const paisBuscado = await buscaAPI(valor)

    if (paisBuscado == null) {

      setPais(null)

      alert('Não encontramos pelo nome digitado. Tente novamente.')

    } else {

      const linguaTraduzida = Object.values(paisBuscado.lingua)[0]

      paisBuscado.lingua = linguaTraduzida

      setPais(paisBuscado)



    }


  }

  return (

    <div className="App">
      <CampoTexto
        placeholder="Digite o nome do país..."
        titulo="País: "
        valor={valor}
        aoAlterar={valor => setValor(valor)}
      />
      <Botao
        titulo="Buscar"
        processarBusca={processarBusca}
      />
      {pais == null || pais == ' ' ?
        (
          <h1>Clique no botão para começar...</h1>
        ) : (
          <CampoBandeira
            nomePais={pais.nome}
            bandeiraPais={pais.bandeira}
            capitalPais={pais.capital}
            populacaoPais={pais.populacao}
            linguaPais={pais.lingua}
          />
        )}

    </div>

  );
}

export default App;
