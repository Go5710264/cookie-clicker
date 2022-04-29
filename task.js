let cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
clickerCounter.textContent = 0;

cookie.onclick = function() {
    return ++clickerCounter.textContent;
};