// Menunggu sampai DOM siap
document.addEventListener('DOMContentLoaded', function() {

    // Toggle Navigation Menu
    var nav = document.getElementById('myTopnav');
    var mybutton = document.getElementById('myBtn');

    function toggleNav() {
        if (nav.className === 'topnav') {
            nav.className += ' responsive';
        } else {
            nav.className = 'topnav';
        }
    }

    // Scroll to Top Button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (window.scrollY > 500) {
            mybutton.classList.add('show'); // Menambahkan class untuk tampil
        } else {
            mybutton.classList.remove('show'); // Menghilangkan class jika tidak memenuhi syarat
        }
    }

    // Fungsi scroll ke atas
    mybutton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
