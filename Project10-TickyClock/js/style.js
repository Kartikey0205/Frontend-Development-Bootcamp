"use strict";
var dy, hr, min, sec, clock;

function clocky() {
    dy = new Date();
    hr = dy.getHours();
    min = dy.getMinutes();
    sec = dy.getSeconds();
    
    if (hr <= 9) {
        hr = '0' + hr;
    }
    if (min <= 9) {
        min = '0' + min;
    }
    if (sec <= 9) {
        sec = '0' + sec;
    }

    clock = hr + `<span class= "colon">:</span>` + min + `<span class= "colon">:</span>` + sec;
    document.getElementById("clock").innerHTML = clock;

    document.body.style.background = `rgb(${hr},${min},${sec})`;
    setTimeout(clocky, 1000);

}

clocky();




// backgroundColor();


// function backgroundColor(params) {

// }