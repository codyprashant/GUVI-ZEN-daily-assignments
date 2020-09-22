function getrandomNumber() {
var result =''
 while(result.length != 9){
    if(result.length == 8){
        document.getElementById('fetchedData').innerHTML = result;
        break;
    } else{
        var temp = (generateNum(1, 9)).toString();
        if(!result.includes(temp)){
            result = result + temp;
        }
    } 
}   
}

function generateNum (min, max) {
    var randNumber = Math.floor(Math.random()*(max - min + 1)) + min;
    return randNumber;
  }


function getCalculated(){
    // var DOB = "March 1, 1995";
    var input = document.getElementById('inputDate').value;
 if(input != '' || input  != undefined || !input){
    var formatDate = Date.parse(input);
    var todayDate = Date.now();
    var milliseconds = todayDate-formatDate;

      var second = 1000;
      var minute = second*60;
      var hour = minute*60;
      var day = hour*24;
      var year = day*365;
    
    var years = Math.round(milliseconds/year);
    var months = years*12;
    var days = years*365;
    var minutes = Math.round(milliseconds/minute);
    var hours = Math.round(milliseconds/hour);
    var seconds = Math.round(milliseconds/second);

    var result = "Difference in Years : "+years+
    "</br>Difference in Months : "+months+
      "</br>Difference in Days : "+days+
     "</br>Difference in Hours : "+hours+
     "</br>Difference in Minutes : "+minutes+
     "</br>Difference in Seconds : "+seconds+
     "</br>Difference in Milliseconds : "+milliseconds;

    document.getElementById('fetchedData1').innerHTML = result;
 } else{
    alert('Please select the date for calculation.')
 }

}

function createNavBar(currenttab) {
  var nav = document.createElement("nav");
  nav.setAttribute(
    "class",
    "navbar navbar-expand-md navbar-dark fixed-top bg-dark"
  );

  var navA = document.createElement("a");
  navA.setAttribute("class", "navbar-brand");
  navA.setAttribute("href", "/index.html");
  navA.innerText ="GUVI | codyPrashant";

  var navButton = document.createElement("button");
  navButton.setAttribute("class", "navbar-toggler");
  navButton.setAttribute("type", "button");
  navButton.setAttribute("data-toggle", "collapse");
  navButton.setAttribute("data-target", "#navbarCollapse");
  navButton.setAttribute("aria-controls", "navbarCollapse");
  navButton.setAttribute("aria-expanded", "false");
  navButton.setAttribute("aria-label", "Toggle navigation");

  var navButtonSpan = document.createElement("span");
  navButtonSpan.setAttribute("class", "navbar-toggler-icon");
  navButton.appendChild(navButtonSpan);

  var navDiv = document.createElement("div");
  navDiv.setAttribute("class", "collapse navbar-collapse");
  navDiv.setAttribute("id", "navbarCollapse");

  var navDivUl = document.createElement("ul");
  navDivUl.setAttribute("class", "navbar-nav ml-auto");

  var navDivUlLi1 = document.createElement("li");
  navDivUlLi1.setAttribute("class", "nav-item ");

  var navDivUlLi1A = document.createElement("a");
  navDivUlLi1A.setAttribute("class", "nav-link");
  navDivUlLi1A.href = "/index.html";
  navDivUlLi1A.innerText = "Home";
  navDivUlLi1.appendChild(navDivUlLi1A);

  var navDivUlLi2 = document.createElement("li");
  navDivUlLi2.setAttribute("class", "nav-item ");

  var navDivUlLi2A = document.createElement("a");
  navDivUlLi2A.setAttribute("class", "nav-link");
  navDivUlLi2A.href ="/dailyAssignments/javascriptModule/assignHome.html";
  navDivUlLi2A.innerText ="Javascript";
  navDivUlLi2.appendChild(navDivUlLi2A);

  var navDivUlLi3 = document.createElement("li");
  navDivUlLi3.setAttribute("class", "nav-item active");

  var navDivUlLi3A = document.createElement("a");
  navDivUlLi3A.setAttribute("class", "nav-link");
  navDivUlLi3A.href ="/dailyAssignments/htmlCssModule/assignHome.html";
  navDivUlLi3A.innerText = "HTML";
  navDivUlLi3.appendChild(navDivUlLi3A);

  navDivUl.append(navDivUlLi1, navDivUlLi2, navDivUlLi3);
  navDiv.appendChild(navDivUl);

  nav.append(navA, navButton, navDiv);
  return nav;
}

function createFooter(){
    var foot = document.createElement('footer');
    foot.setAttribute('class', 'footer fixed-bottom mt-auto py-2');

    var footDiv = document.createElement('div');
    footDiv.setAttribute('class', 'container-fluid');

    var footDivSpan = document.createElement('span');
    footDivSpan.setAttribute('class', 'text-muted');
    footDivSpan.innerHTML ='Designed with <i class="fas fa-heart" style="color:red"></i> by Prashant Gupta(<a href="https://github.com/codyprashant" style="color: crimson;">@codyPrashant</a>)';

    footDiv.appendChild(footDivSpan);
    foot.appendChild(footDiv);

    return foot;
}

