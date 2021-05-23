import './index.css'

const Card = ({title, contents}) =>{

    return(
        <div className="square">
            <h1>{title}</h1>
            <ul>
                <li>{contents[0]}</li>
                <li>{contents[1]}</li>
                <li>{contents[2]}</li>
                <li>{contents[3]}</li>
            </ul>
        </div>
    )
}

export default Card;