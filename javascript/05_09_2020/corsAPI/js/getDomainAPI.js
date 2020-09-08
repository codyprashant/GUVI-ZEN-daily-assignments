function getDomainInfo(id, param){
    var request = new XMLHttpRequest()
    var domainnme = document.getElementById(param).value;
    var url_string = 'https://api.domainsdb.info/v1/domains/search?domain='+ domainnme;
    console.log(url_string)
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            document.getElementById(id).innerHTML = JSON.stringify(data, undefined, 2);
        }
      };
    request.open('GET',url_string , true) 
    request.setRequestHeader( 'Access-Control-Allow-Origin', '*');
    request.send();
    return false;
}