var main = document.createElement('main');
main.setAttribute('role', 'main');
main.setAttribute('class', 'flex-shrink-0');

var mainDiv= document.createElement('div');
mainDiv.setAttribute('class', 'container-fluid');

var mainDivh1 = document.createElement('h1');
mainDivh1.setAttribute('class', 'mt-5')
mainDivh1.innerText = 'HTML/CSS/DOM: Daily Assignments -> Day 7';

var mainDivDiv = document.createElement('div');
mainDivDiv.setAttribute('class', 'row row-cols-1 row-cols-md-2')

var mainDivDivDiv = document.createElement('div');
mainDivDivDiv.setAttribute('class', 'card')
mainDivDivDiv.setAttribute('style', 'max-width: 100%;');

var mainDivDivDivDiv1 = document.createElement('div');
mainDivDivDivDiv1.setAttribute('class', 'card-header')

var mainDivDivDivDiv1h4 = document.createElement('h4');
mainDivDivDivDiv1h4.innerText ='Random Number generator';

var mainDivDivDivDiv2 = document.createElement('div');
mainDivDivDivDiv2.setAttribute('class', 'card-body');

var mainDivDivDivDiv2h5 = document.createElement('h5');
mainDivDivDivDiv2h5.setAttribute('class', 'card-title')
mainDivDivDivDiv2h5.innerText = 'We will generate unique non-repetitive random number.'

var mainDivDivDivDiv2p1 = document.createElement('p');
mainDivDivDivDiv2p1.setAttribute('class', 'card-text')
mainDivDivDivDiv2p1.innerText ='Please click on below button to generate unique number.'

var mainDivDivDivDiv2p2 = document.createElement('p');
mainDivDivDivDiv2p2.setAttribute('class', 'card-text');

var mainDivDivDivDiv2p2Button = document.createElement('button');
mainDivDivDivDiv2p2Button.setAttribute('type', 'submit');
mainDivDivDivDiv2p2Button.setAttribute('class', 'btn btn-primary mb-2');
mainDivDivDivDiv2p2Button.setAttribute('onclick', 'getrandomNumber();');
mainDivDivDivDiv2p2Button.innerText= 'Get Random Number';
mainDivDivDivDiv2p2.appendChild(mainDivDivDivDiv2p2Button);

mainDivDivDivDiv2.append(mainDivDivDivDiv2h5, mainDivDivDivDiv2p1, mainDivDivDivDiv2p2);
mainDivDivDivDiv1.appendChild(mainDivDivDivDiv1h4)
mainDivDivDiv.append(mainDivDivDivDiv1, mainDivDivDivDiv2)


var mainDivDivDiv2 = document.createElement('div');
mainDivDivDiv2.setAttribute('class', 'card')
mainDivDivDiv2.setAttribute('style', 'max-width: 100%;');

var mainDivDivDiv2Div = document.createElement('div');
mainDivDivDiv2Div.setAttribute('class', 'table-responsive')

var mainDivDivDiv2DivTable = document.createElement('table');
mainDivDivDiv2DivTable.setAttribute('class', 'table  table-borderless');

var mainDivDivDiv2DivTableThead = document.createElement('thead');
var mainDivDivDiv2DivTableTheadTr1 = document.createElement('tr');
var mainDivDivDiv2DivTableTheadTr1Th = document.createElement('th');
mainDivDivDiv2DivTableTheadTr1Th.innerText ='Output';
mainDivDivDiv2DivTableTheadTr1.appendChild(mainDivDivDiv2DivTableTheadTr1Th);
mainDivDivDiv2DivTableThead.appendChild(mainDivDivDiv2DivTableTheadTr1);

var mainDivDivDiv2DivTableTbody = document.createElement('tbody');
var mainDivDivDiv2DivTableTbodyTr1 = document.createElement('tr');
var mainDivDivDiv2DivTableTbodyTr1Td = document.createElement('td');
mainDivDivDiv2DivTableTbodyTr1Td.setAttribute('id', 'fetchedData' );

mainDivDivDiv2DivTableTbodyTr1.appendChild(mainDivDivDiv2DivTableTbodyTr1Td);
mainDivDivDiv2DivTableTbody.appendChild(mainDivDivDiv2DivTableTbodyTr1);


mainDivDivDiv2DivTable.append(mainDivDivDiv2DivTableThead, mainDivDivDiv2DivTableTbody);
mainDivDivDiv2Div.appendChild(mainDivDivDiv2DivTable)
mainDivDivDiv2.appendChild(mainDivDivDiv2Div)

// 
var brk1 = document.createElement('br');
var brk2 = document.createElement('br');

var mainDivDiv2 = document.createElement('div');
mainDivDiv2.setAttribute('class', 'row row-cols-1 row-cols-md-2')

var mainDivDiv2Div = document.createElement('div');
mainDivDiv2Div.setAttribute('class', 'card')
mainDivDiv2Div.setAttribute('style', 'max-width: 100%;');

