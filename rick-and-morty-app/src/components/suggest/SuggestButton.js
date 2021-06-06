import styled from 'styled-components';



const StyledButton = styled.button`
padding: 0.5rem;
border-radius: 16px;
border: none;
background-color: #282c34;
color: #fff;
margin: 0.1rem 0.3rem;
&:hover{
cursor: pointer;
}
`
const SuggestButton = ({text, handleClick}) => {

    return <StyledButton onClick={() => handleClick(text)}>{text} </StyledButton>
}

export default SuggestButton;