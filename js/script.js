document.addEventListener('DOMContentLoaded', function () {
    const navBarBtn = document.querySelector('.nav__bars-button');

    navBarBtn.onclick = () => {
        const navList = document.querySelector('.nav__list');
        const navBarIcon = document.querySelector('#nav__bars-icon')

        navList.classList.toggle('active');
        navBarIcon.classList.toggle('fa-bars')
        navBarIcon.classList.toggle('fa-times');
    };

})