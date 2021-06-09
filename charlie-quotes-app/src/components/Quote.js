
const Quote = ({text, classText, id, handleDelete, handleUpdate}) =>{
    return (
        <div>
            <p>{text} <br/> {classText}</p>
            <button onClick={()=>handleDelete(id)} >x</button>
            <button onClick={()=>handleUpdate(id)} >u</button>
        </div>
    )
}

export default Quote;