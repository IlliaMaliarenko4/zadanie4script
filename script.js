const themeBtn = document.getElementById('theme-btn');
const themeLink = document.getElementById('theme-style');

themeBtn.addEventListener('click', function() {
    if (themeLink.getAttribute('href') === 'red.css') {
        themeLink.setAttribute('href', 'green.css');
        themeBtn.textContent = 'Zmień motyw na czerwony';
    } else {
        themeLink.setAttribute('href', 'red.css');
        themeBtn.textContent = 'Zmień motyw na zielony';
    }
});

const toggleBtn = document.getElementById('toggle-btn');
const projektySekcja = document.getElementById('projekty-sekcja');

toggleBtn.addEventListener('click', function() {
    if (projektySekcja.style.display === 'none') {
        projektySekcja.style.display = 'block';
    } else {
        projektySekcja.style.display = 'none';
    }
});
