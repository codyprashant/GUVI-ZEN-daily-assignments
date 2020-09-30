setTimeout(function(){
    document.getElementById('secs').innerText = 10;
    setTimeout(function(){
        document.getElementById('secs').innerText = 9;
        setTimeout(function(){
            document.getElementById('secs').innerText = 8;
            setTimeout(function(){
                document.getElementById('secs').innerText = 7;
                setTimeout(function(){
                    document.getElementById('secs').innerText = 6;
                    setTimeout(function(){
                        document.getElementById('secs').innerText = 5;
                        setTimeout(function(){
                            document.getElementById('secs').innerText = 4;
                            setTimeout(function(){
                                document.getElementById('secs').innerText = 3;
                                setTimeout(function(){
                                    document.getElementById('secs').innerText = 2;
                                    setTimeout(function(){
                                        document.getElementById('secs').innerText = 1;
                                        setTimeout(function(){
                                            document.getElementById('cardMain').innerHTML = '';
                                            document.getElementById('celebrate').innerHTML = 'Happy Independence Day';
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

