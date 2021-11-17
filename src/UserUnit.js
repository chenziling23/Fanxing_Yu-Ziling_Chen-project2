import "./Unit.css";
import React,{ useState } from "react";

export default function UserUnit(props) {
    const [isShown, setIsShown] = useState("white");
    const {board} = props;
    function change(board){
        if (board === "yes") {
            return "s";
        }else if (board === "X" || board === "Y"){
            return board;
        }else{
            return undefined;
        }
    }
    return (<div id = {change(board)} onMouseEnter={()=>setIsShown("black")}
                 onMouseLeave={()=>setIsShown("white")} className = {isShown} >{}</div>);
}