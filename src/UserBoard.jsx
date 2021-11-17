import React from "react";
import { useSelector } from "react-redux";
import UserUnit from "./UserUnit";

export default function EnemyBoard() {
    const boardState = useSelector((state) => state.user)
    let boardComponent = [];
    for (let i = 0; i < boardState.length; i++) {
        boardComponent.push([])
        for (let j = 0; j < boardState.length; j++){
            boardComponent[i].push((<UserUnit  board = {boardState[i][j]} x={i} y={j} color = "white"/>));
        }
    }
    return (
        <div id = "board">
            {boardComponent}
        </div>)
}
