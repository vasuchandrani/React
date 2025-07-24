import { useState } from "react"

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green:0});

    let updateBlue = () => {
        setMoves((prevMoves) => {
            return (
                {...prevMoves, blue: prevMoves.blue + 1}
            );
        })
    }
    // jab nayi value purani value pe depend karti hai to callBack fun use karna chahiye,
        // as above

    let updateYellow =  () => {
        setMoves({...moves, yellow: moves.yellow +1})
    }
    let updateGreen = () => {
        setMoves({...moves, green: moves.green +1})
    }
    let updateRed = () => {
        setMoves({...moves, red: moves.red +1})
    }

    return(
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue = {moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
                <p>Green = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}