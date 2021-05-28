import '../styles.css'

const Container = ({imgUrl, altImg, idContainer, data}) =>{
    return(
        <div className="container" >
            <img src={imgUrl} alt={altImg}/>
            <p id={idContainer}> {data}</p>
        </div>
    )
}

export default Container;