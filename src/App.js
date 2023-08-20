import './App.css';
import buscaAPI from './api/api.js';
import Botao from './components/Botao';
import CampoTexto from './components/CampoTexto';
import { useState } from 'react'
import Pais from './models/Pais';


function App() {

  const [valor, setValor] = useState(' ')

  const processarBusca = async () => {

    const paisBuscado = await buscaAPI(valor)

    console.log(paisBuscado[0])

    const nome = paisBuscado[0].name.common

    const capital = paisBuscado[0].capital[0]

    const pais = new Pais(nome, capital)

    console.log(pais._nome, pais._capital)



  

  }

  return (
    <div className="App">
      <CampoTexto
        placeholder="Digite o nome do país..."
        titulo="Busca: "
        valor={valor}
        aoAlterar={valor => setValor(valor)}
      />
      <Botao
        titulo="Buscar"
        processarBusca={processarBusca}
      />
    </div>
  );
}

export default App;
