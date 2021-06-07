var contains = document.getElementById('container');
function printNumber(inital, final, interval) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
    var current = inital;
    while (current > final) {
        console.log(current);
        contains.innerHTML = current;
        current -= interval;
    }
}
printNumber(10);
