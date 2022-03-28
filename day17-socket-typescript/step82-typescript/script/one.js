"use strict";
alert('hi');
function msg(a, b, c) {
    return a + b + c;
}
function logg(a, b, c) {
    console.log(a + b);
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByTagName('body')[0].innerHTML = msg('hello', 'hi', 'bye');
    logg('hi', 'bye');
});
