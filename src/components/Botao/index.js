import './Botao.css'

const Botao = (props) => {
    return (
        <div >
            <button className="Botao" >{props.titulo}</button>
        </div>
    )
}

export default Botao