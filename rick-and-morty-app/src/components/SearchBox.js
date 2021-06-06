
import {useState} from 'react'
import styled from 'styled-components'


const StyledInput = styled.input`
       width: 130px;
       box-sizing: border-box;
       border: 2px solid #ccc;
       border-radius: 20px;
       font-size: 16px;
       transition: width 0.4s ease-in-out;
       padding: 12px 20px 12px 40px;
       background-image: url("https://img.icons8.com/android/24/000000/search.png") ;
       background-position: 10px 10px;
       background-repeat: no-repeat;
       
       &:focus{
          width: 30%;
          outline: none;
       }
`

const StyledContainer = styled.div`
      margin-top: 40vh;
      margin-bottom: 1rem;
`

const SearchBox = ({handleClick}) =>{

    const [value, setValue] = useState('')
    return <StyledContainer>
        <StyledInput type="text" placeholder="Location" onChange={e => setValue(e.target.value)} onSubmit={()=> handleClick(value)} />
    </StyledContainer>
}

export default SearchBox;