var screen_value = document.getElementById("screen_value");
var type_value = '';
var root = document.querySelector(":root");
var color = 'white'
function ce() {
    type_value = ''
    screen_value.innerHTML  =  ''
    console.log('clear');
}
function eq() {
    screen_value.innerHTML = eval(type_value)
    console.log('=');
}

function num(number) {
    type_value += String(number)
    screen_value.innerHTML = type_value
    console.log(number);
}
function op(op) {
    type_value += op;
    screen_value.innerHTML = type_value;
    console.log(op);
}

function ic() {
    root.style.setProperty('--inverse', color);
    color = (color == 'white') ? 'rgba(0, 0, 0, 0.836)' : 'white';
    root.style.setProperty('--color', color);
    console.log(color);
}