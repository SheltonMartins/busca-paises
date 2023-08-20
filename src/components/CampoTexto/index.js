import './CampoTexto.css'




const CampoTexto = (props) => {

    

    const aoDigitar = (evento) => {

        props.aoAlterar(evento.target.value)

    }


    return (
        <div className="campoTexto">
            <label>{props.titulo}</label>
            <input 
                placeholder={props.placeholder}
                onChange={aoDigitar}
                value={props.valor}

            />
        </div>
    )
}

export default CampoTexto