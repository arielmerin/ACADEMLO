import SuggestButton from "./SuggestButton";
import styled from 'styled-components'


const StyledContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`


const SuggestConainer = ({elements, handleClick})=>{

    const list = elements.map((value,index) =>{
        return <SuggestButton text={value} key={index} handleClick={handleClick}/>
    })
    return(
        <StyledContainer>
            {list}
        </StyledContainer>
    )
}

export default SuggestConainer;