import './Botao.css'

const Botao = (props) => {

    const aoClicar = (evento) => {

        props.processarBusca()

    }

    return (
        <div >
            <button onClick={aoClicar} className="Botao" >{props.titulo}</button>
        </div>
    )
}

export default Botao