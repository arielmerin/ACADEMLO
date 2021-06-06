
import styled from 'styled-components'

const ImgStatus = styled.div`
width: 10px;
margin: 0 auto;
`
const ResidentInfo = ({name, imgUrl, origin, status, episodes }) =>{
    
    const statusHandler = (stat) =>{
        if(stat === 'Alive'){
            return <ImgStatus>
                <img src="./green.svg" alt={stat} />

            </ImgStatus>

        }
        if(stat === 'Dead'){
            return <ImgStatus>
                <img src="./red.svg" alt={stat} />

            </ImgStatus>

        }        if(stat === 'unknown'){
            return <ImgStatus>
                <img src="./yellow.svg" alt={stat} />

            </ImgStatus>

        }
    }
    return(
        <div>
            <h3>{name}</h3>
            <img src={imgUrl} alt={name}/>
            <h4>Status {statusHandler(status)} {status} </h4>
            <h5>  {origin}  origin</h5>
            <h6>{episodes} {episodes === 1 ? 'episode': 'espisodes'}</h6>
        </div>
    )
}

export default ResidentInfo;