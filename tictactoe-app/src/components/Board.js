import './Board.css'
import Square from "./Square";
const Board = ({ties, handleClick}) =>{


    return(
        <div className="Board">
            <div className="Row">
                <Square pos={0} value={ties[0]} handleClick={handleClick} />
                <Square pos={1} value={ties[1]} handleClick={handleClick} />
                <Square pos={2} value={ties[2]} handleClick={handleClick} />
            </div>
            <div className="Row">
                <Square pos={3} value={ties[3]} handleClick={handleClick} />
                <Square pos={4} value={ties[4]} handleClick={handleClick} />
                <Square pos={5} value={ties[5]} handleClick={handleClick} />
            </div>
            <div className="Row">
                <Square pos={6} value={ties[6]} handleClick={handleClick} />
                <Square pos={7} value={ties[7]} handleClick={handleClick} />
                <Square pos={8} value={ties[8]} handleClick={handleClick} />
            </div>

        </div>
    );
};

export default Board;