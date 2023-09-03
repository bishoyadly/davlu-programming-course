let button1 = document.querySelector('.button1');
let image1 = document.querySelector('.image1');


button1.addEventListener('click', function () {

    image1.classList.toggle('hidden');
    button1.classList.toggle('buttonClick');

    let list = image1.classList;

    // if the image class list contains the display class
    if (list.contains('display')) {
        image1.classList.remove('display');
        image1.classList.add('hidden');
    }
    // if the image class list does not contain the display class
    else {
        image1.classList.add('display');
        image1.classList.remove('hidden');
    }

});