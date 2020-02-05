let player = "1";
var result = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let winner = null;



function drawSymbol(evt) {

    console.log(evt.target.width.baseVal.value);
    let code = "";

    if (player === "1") {
        //Storing x-cor, y-cor, id and width in a variable
        let xCor = (evt.target.x.baseVal.value) + (evt.target.width.baseVal.value / 2);
        let yCor = (evt.target.y.baseVal.value) + (evt.target.width.baseVal.value / 2);
        let width = evt.target.width.baseVal.value;
        let id = event.target.id;

        //extracting row and column number from id
        index = id.match(/\d+/g);


        if (winner == null) {
            
            result[index[0]][index[1]] = player;
            player = "2";
            code = drawPlayerOne(xCor, yCor);
            
        }


    } else {
        let x1Cor = (evt.target.x.baseVal.value);
        let y1Cor = (evt.target.y.baseVal.value);
        let x2Cor = x1Cor + (evt.target.width.baseVal.value);
        let y2Cor = y1Cor + (evt.target.width.baseVal.value);
        let id = event.target.id;

        //extracting row and column number from id
        index = id.match(/\d+/g);

        if (winner == null) {
            
            result[index[0]][index[1]] = player;
            player = "1";
            code = drawPlayerTwo(x1Cor,y1Cor,x2Cor,y2Cor);
            
        }

    }
    removeElement(evt);
    document.getElementById("svg-div").innerHTML += code;
    verifyWinner();
    // window.alert(`x is ${xCor}`);

}

function removeElement(evt) {
    var element = evt.target;
    var parent = element.parentNode;
    parent.removeChild(element);
}

function removeElementById(id) {
    document.getElementById(id).remove();
}

function drawPlayerOne(x, y) {
    code = `<circle cx="${x}" cy=${y} r="20" fill="white" stroke="black" stroke-width="2" onClick="" />`;
    code += `<text id="playerTurn" x="450"  y="20">Player ${player} turn</text>`
    removeElementById("playerTurn");
    return code;
    
}

function drawPlayerTwo(x1, y1, x2, y2) {
    code = `<line x1="${x1}" y1=${y1} x2="${x2}" y2=${y2} stroke="black" stroke-width="2" onClick="" />
    <line x1="${x2}" y1=${y1} x2="${x1}" y2=${y2} stroke="black" stroke-width="2" onClick="" />
    `;
    code += `<text id="playerTurn" x="450"  y="20">Player ${player} turn</text>`
    removeElementById("playerTurn");
    return code;
    
}


function verifyWinner() {
    for (let i = 0; i < 3; i++) {
        if (result[i][0] === result[i][1] && result[i][1] === result[i][2] && result[i][0] != '') {
            winner = result[i][0];
            printWinner(winner);
            
        }
        if(result[0][i] === result[1][i] && result[1][i] === result[2][i] && result[0][i] != ''){
            winner = result[0][i];
            printWinner(winner)
        }
    }

    if(result[0][0] === result[1][1] && result[1][1] === result[2][2] && result[0][0] != ''){
        winner = result[1][1];
        printWinner(winner)
    }
    if(result[0][2]===result[1][1] && result[1][1]===result[2][0] && result[0][2] != ''){
        winner = result[1][1];
        printWinner(winner)
    }

    let count = 0;
    if(winner == null){
        for(let i=0; i<3; i++){
            for(let j=0; j < 3; j++){
                if(result[i][j] != ''){
                    count++;
                }
            }
        }
        if(count >= 9){
            printWinner();
        }
    }

}

function printWinner(winner){
    removeElementById('playerTurn')
    if(winner != null) document.getElementById('svg-div').innerHTML += `<text id="playerTurn" x="450"  y="20">Player ${winner} Wins</text>`;
    else document.getElementById('svg-div').innerHTML += `<text id="playerTurn" x="450"  y="20">Its a tie</text>`;
}
