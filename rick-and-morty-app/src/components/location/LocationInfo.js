
import styled from 'styled-components';

const LocationInfo = ({name, type, dimension, amount}) =>{
    const StyledLocationInfoDiv = styled.div`
        display: block;
        width: 100vw;
`
    const StyledLocationInfo = styled.div`
        background-color: #282c34;
        padding: 10px;
        border-radius: 0.7rem;
        color: #fff;
        width: 30vw;
        min-width: 200px;
        display: inline-flex;
        align-content: stretch;
        align-items: center;
        flex-direction: column;
        & h3, h4, h5, p{
        margin-bottom: 0px;
        }
`

    return(
        < StyledLocationInfoDiv >
            <StyledLocationInfo>
                <h3>Location: {name}</h3>
                <h5>Type: {type}</h5>
                <h4>Dimension: {dimension}</h4>
                <p>{amount} Residents</p>
            </StyledLocationInfo>
        </StyledLocationInfoDiv>
    )
}

export default LocationInfo;