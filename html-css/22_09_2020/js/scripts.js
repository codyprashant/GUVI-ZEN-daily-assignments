var recordCount = 0;
function validateFields() {
  if (document.getElementById("firstName").value == "") {
    alert("Please enter valid First Name");
    return false;
  }
  if (document.getElementById("lastName").value == "") {
    alert("Please enter valid Last Name");
    return false;
  }
  if (document.getElementById("gender").value == "") {
    alert("Please select valid gender");
    return false;
  }
  if (document.getElementById("address").value == "") {
    alert("Please enter valid Address");
    return false;
  }
  if (document.getElementById("pinCode").value == "") {
    alert("Please enter valid Pin Code");
    return false;
  }
  if (document.getElementById("state").value == "") {
    alert("Please select valid State");
    return false;
  }
  if (document.getElementById("country").value == "") {
    alert("Please select valid Country");
    return false;
  }
  if (document.getElementById("food").value == "") {
    alert("Please select valid choice of food");
    return false;
  } else {
    var selected = [];
    for (var option of document.getElementById("food").options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }
    if(selected.length < 2){
        alert("Please select minimum two choice of food");
        return false;
    }
  }
  return true;
}

function addrecord() {
  var validate = validateFields();
  if (validate === true) {
    var selected = [];
    for (var option of document.getElementById("food").options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }
    var data = [
      ++recordCount,
      document.getElementById("firstName").value,
      document.getElementById("lastName").value,
      document.getElementById("gender").value,
      document.getElementById("address").value,
      document.getElementById("pinCode").value,
      document.getElementById("state").value,
      document.getElementById("country").value,
      selected.join(', '),
    ];

    var dataDom = addRow(data, "td");

    document.getElementById("fetchedData").append(dataDom);
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

function addinputField(
  classNo,
  labelName,
  labelText,
  inputClass,
  inputType,
  inputId,
  inputName
) {
  var div = document.createElement("div");
  div.setAttribute("class", "form-group col-md-" + classNo);
  var label = document.createElement("label");
  label.setAttribute("for", labelName);
  label.innerText = labelText;

  var input = document.createElement("input");
  input.setAttribute("class", inputClass);
  input.type = inputType;
  input.id = inputId;
  input.name = inputName;

  div.append(label, input);
  return div;
}

function addSelectField(
  classNo,
  labelName,
  labelText,
  selectClass,
  selectId,
  selectName,
  optArr
) {
  var div = document.createElement("div");
  div.setAttribute("class", "form-group col-md-" + classNo);
  var label = document.createElement("label");
  label.setAttribute("for", labelName);
  label.innerText = labelText;

  var select = document.createElement("select");
  if (selectId == "food") {
    select.setAttribute("class", "selectpicker " + selectClass);
    select.multiple = true;
  } else {
    select.setAttribute("class", selectClass);
  }

  select.id = selectId;
  select.name = selectName;

  for (var i = 0; i < optArr.length; i++) {
    var option = document.createElement("option");
    if (optArr[i] == "") {
      option.value = "";
      option.innerText = "Choose options";
    } else {
      option.value = optArr[i];
      option.innerText = optArr[i];
    }
    select.append(option);
  }

  div.append(label, select);
  return div;
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

var mainDivDiv = document.createElement("div");
mainDivDiv.setAttribute("class", "row row-cols-1 row-cols-md-1");

var mainDivDivDiv = document.createElement("div");
mainDivDivDiv.setAttribute("class", "card");
mainDivDivDiv.setAttribute("style", "max-width: 100%;");

var mainDivDivDivDiv1 = document.createElement("div");
mainDivDivDivDiv1.setAttribute("class", "card-header");

var mainDivDivDivDiv1h4 = document.createElement("h4");
mainDivDivDivDiv1h4.innerText = "Dynamically adding data in table from Form ";

mainDivDivDivDiv1.appendChild(mainDivDivDivDiv1h4);

var mainDivDivDivDiv2 = document.createElement("div");
mainDivDivDivDiv2.setAttribute("class", "card-body");

var mainDivDivDivDiv2Div1 = document.createElement("div");
mainDivDivDivDiv2Div1.setAttribute("class", "form-row");

mainDivDivDivDiv2Div1div1 = addinputField(
  "4",
  "firstName",
  "First name",
  "form-control",
  "text",
  "firstName",
  "firstName"
);
mainDivDivDivDiv2Div1div2 = addinputField(
  "4",
  "lastName",
  "Last Name",
  "form-control",
  "text",
  "lastName",
  "lastName"
);
mainDivDivDivDiv2Div1div3 = addSelectField(
  "4",
  "gender",
  "Gender",
  "form-control",
  "gender",
  "gender",
  ["", "Male", "Female"]
);

mainDivDivDivDiv2Div1.append(
  mainDivDivDivDiv2Div1div1,
  mainDivDivDivDiv2Div1div2,
  mainDivDivDivDiv2Div1div3
);

var mainDivDivDivDiv2Div2 = document.createElement("div");
mainDivDivDivDiv2Div2.setAttribute("class", "form-row");
mainDivDivDivDiv2Div2div1 = addinputField(
  "9",
  "address",
  "Address",
  "form-control",
  "text",
  "address",
  "address"
);
mainDivDivDivDiv2Div2div2 = addinputField(
  "3",
  "pinCode",
  "Pincode",
  "form-control",
  "text",
  "pinCode",
  "pinCode"
);

mainDivDivDivDiv2Div2.append(
  mainDivDivDivDiv2Div2div1,
  mainDivDivDivDiv2Div2div2
);

var mainDivDivDivDiv2Div3 = document.createElement("div");
mainDivDivDivDiv2Div3.setAttribute("class", "form-row");

mainDivDivDivDiv2Div3div1 = addSelectField(
  "4",
  "state",
  "State",
  "form-control",
  "state",
  "state",
  ["", "Uttar Pradesh", "Tamil Nadu", "Andhra Pradesh", "Himachal Pradesh"]
);
mainDivDivDivDiv2Div3div2 = addSelectField(
  "4",
  "country",
  "Country",
  "form-control",
  "country",
  "country",
  ["", "India", "Sri lanka", "Latvia", "Germany"]
);
mainDivDivDivDiv2Div3div3 = addSelectField(
  "4",
  "food",
  "Choice of Food",
  "form-control",
  "food",
  "food",
  ["Indian", "Italian", "Continental", "Chinese", "Vietnamese"]
);
mainDivDivDivDiv2Div3.append(
  mainDivDivDivDiv2Div3div1,
  mainDivDivDivDiv2Div3div2,
  mainDivDivDivDiv2Div3div3
);

mainDivDivDivDiv2Button = document.createElement("button");
mainDivDivDivDiv2Button.type = "submit";
mainDivDivDivDiv2Button.setAttribute("class", "btn btn-primary");
mainDivDivDivDiv2Button.setAttribute("onclick", "addrecord()");
mainDivDivDivDiv2Button.innerText = "Add Record";

//mainDivDiv Form Div
mainDivDivDivDiv2.append(
  mainDivDivDivDiv2Div1,
  mainDivDivDivDiv2Div2,
  mainDivDivDivDiv2Div3,
  mainDivDivDivDiv2Button
);
mainDivDivDiv.append(mainDivDivDivDiv1, mainDivDivDivDiv2);
mainDivDiv.appendChild(mainDivDivDiv);

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

var mainDivDiv2DivDivtableThead = document.createElement("thead");
var columnArray = [
  "ID",
  "First Name",
  "Last Name",
  "Gender",
  "Address",
  "Pin code",
  "State",
  "Country",
  "Food Choice",
];
var mainDivDiv2DivDivtableTheadTr = addRow(columnArray, "th");
mainDivDiv2DivDivtableThead.appendChild(mainDivDiv2DivDivtableTheadTr);

var mainDivDiv2DivDivtableTbody = document.createElement("tbody");
mainDivDiv2DivDivtableTbody.id = "fetchedData";

mainDivDiv2DivDivtable.append(
  mainDivDiv2DivDivtableThead,
  mainDivDiv2DivDivtableTbody
);
mainDivDiv2DivDiv.appendChild(mainDivDiv2DivDivtable);
mainDivDiv2Div.appendChild(mainDivDiv2DivDiv);
mainDivDiv2.appendChild(mainDivDiv2Div);

mainDiv.append(mainDivh1, mainDivDiv, brk1, brk2, mainDivDiv2);
main.appendChild(mainDiv);
var navs = createNavBar();
var foots = createFooter();
document.body.append(navs, main, foots);
$(function () {
  $(".selectpicker").selectpicker();
});
