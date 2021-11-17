import React from "react";
import "./PlayGround.css";
import EnemyBoard from "./EnemyBoard";
import UsersBoard from "./UserBoard";
import ResetButton from './ResetButton';
import { Link } from "react-router-dom";


export default function PlayGround() {
    return (
        <div id = "play">
        <div id = "title">
            <h1>AI's Board</h1>
            <EnemyBoard></EnemyBoard>
        </div>
        <div id = "two">
            <h1>User's Board</h1>
            <UsersBoard></UsersBoard>
        </div>
        <div id = "reset">
            <ResetButton text = "RESET" />
        
            <Link to="/">
                <button>Landing Page</button>
                </Link>
                <Link to="/free">
                <button>Free Game</button>
                </Link>
                <Link to="/rules">
                <button>Rules</button>
            </Link>
        </div>
        </div>
    )
}
