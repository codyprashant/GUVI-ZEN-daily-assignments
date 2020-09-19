function getvalueBox(){
    var value = document.getElementById('operations').innerText;
    return value;
}

function setvalueBox(newValue){
    var oper = document.getElementById('operations');
    operStr = oper.innerText;
    if(operStr.length == 1 && operStr =="0" && newValue != "."){
        operStr = "";
    }
    if(operStr.length < 16){
        oper.innerText = operStr + newValue;
    } else{
        alert("This calculator performs operation with max 15 characters")
    }
}

function setOutput(output){
    document.getElementById('output').innerText = output;
}

function performcalc(){
    var opertext = getvalueBox();
    const regex = /(?:(?:^|[-+_*/%])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
    if (regex.test(opertext)){
        var output = eval(opertext);
        setOutput(output);
    } else{
        alert("The operation doesn't seems to be mathematical operatiom. please verify")
    }
}
function clearOperStr(){
    document.getElementById('operations').innerText ="0";
    document.getElementById('output').innerText ="";
}
function clearOneCharOperStr(){
    var currentValue = getvalueBox();
    document.getElementById('operations').innerText = currentValue.substring(0, (currentValue.length - 1))
}

// Dom related functions and codes

function createDiv(className, htmltext, attrib ='') {
    var tag = document.createElement('div');
    tag.setAttribute('class', className);
    if (htmltext != '') {
        tag.innerHTML = htmltext;
    }
    if (attrib != '') {
        tag.setAttribute('onclick', attrib);
    }
    return tag;
}


var main = createDiv('main','');
var container = createDiv('container','');
var calcBody = createDiv('calc-body','');

var calcScreen = createDiv('calc-screen','');
var calcScreendiv1 = createDiv('calc-operation','0');
calcScreendiv1.id = 'operations'
var calcScreendiv2 = createDiv('calc-typed','');
calcScreendiv2.id = 'output'
calcScreen.append(calcScreendiv1, calcScreendiv2);

var calcButtonRow = createDiv('calc-button-row','');
var calcButtonRowDiv1 = createDiv('button c','C', 'clearOperStr()');
var calcButtonRowDiv2 = createDiv('button l','', 'clearOneCharOperStr()');
    var calcButtonRowDiv2iTag = document.createElement('i');
    calcButtonRowDiv2iTag.setAttribute('class', 'fas fa-backspace');
    calcButtonRowDiv2.appendChild(calcButtonRowDiv2iTag);
var calcButtonRowDiv3 = createDiv('button l','%', 'setvalueBox("%")');
var calcButtonRowDiv4 = createDiv('button l','/', 'setvalueBox("/")');
calcButtonRow.append(calcButtonRowDiv1, calcButtonRowDiv2, calcButtonRowDiv3, calcButtonRowDiv4)

var calcButtonRow2 = createDiv('calc-button-row','');
var calcButtonRow2Div1 = createDiv('button','7', 'setvalueBox("7")');
var calcButtonRow2Div2 = createDiv('button','8', 'setvalueBox("8")');
var calcButtonRow2Div3 = createDiv('button','9', 'setvalueBox("9")');
var calcButtonRow2Div4 = createDiv('button l','x', 'setvalueBox("*")');
calcButtonRow2.append(calcButtonRow2Div1, calcButtonRow2Div2, calcButtonRow2Div3, calcButtonRow2Div4)

var calcButtonRow3 = createDiv('calc-button-row','');
var calcButtonRow3Div1 = createDiv('button','4', 'setvalueBox("4")');
var calcButtonRow3Div2 = createDiv('button','5', 'setvalueBox("5")');
var calcButtonRow3Div3 = createDiv('button','6', 'setvalueBox("6")');
var calcButtonRow3Div4 = createDiv('button l','-', 'setvalueBox("-")');
calcButtonRow3.append(calcButtonRow3Div1, calcButtonRow3Div2, calcButtonRow3Div3, calcButtonRow3Div4)

var calcButtonRow4 = createDiv('calc-button-row','');
var calcButtonRow4Div1 = createDiv('button','1', 'setvalueBox("1")');
var calcButtonRow4Div2 = createDiv('button','2', 'setvalueBox("2")');
var calcButtonRow4Div3 = createDiv('button','3', 'setvalueBox("3")');
var calcButtonRow4Div4 = createDiv('button l','+', 'setvalueBox("+")');
calcButtonRow4.append(calcButtonRow4Div1, calcButtonRow4Div2, calcButtonRow4Div3, calcButtonRow4Div4)

var calcButtonRow5 = createDiv('calc-button-row','');
var calcButtonRow5Div1 = createDiv('button','.', 'setvalueBox(".")');
var calcButtonRow5Div2 = createDiv('button','0', 'setvalueBox("0")');
var calcButtonRow5Div3 = createDiv('button','00', 'setvalueBox("00")');
var calcButtonRow5Div4 = createDiv('button l','=', 'performcalc()');
calcButtonRow5.append(calcButtonRow5Div1, calcButtonRow5Div2, calcButtonRow5Div3, calcButtonRow5Div4)


calcBody.append(calcScreen, calcButtonRow, calcButtonRow2, calcButtonRow3, calcButtonRow4, calcButtonRow5);
container.appendChild(calcBody);
main.appendChild(container);
document.body.appendChild(main);


