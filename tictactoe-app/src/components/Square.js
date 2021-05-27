import './Square.css'
import React from 'react'

const Square = ({pos,value, handleClick}) =>{
    return <button className='Square' onClick={() => handleClick(pos)}>{value}</button>
};

export default Square;