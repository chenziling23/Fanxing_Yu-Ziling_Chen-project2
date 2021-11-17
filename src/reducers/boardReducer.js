import createBoard from "./creatBoard";

let defaultBoard = createBoard();



const defaultState = {
    symbol: "",
    board:defaultBoard
}

function generateGameBoard() {
    return defaultState.board;
}

//Check if hits all ships
function exists(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < 10; j++){
            if (arr[i][j] === "yes"){
                return false;
            }
        }
    }
    return true;
}

export default function boardReducer (state, action){
    if (state === undefined) {
        return generateGameBoard();
    }
    if(action.type === "boardClick") {
        const value = state[action.x][action.y];
        if (value === "yes") {
            state[action.x][action.y] = "Y";
        }else if (value === "no") {
            state[action.x][action.y] = "X";
        }
        if (exists(state)){
            alert("User win!");
        };
        return [...state];
    }
    if(action.type === "reset") {
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state.length; j++){
                state[i][j] = 'no';
            }
        }
        state = createBoard();
        return [...state];
    }
    return state;
}