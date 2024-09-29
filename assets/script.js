// Toggle Navigation Menu
function toggleNav() {
    var nav = document.getElementById('myTopnav');
    if (nav.className === 'topnav') {
        nav.className += ' responsive';
    } else {
        nav.className = 'topnav';
    }
}

// Scroll to Top Button
var mybutton = document.getElementById('myBtn');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = 'block';
    } else {
        mybutton.style.display = 'none';
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
