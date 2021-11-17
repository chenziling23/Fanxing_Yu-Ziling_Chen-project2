import React from "react";
import "./PlayGround.css";
import EnemyBoard from "./EnemyBoard";
import ResetButton from './ResetButton';
import { Link } from "react-router-dom";


export default function FreePlay() {
    return (
        <div id = "free">
        <EnemyBoard></EnemyBoard>
        <div id = "reset">
            <ResetButton text = "RESET" />
        </div>
        
            <Link to="/">
            <button>Landing Page</button>
            </Link>
            <Link to="normal">
            <button>Normal Game</button>
            </Link>
            <Link to="/rules">
            <button>Rules</button>
            </Link>
        </div>
    )
}
