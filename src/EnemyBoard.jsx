import React from "react";
import './EnemyBoard.css';
import ResetButton from './ResetButton';
import { useSelector } from "react-redux";
import Unit from "./Unit";

export default function EnemyBoard() {
    const boardState = useSelector((state) => state.board)
    var boardComponent = [];
    
    for (let i = 0; i < boardState.length; i++) {
        boardComponent.push([])
        for (let j = 0; j < boardState.length; j++){
            boardComponent[i].push((<Unit  board = {boardState[i][j]} x={i} y={j} color = "white"/>));
            if (j%2 === 0) {
                boardComponent[i][j] = <Unit  board = {boardState[i][j]} x={i} y={j} color = "black"/>;
            }
        }
    }
    return (
        <div id = "board">
            {boardComponent}
        </div>)
}