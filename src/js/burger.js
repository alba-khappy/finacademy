document.getElementById('burger').addEventListener('click', function () {
    var openMenu = document.querySelector('.header__nav');
    openMenu.classList.toggle('header__nav--open');

    document.querySelector('#firstLine').classList.toggle('burger__line--first');
    document.querySelector('#secondLine').classList.toggle('burger__line--second');
    document.querySelector('#thirdLine').classList.toggle('burger__line--third');

})


