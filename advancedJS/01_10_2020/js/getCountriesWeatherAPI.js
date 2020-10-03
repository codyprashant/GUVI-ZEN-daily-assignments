function getAllCountries() {
    fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;region;flag;currencies;latlng')
        .then(response => response.json())
            .then(result => {
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
                    createCard(flag, name, capital, region, latLong, currName, currCode, currSymbol);
                }
            });

}

function getWeather(city){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=c4e86c152eb17ceaea19646ff4511457')
        .then(response => response.json())
            .then(result => {
                    var weather = document.getElementById('weatherDetails'+city);
                    
                    var dt = document.createElement('dt');
                    dt.setAttribute('class', 'col-sm-5');
                    dt.id = 'tempLabel'+city
                    dt.innerText = 'Temperature'

                    var dd = document.createElement('dd');
                    dd.setAttribute('class', 'col-sm-7');
                    dd.id = 'temp'+city
                    dd.innerHTML = (+result.main.temp - 273).toFixed(2)+'&#8451;';

                    var dt2 = document.createElement('dt');
                    dt2.setAttribute('class', 'col-sm-5');
                    dt.id = 'weatherLabel'+city
                    dt2.innerText = 'Weather'

                    var dd2 = document.createElement('dd');
                    dd2.setAttribute('class', 'col-sm-7');
                    dd.id = 'weather'+city
                    dd2.innerText = result.weather[0].main;
                    weather.append(dt, dd, dt2, dd2)
                
            })
}

 function weather(city){
    document.getElementById('weatherDetails'+city).innerHTML = '';
    getWeather(city);
 }

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

    var dl2 = document.createElement('dl');
    dl2.setAttribute('class', 'row')
    dl2.id ='weatherDetails'+capital;

    var weatherButton = document.createElement('button');
    weatherButton.setAttribute('class', 'btn btn-outline-info butCenter');
    weatherButton.id = 'buttonWeather'
    weatherButton.type = 'button';
    weatherButton.setAttribute('onclick', 'weather("'+capital+'")')
    // weatherButton.onclick = 'getWeather('+value[0]+')';
    weatherButton.innerText= "Get Weather";

    cardDiv.append(heading, dl, dl2, weatherButton);
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


getAllCountries();