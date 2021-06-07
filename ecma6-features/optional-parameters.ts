var contains=document.getElementById('container');

function printNumber(inital,final=0,interval=1){
    var current=inital;

while(current > final){
    console.log(current);
    contains.innerHTML=current;
    current-=interval;
}
}
printNumber(10);