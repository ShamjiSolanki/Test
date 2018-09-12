//function myAlert() {
//   alert("Hi" + i);
//}
//
//for(var i=0; i <= 12000; i++){
////    if(i <= 9000){
////        clearInterval()
////    }
//    setInterval(myAlert(i), 3000);
//}


var date1 = new Date();

//document.write('----------',date1);
//
//var d1 = new Date(86400000*10);
//var d2 = new Date(dateString);
//var d3 = new Date(year, month, day, hours, minutes, seconds, milliseconds);

//document.write('<br>',date1.getFullYear());


function clock(){
    var date1 = new Date();
    var seconds = date1.getSeconds()
    document.body.innerHTML = "<h1><center><br>Hours:" + date1.getHours() + "<br>Minuts:" + date1.getMinutes() + "<br>Seconds" + date1.getSeconds();
}

setInterval(clock, 1000);