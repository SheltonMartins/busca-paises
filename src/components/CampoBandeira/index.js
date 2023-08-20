import './CampoBandeira.css'


const CampoBandeira = (props) => {

    return (
        <div className="campoBandeira">
            <h1>{props.nomePais}</h1>
            <img src={props.bandeiraPais}></img>
            <label>Capital: {props.capitalPais}</label>
            <label>População: {props.populacaoPais}</label>
            <label>Língua Principal: {props.linguaPais}</label>
        </div>
    )
}

export default CampoBandeira