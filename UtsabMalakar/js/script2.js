let player = "1";

function drawSymbol(evt) {

    console.log(evt.target.width.baseVal.value);
    let code = "";
    
    if (player === "1") {
        let xCor = (evt.target.x.baseVal.value) + (evt.target.width.baseVal.value / 2);
        let yCor = (evt.target.y.baseVal.value) + (evt.target.width.baseVal.value / 2);
        let width = evt.target.width.baseVal.value;
        code = `<circle cx="${xCor}" cy=${yCor} r="20" fill="white" stroke="black" stroke-width="2" onClick="" />`;
        player = "2";
        code += `<text id="playerTurn" x="450"  y="20">Player ${player} turn</text>`
        removeElementById("playerTurn");
        
    }else{
        let x1Cor = (evt.target.x.baseVal.value);
        let y1Cor = (evt.target.y.baseVal.value);
        let x2Cor = x1Cor + (evt.target.width.baseVal.value);
        let y2Cor = y1Cor + (evt.target.width.baseVal.value);
        code = `<line x1="${x1Cor}" y1=${y1Cor} x2="${x2Cor}" y2=${y2Cor} stroke="black" stroke-width="2" onClick="" />
                <line x1="${x2Cor}" y1=${y1Cor} x2="${x1Cor}" y2=${y2Cor} stroke="black" stroke-width="2" onClick="" />
                `;
        player = "1";
        code += `<text id="playerTurn" x="450"  y="20">Player ${player} turn</text>`
        removeElementById("playerTurn");
    }
    removeElement(evt);
    document.getElementById("svg-div").innerHTML += code;
    // window.alert(`x is ${xCor}`);

}

function removeElement(evt) {
    var element = evt.target;
    var parent = element.parentNode;
    parent.removeChild(element);
}

function removeElementById(id){
    document.getElementById(id).remove();
}