import "./Unit.css";
import { useDispatch } from "react-redux";
import { useState } from "react";


export default function Unit(props) {
    const dispatch = useDispatch();
    const [isShown, setIsShown] = useState("white");
    const {board, x, y} = props;
    return (<div id = {(board === "X" || board === "Y") ? board : undefined}
                 onMouseEnter={()=>setIsShown("black")}
                 onMouseLeave={()=>setIsShown("white")} 
                 className = {isShown} 
                 onClick = {() => {
        dispatch({
            type:"boardClick",
            x: x,
            y: y
        })
    }}> {}</div>);
}
