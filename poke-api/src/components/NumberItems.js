

const NumberItems = ({handleChange, value}) =>{
    return <input type="number" onChange={(e) =>{
    handleChange(e.target.value)}
    } value={value} />
}

export default NumberItems;