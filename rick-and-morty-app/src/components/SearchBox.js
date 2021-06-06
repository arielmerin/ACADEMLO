
import {useState} from 'react'
import styled from 'styled-components'
import SuggestConainer from "./suggest/SuggestContainer";


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
      margin-bottom: 1rem;
`

const StyledLogo = styled.div`
width: 100vw;
  & img{
    width: 80%;
    max-width: 900px;
  }
`

const info =["Earth (C-137)", "Abadango", "Citadel of Ricks", "Worldender's lair", "Anatomy Park", "Interdimensional Cable", "Immortality Field Resort", "Post-Apocalyptic Earth", "Purge Planet", "Venzenulon 7", "Bepis 9", "Cronenberg Earth", "Nuptia 4", "Giant's Town", "Bird World", "St. Gloopy Noops Hospital", "Earth (5-126)", "Mr. Goldenfold's dream", "Gromflom Prime", "Earth (Replacement Dimension)"]

const SearchBox = ({handleClick}) =>{

    const [value, setValue] = useState('')
    return <StyledContainer>
        <StyledLogo >
            <img src="./logo.svg" alt=""  />
        </StyledLogo>
        <StyledInput type="text" placeholder="Location" onChange={(e) => {
            setValue(e.target.value)
            handleClick(value)
        }} onKeyUp={()=> handleClick(value)} value={value}/>
        <SuggestConainer elements={info} handleClick={(value) =>{
            setValue(value)
            handleClick(value)
        }} />
    </StyledContainer>
}

export default SearchBox;