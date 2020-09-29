var jsonData =[];
var totalrecords = 0;
var totalPages = 0;
function getJson(){
var request = new XMLHttpRequest();
var url_string = "json/pagination.json";
request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    jsonData = JSON.parse(this.responseText);
    totalrecords = jsonData.length;
    totalPages = Math.ceil(totalrecords/10 );
    getData(0,9);
    var start = 0;
      var end = 9;
    var ul = document.getElementById('paginationtxt')
    for (let i =1; i <= totalPages; i++){
      
      var li = document.createElement('li');
      li.setAttribute('class', 'page-item');
      var a = document.createElement('a');
      a.setAttribute('class', 'page-link');
      a.setAttribute('onclick', 'getData('+start+', '+end+')');
      a.href = '#';
      a.innerText = i
      li.appendChild(a);
      ul.appendChild(li);
      start += 10;
      end += 10;
    }
  }
};
request.open("GET", url_string, true);
request.send();
}
getJson();
  function getData(start, end){
    document.getElementById("fetchedData").innerHTML = "";
    for (i = start; i <= end; i++) {
      var row = document.createElement("tr");
      var column1 = document.createElement("td");
      column1.innerText = jsonData[i].id;
      var column2 = document.createElement("td");
      column2.innerText = jsonData[i].name;
      var column3 = document.createElement("td");
      column3.innerText = jsonData[i].email;
      row.append(column1, column2, column3);
      document.getElementById("fetchedData").append(row);
    }
  }


function addRow(dataArray, columnType) {
  var row = document.createElement("tr");
  for (i = 0; i < dataArray.length; i++) {
    var column = document.createElement(columnType);
    column.innerText = dataArray[i];
    row.append(column);
  }
  return row;
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
  navA.innerText = "GUVI | codyPrashant";

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
  navDivUlLi2A.href = "/dailyAssignments/javascriptModule/assignHome.html";
  navDivUlLi2A.innerText = "Javascript";
  navDivUlLi2.appendChild(navDivUlLi2A);

  var navDivUlLi3 = document.createElement("li");
  navDivUlLi3.setAttribute("class", "nav-item active");

  var navDivUlLi3A = document.createElement("a");
  navDivUlLi3A.setAttribute("class", "nav-link");
  navDivUlLi3A.href = "/dailyAssignments/htmlCssModule/assignHome.html";
  navDivUlLi3A.innerText = "HTML";
  navDivUlLi3.appendChild(navDivUlLi3A);

  navDivUl.append(navDivUlLi1, navDivUlLi2, navDivUlLi3);
  navDiv.appendChild(navDivUl);

  nav.append(navA, navButton, navDiv);
  return nav;
}

function createFooter() {
  var foot = document.createElement("footer");
  foot.setAttribute("class", "footer fixed-bottom mt-auto py-2");

  var footDiv = document.createElement("div");
  footDiv.setAttribute("class", "container-fluid");

  var footDivSpan = document.createElement("span");
  footDivSpan.setAttribute("class", "text-muted");
  footDivSpan.innerHTML =
    'Designed with <i class="fas fa-heart" style="color:red"></i> by Prashant Gupta(<a href="https://github.com/codyprashant" style="color: crimson;">@codyPrashant</a>)';

  footDiv.appendChild(footDivSpan);
  foot.appendChild(footDiv);

  return foot;
}

var brk1 = document.createElement("br");
var brk2 = document.createElement("br");
var main = document.createElement("main");
main.setAttribute("role", "main");
main.setAttribute("class", "flex-shrink-0");

var mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "container-fluid");

var mainDivh1 = document.createElement("h1");
mainDivh1.setAttribute("class", "mt-5");
mainDivh1.innerText = "HTML/CSS/DOM: Daily Assignments -> Day 7";

// table DIv
var mainDivDiv2 = document.createElement("div");
mainDivDiv2.setAttribute("class", "row row-cols-1 row-cols-md-1");

var mainDivDiv2Div = document.createElement("div");
mainDivDiv2Div.setAttribute("class", "card");
mainDivDiv2Div.setAttribute("style", "max-width: 100%;");

var mainDivDiv2DivDiv = document.createElement("div");
mainDivDiv2DivDiv.setAttribute("class", "table-responsive");

var mainDivDiv2DivDivtable = document.createElement("table");
mainDivDiv2DivDivtable.setAttribute("class", "table table-hover");
mainDivDiv2DivDivtable.id = 'paginate-task'

var mainDivDiv2DivDivtableThead = document.createElement("thead");
var columnArray = ["ID", "Name", "Email"];
var mainDivDiv2DivDivtableTheadTr = addRow(columnArray, "th");
mainDivDiv2DivDivtableThead.appendChild(mainDivDiv2DivDivtableTheadTr);

var mainDivDiv2DivDivtableTbody = document.createElement("tbody");
mainDivDiv2DivDivtableTbody.id = "fetchedData";

mainDivDiv2DivDivtable.append(
  mainDivDiv2DivDivtableThead,
  mainDivDiv2DivDivtableTbody
);


var navPage = document.createElement('nav');
navPage.setAttribute('aria-label', 'Page navigation example');

var ul = document.createElement('ul');
ul.setAttribute('class', 'pagination justify-content-end');
ul.id ='paginationtxt'

navPage.appendChild(ul);



mainDivDiv2DivDiv.append(mainDivDiv2DivDivtable, navPage);
mainDivDiv2Div.appendChild(mainDivDiv2DivDiv);
mainDivDiv2.appendChild(mainDivDiv2Div);

mainDiv.append(mainDivh1, mainDivDiv2);
main.appendChild(mainDiv);
var navs = createNavBar();
var foots = createFooter();
document.body.append(navs, main, foots);
