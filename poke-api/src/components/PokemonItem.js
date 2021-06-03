
const PokemonItem = ({img, name, type}) =>{
    return(
        <div>
            <h3 style={{margin:0}}>{name}</h3>
            <img src={img} alt={name}/>
            <h6 style={{margin:0}}>{type}</h6>
        </div>
    )
}

export default PokemonItem;