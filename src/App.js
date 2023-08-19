import './App.css';
import Botao from './components/Botao';
import CampoTexto from './components/CampoTexto';
import { useState } from 'react'

function App() {

  const [valor, setValor] = useState(' ')

  return (
    <div className="App">
      <CampoTexto 
        placeholder="Digite o nome do país..." 
        titulo="Busca: "
        valor={valor}
        aoAlterar={valor => setValor(valor)}
      />
      <Botao titulo="Buscar"></Botao>
    </div>
  );
}

export default App;
