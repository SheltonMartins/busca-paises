import './Botao.css'

const Botao = (props) => {

    const aoClicar = (evento) => {

        props.processarBusca()

    }

    return (
            <button onClick={aoClicar} className="Botao" >{props.titulo} </button>
      
    )
}

export default Botao