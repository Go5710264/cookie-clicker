let cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
clickerCounter.textContent = 0;

function imageEnlargement() {
    if (cookie.width = '200') {
        cookie.width = '250';
        setTimeout(imageReduction, 100);
    };
};

function imageReduction() {
    if (cookie.width = '250') {
        cookie.width = '200'};
};

cookie.onclick = function () { 
    return ++clickerCounter.textContent;
};

cookie.addEventListener('click', imageEnlargement);