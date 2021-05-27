import React from 'react'
import Board from './Board'
import {useState} from 'react'
import ResetButton from "./ResetButton";


const Game = () =>{

    const [board, setBoard] = useState(new Array(9).fill(null))
    const [turn, setTurn] = useState(1)

    const calculateWinner = (board) =>{
        const winningPositions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for (let i = 0; i < winningPositions.length; i++){
            const [a,b,c] = winningPositions[i]
            if(board[a] && board[a] === board[b] && board[a] === board[c]){
                alert('YOU WIN')
                    return true;
            }
        }
        return null
    }

    const handleClickBoard = (position) =>{

        const copy = board.slice()
        if(turn % 2 === 0){
            copy[position] = 'X'
        }else{
            copy[position] = 'O'
        }
        setBoard(copy)
        if (calculateWinner(copy)){
            return
        }
        setTurn( turn + 1)


    }
    const resetBoard = () =>{
        setBoard(board.map((elemento, index) => elemento = null))
    }

    return<>
        <Board ties={board} handleClick={handleClickBoard}/>
        <ResetButton handleClick={resetBoard} />
    </>
};

export default Game;