var mainDivDiv2DivDiv1 = document.createElement('div');
mainDivDiv2DivDiv1.setAttribute('class', 'card-header')

var mainDivDiv2DivDiv1h4 = document.createElement('h4');
mainDivDiv2DivDiv1h4.innerText ='Date Calculation';

var mainDivDiv2DivDiv2 = document.createElement('div');
mainDivDiv2DivDiv2.setAttribute('class', 'card-body');

var mainDivDiv2DivDiv2h5 = document.createElement('h5');
mainDivDiv2DivDiv2h5.setAttribute('class', 'card-title')
mainDivDiv2DivDiv2h5.innerText = 'We will calculate the diffenece between the input date and todays date.'

var mainDivDiv2DivDiv2p1 = document.createElement('p');
mainDivDiv2DivDiv2p1.setAttribute('class', 'card-text')
mainDivDiv2DivDiv2p1.innerText ='Please select the date  and click on below button to get diffenece.'

var mainDivDiv2DivDiv2p2 = document.createElement('p');
mainDivDiv2DivDiv2p2.setAttribute('class', 'card-text');

var mainDivDiv2DivDiv2p2div = document.createElement('div');
mainDivDiv2DivDiv2p2div.setAttribute('class', 'form-group')

var mainDivDiv2DivDiv2p2divInput = document.createElement('input');
mainDivDiv2DivDiv2p2divInput.setAttribute('type', 'datetime-local')
mainDivDiv2DivDiv2p2divInput.setAttribute('class', 'form-control')
mainDivDiv2DivDiv2p2divInput.setAttribute('id', 'inputDate')

mainDivDiv2DivDiv2p2div.append(mainDivDiv2DivDiv2p2divInput)

var mainDivDiv2DivDiv2p2Button = document.createElement('button');
mainDivDiv2DivDiv2p2Button.setAttribute('type', 'submit');
mainDivDiv2DivDiv2p2Button.setAttribute('class', 'btn btn-primary mb-2');
mainDivDiv2DivDiv2p2Button.setAttribute('onclick', 'getCalculated();');
mainDivDiv2DivDiv2p2Button.innerText= 'Calculate';


mainDivDiv2DivDiv2p2.append(mainDivDiv2DivDiv2p2div, mainDivDiv2DivDiv2p2Button);

mainDivDiv2DivDiv2.append(mainDivDiv2DivDiv2h5, mainDivDiv2DivDiv2p1, mainDivDiv2DivDiv2p2);
mainDivDiv2DivDiv1.appendChild(mainDivDiv2DivDiv1h4)
mainDivDiv2Div.append(mainDivDiv2DivDiv1, mainDivDiv2DivDiv2)


var mainDivDiv2Div2 = document.createElement('div');
mainDivDiv2Div2.setAttribute('class', 'card')
mainDivDiv2Div2.setAttribute('style', 'max-width: 100%;');

var mainDivDiv2Div2Div = document.createElement('div');
mainDivDiv2Div2Div.setAttribute('class', 'table-responsive')

var mainDivDiv2Div2DivTable = document.createElement('table');
mainDivDiv2Div2DivTable.setAttribute('class', 'table  table-borderless');

var mainDivDiv2Div2DivTableThead = document.createElement('thead');
var mainDivDiv2Div2DivTableTheadTr1 = document.createElement('tr');
var mainDivDiv2Div2DivTableTheadTr1Th = document.createElement('th');
mainDivDiv2Div2DivTableTheadTr1Th.innerText ='Output';
mainDivDiv2Div2DivTableTheadTr1.appendChild(mainDivDiv2Div2DivTableTheadTr1Th);
mainDivDiv2Div2DivTableThead.appendChild(mainDivDiv2Div2DivTableTheadTr1);

var mainDivDiv2Div2DivTableTbody = document.createElement('tbody');
var mainDivDiv2Div2DivTableTbodyTr1 = document.createElement('tr');
var mainDivDiv2Div2DivTableTbodyTr1Td = document.createElement('td');
mainDivDiv2Div2DivTableTbodyTr1Td.setAttribute('id', 'fetchedData1' );

mainDivDiv2Div2DivTableTbodyTr1.appendChild(mainDivDiv2Div2DivTableTbodyTr1Td);
mainDivDiv2Div2DivTableTbody.appendChild(mainDivDiv2Div2DivTableTbodyTr1);


mainDivDiv2Div2DivTable.append(mainDivDiv2Div2DivTableThead, mainDivDiv2Div2DivTableTbody);
mainDivDiv2Div2Div.appendChild(mainDivDiv2Div2DivTable)
mainDivDiv2Div2.appendChild(mainDivDiv2Div2Div)

mainDivDiv2.append(mainDivDiv2Div, mainDivDiv2Div2);

mainDivDiv.append(mainDivDivDiv, mainDivDivDiv2);
mainDiv.append(mainDivh1, mainDivDiv, brk1, brk2, mainDivDiv2)
main.appendChild(mainDiv);
var navs = createNavBar();
var foots = createFooter();
document.body.append(navs, main,  foots)
