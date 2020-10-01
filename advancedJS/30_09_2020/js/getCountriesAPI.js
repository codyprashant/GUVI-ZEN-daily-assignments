function getAllCountries(id) {
  var request = new XMLHttpRequest();
  var url_string =  "https://restcountries.eu/rest/v2/all?fields=name;capital;region;flag;currencies;latlng";

  return new Promise(function (resolve, reject) {
    request.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Error, status code = " + this.status);
        }
      }
    };

    request.open("GET", url_string, true);
    request.send();
  });
}

getAllCountries()
  .then(function (result) {
    for(let i = 0; i< result.length; i++){
        if(result[i].name){
            var name = result[i].name;
        } else{
            var name = '-';
        }
        if(result[i].capital){
            var capital = result[i].capital;
        } else{
            var capital = '-';
        }
        if(result[i].flag){
            var flag = result[i].flag;
        } else{
            var flag = '-';
        }
        if(result[i].region){
            var region = result[i].region;
        } else{
            var region = '-';
        }
        if(result[i].latlng){
            var latLong = result[i].latlng;
        } else{
            var latLong = '-';
        }

        if(result[i].currencies[0].name){
            var currName = result[i].currencies[0].name;
        } else{
            var currName = '-';
        }
        if(result[i].currencies[0].code){
            var currCode = result[i].currencies[0].code;
        } else{
            var currCode = '-';
        }
        if(result[i].currencies[0].symbol){
            var currSymbol = result[i].currencies[0].symbol;
        } else{
            var currSymbol = '-';
        }
        // var name = result[i].name;
        // var capital = result[i].capital;
        // var flag = result[i].flag;
        // var region = result[i].region;
        // var latLong = result[i].latlng;
        // var currName = result[i].currencies[0].name;
        // var currCode = result[i].currencies[0].code;
        // var currSymbol = result[i].currencies[0].symbol;
        createCard(flag, name, capital, region, latLong, currName, currCode, currSymbol);
    }
    
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });



function createCard(flag, name, capital, region, latLong, currName, currCode, currSymbol){
    var div = document.createElement('div');
    div.setAttribute('class', 'col mb-3');

    var divCard = document.createElement('div');
    divCard.setAttribute('class', 'card');

    var img = document.createElement('img');
    img.setAttribute('class','card-img-top img-fluid imgProps');
    img.src = flag;
    img.alt = name;

    var cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card-body');

    var heading = document.createElement('h5');
    heading.setAttribute('class', 'card-title text-center');
    heading.innerText = name;

    var labels = ['Capital', 'Region', 'Lat-Long', 'Currency Name', 'Currency Code', 'Currency Symbol']
    var dl = createDescription(labels, [capital, region, latLong, currName, currCode, currSymbol]);

    cardDiv.append(heading, dl);
    divCard.append(img, cardDiv);
    div.appendChild(divCard);
    document.getElementById('countriesData').append(div);
}


function createDescription(label, value){

    var dl = document.createElement('dl');
    dl.setAttribute('class', 'row')

    for(let i = 0; i< label.length; i++){
        var dt = document.createElement('dt');
        dt.setAttribute('class', 'col-sm-5');
        dt.innerText = label[i]

        var dd = document.createElement('dd');
        dd.setAttribute('class', 'col-sm-7');
        dd.innerText = value[i]

        dl.append(dt, dd);
    }
    return dl;
}


