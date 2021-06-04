
const ResidentInfo = ({name, imgUrl, status, episodes }) =>{
    return(
        <div>
            Resident Info
            <h3>{name}</h3>
            <img src={imgUrl} alt={name}/>
            <h4>{status}</h4>
            <h5>{episodes}</h5>
        </div>
    )
}

export default ResidentInfo;