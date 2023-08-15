let navBtn1 = document.getElementById('navBTN1');
let navBtn2 = document.getElementById('navBTN2');

let  url  = window.location.href;

if (url.includes('/you')) {
    navBtn1.innerHTML = 'Home';
    navBtn1.setAttribute('href', '/home');
};

if (url.includes('/create')) {
    navBtn1.innerHTML = 'Home';
    navBtn1.setAttribute('href', '/home');
    navBtn2.innerHTML = 'Dashboard';
    navBtn2.setAttribute('href', '/you');
};

if (url.includes('/home')) {
    navBtn1.innerHTML = 'Dashboard';
    navBtn1.setAttribute('href', '/you');
    navBtn2.innerHTML = 'Create';
    navBtn2.setAttribute('href', '/create');
}