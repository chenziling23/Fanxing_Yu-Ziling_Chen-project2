import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className = "landing">
        <h1>Welcome to the Battleship Game</h1>
        <div id = "option">
            <Link to="/free">
            <button>Free Play</button>
            </Link>
            <Link to="normal">
            <button>Normal Game</button>
            </Link>
            <Link to="/rules">
            <button>Rules</button>
            </Link>
        </div>
        </div>
    )
}