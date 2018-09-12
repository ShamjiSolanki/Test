//alert("This is an alert box!");
var x = 10.11;
document.write(x, '\n');

var name = "My name is John, John banega don"
document.write('<br><br>' ,name);

var name2 = "My name is don, 'John' Banega don"
document.write('<br><br>', name2)

var esc_char = "Hello \n how are you"
document.write(esc_char)

var isactive = true
document.write('\n',isactive)

var x = 10;
var y = 20;
var z = x + y;
document.write('<br><br>-------z',z);

// Post increment and pre increment
var x = 50;
var y = 60;

var x = y++;
var y = ++y;
document.write('<br><br>', x);
document.write('<br><br>', y);
//comparision
var x = 5;
var y = 10;

//document.write('comparions-----<br>',x==y);
var x = 5;
var y = 10;

//document.write('comparions-----<br>',x!=y);
var x = 5;
var y = 5.0;

document.write('<br>comparions-----',x==y);
document.write('<br>comparions-----',x===y);

var x = 5; var y = 5;
var a = 5; var b = 10;

if (x == y || a == b)
    {
        document.write('<br>both are same')
    }
else
    {
        document.write('<br> Both are not same')
    }

var x = 5; var y = 7;
var a = 5; var b = 10;

var c = (x>y) ? "Less" : "Gret";

document.write('<br><br>----------',c);

var a = "shamji"; var b = "solanki";

document.write('<br><br>----------', a + b);
if (x < y)
    {
        document.write('<br>both are same');
    }
else
    {
        document.write('<br> Both are not same');
    }

a = 5; b = 10 ; c = 15;
//
//if(a>b){
//        alert('a is greater than b');
//}else if(b> c){
//        alert('b is greate than c');
//}else{
//        alert('C is greateeeeee');
//}

//swich case

//var ar = 'singer';
//
//switch(ar){
//    case 'dancer':
//        alert('he is dancer');
//        break
//    case 'writer':
//        alert('he is writer');
//        break
//    case 'singer':
//        alert('he is dancer');
//        break
//}

//for loop

//for(var i=10; i>=1; i--){
  //  document.write('<br>', i);
//}


//var i = 1;
//while(i<=12){
//    document.write('-------I',i);
//    i++;
//}

//var i = 10;
//
//do{
//    document.write('<br>',i);
//    i++
//}while(i<=5);

//for(var i=1; i<=10; i++){
//    if(i==5){
//        continue;
//     }
//    document.write('<br>',i);
//}
//document.write('from lopp out');

var i = 0;

while(i<6){
    i++;
}
document.write('------',i)

