var body = document.getElementsByTagName('body') [0];
body.style.backgroundColor = 'white';

window.onscroll = function (event) {
    var scroll = window.scrollY;
    if (scroll < 900) {
        body.style.backgroundColor = 'white';
    } else if (scroll >= 900 && scroll < 1800) {
        body.style.backgroundColor = '#00c1b5';
    } else if (scroll >= 1800 && scroll < 2800) {
        body.style.backgroundColor ='#ff651a';
    } else if (scroll >= 2800 && scroll < 3760) {
        body.style.backgroundColor = '#ffbe00';
    } else if (scroll >= 3760 && scroll < 4700) {
        body.style.backgroundColor = '#1d3fbb';
    } else {
        body.style.backgroundColor = '#e30512';
    }
}