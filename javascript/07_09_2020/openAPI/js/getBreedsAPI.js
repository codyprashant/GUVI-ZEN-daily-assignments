function getAllBreeds(id){
    var request = new XMLHttpRequest()
    var url_string = 'https://dog.ceo/api/breeds/list/all';
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            document.getElementById(id).innerHTML = JSON.stringify(data, undefined, 2);
        }
      };
    request.open('GET',url_string , true) 
    request.send();
}

function getsubBreeds(id, param){
    var request = new XMLHttpRequest()
    var breedname = document.getElementById(param).value;
    var url_string = 'https://dog.ceo/api/breed/'+ breedname+'/list';
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            document.getElementById(id).innerHTML = JSON.stringify(data, undefined, 2);
        }
      };
    request.open('GET',url_string , true) 
    request.send();
}

function getimagesBreeds(id, param){
    var request = new XMLHttpRequest()
    var breedname = document.getElementById(param).value;
    var url_string = 'https://dog.ceo/api/breed/'+ breedname+'/images/random';
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            document.getElementById(id).innerHTML = JSON.stringify(data, undefined, 2);
        }
      };
    request.open('GET',url_string , true) 
    request.send();
}