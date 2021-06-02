
const PokemonItem = ({img, name, type}) =>{
    return(
        <div>
            <h3>{name}</h3>
            <img src={img} alt={name}/>
            <h6>{type}</h6>
        </div>
    )
}

export default PokemonItem;