function getWeatherInfo(id, param){
    var request = new XMLHttpRequest()
    var cityName = document.getElementById(param).value;
    var url_string = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=c4e86c152eb17ceaea19646ff4511457';
    console.log(url_string)
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            document.getElementById(id).innerHTML = JSON.stringify(data, undefined, 2);
        }
      };
    request.open('GET',url_string , true) 
    request.send();
    return false;
}

