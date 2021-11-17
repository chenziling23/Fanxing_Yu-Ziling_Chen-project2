import React from "react";
import "./Rules.css";
import { Link } from "react-router-dom";

export default function Rules() {
    return (
        <div id="text">
            <Link to="/">
                <button>Landing Page</button>
                </Link>
                <Link to="/free">
                <button>Free Game</button>
                </Link>
                <Link to="/normal">
                <button>Normal Game</button>
            </Link>
            <h2>
                <ul>
                    <li>Before play begins, a number of consecutive squares has already been secrectly arranged
                        on the grid either horizontally or vertically. The number of squares for each ship is determined by the type of the ship.
                        We have one 5X1 ship, one 4X1 ship, two 3X1 ships, and one 2X1 ship.
                    </li>
        
                    <li>Player's take turns guessing by calling out the coordinates. 
                        Both players should mark their board with pegs: red check for hit, red X for miss.
                    </li>
                    <li>
                        If you choose free game, you will play by yourself. If you choose normal game,
                        you will play with AI. 
                    </li>
                    <li>
                        When all of the squares of a ship have been hit,
                        the ship's owner announces the sinking of the Carrier, indicating the opponent wins the game
                    </li>
                </ul>
            </h2>

        </div>
    )
}