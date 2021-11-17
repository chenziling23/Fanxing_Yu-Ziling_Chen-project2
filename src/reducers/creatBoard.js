export default function createBoard(){
    const defaultBoard = [];
    const direction = ["v","h"]
    for(let i = 0; i < 10; i++) {
        defaultBoard.push([])
        for(let j = 0; j < 10; j++){
            defaultBoard[i].push("no");
        }
    }

    //Random Place
    function randomSelect() {
        let startX = Math.floor(Math.random()*10);
        let startY = Math.floor(Math.random()*10);
        let dir = Math.floor(Math.random()*2);
        return [startX,startY,dir];
    }


    //check right
    function checkRight(shipLen,x,y) {
        for (let i = 0; i < shipLen; i++){
            if (y+i < 0 || y+i > 9 || defaultBoard[x][y+i] === "yes"){
                return false;
            }
        }
        return true;
    }
    //check left
    function checkLeft(shipLen,x,y) {
        for (let i = 0; i < shipLen; i++){
            if (y-i < 0 || y-i > 9 || defaultBoard[x][y-i] === "yes"){
                return false;
            }
        }
        return true;
    }
    //check up
    function checkUp(shipLen,x,y) {
        for (let i = 0; i < shipLen; i++){
            if (x-i < 0 || x-i > 9 || defaultBoard[x-i][y] === "yes"){
                return false;
            }
        }
        return true;
    }
    //check down
    function checkDown(shipLen,x,y) {
        for (let i = 0; i < shipLen; i++){
            if (x+i < 0 || x+i > 9 || defaultBoard[x+i][y] === "yes"){
                return false;
            }
        }
        return true;
    }

    //5*1
    function placeShip(shipLen){
        let [x,y,dir] = randomSelect();

        while (defaultBoard[x][y] === "yes" || (!checkDown(shipLen,x,y) && !checkUp(shipLen,x,y) && !checkRight(shipLen,x,y) && !checkLeft(shipLen,x,y))) {
            [x,y,dir] = randomSelect();
        }

        if ((direction[dir] === "v" && !checkDown(shipLen,x,y) && !checkUp(shipLen,x,y)) || (direction[dir] ==="h" && (checkLeft(shipLen,x,y)||checkRight(shipLen,x,y)))) {
            if(checkLeft(shipLen,x,y)){
                for(let i = 0; i < shipLen; i++){
                    console.log("1");
                    defaultBoard[x][y-i] = "yes";
                }
            }else {
                for(let i = 0; i < shipLen; i++){
                    defaultBoard[x][y+i] = "yes";
                }
            }
        }else{
            if(checkDown(shipLen,x,y)){
                for(let i = 0; i < shipLen; i++){
                    defaultBoard[x+i][y] = "yes";
                }
            }else{
                for(let i = 0; i < shipLen; i++){
                    defaultBoard[x-i][y] = "yes";
                }
            }
        }
    }
    placeShip(5);
    placeShip(4);
    placeShip(3);
    placeShip(3);
    placeShip(2);
    return defaultBoard;

}
