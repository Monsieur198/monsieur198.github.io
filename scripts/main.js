let mainPic = document.querySelector('.main-pic');
let defaultPic = mainPic.src;
let thumbnails = document.querySelectorAll('.link-image');
let description = document.querySelector('.description')
let defaultDescription = description.textContent;
let userButton = document.querySelector('.user-button');
let title = document.querySelector('.title');
let defaultTitle = title.textContent;
let backButton = document.querySelector('.item-6');

let pictureChanger = function(theme) {
    for (let j = 0; j < thumbnails.length - 1; j++) {
        thumbnails[j].src = 'images/' + theme + String(j+1) + 'sm.jpg';     
    }
};

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function () {
        mainPic.src = thumbnails[i].src.slice(0, -6) + '.jpg';
        if (backButton.classList.contains('hidden') || i===5) {
            description.textContent = thumbnails[i].alt;
        }
    })
    thumbnails[i].addEventListener('mouseout', function () {
        if (backButton.classList.contains('hidden')) {    
            mainPic.src = defaultPic;
        }
        description.textContent = defaultDescription;
    })
    if (i < 5) {
        thumbnails[i].addEventListener('click', function() {
            if (backButton.classList.contains('hidden')) {
                pictureChanger(thumbnails[i].dataset.theme);
                backButton.classList.remove('hidden');
            }
        })
    }
}

backButton.addEventListener('click', function() {
    backButton.classList.add('hidden');
    thumbnails[0].src = 'images/mypic1sm.jpg';
    thumbnails[1].src = 'images/mypic21sm.jpg';
    thumbnails[2].src = 'images/cats1sm.jpg';
    thumbnails[3].src = 'images/creatures1sm.jpg';
    thumbnails[4].src = 'images/owners1sm.jpg';
})



/* function setUserName() {                             //Спрашивание имени и кнопка
    var myName = prompt('Пожалйста представтесь.');
    localStorage.setItem('name', myName);
    title.textContent = myName + ', д' + defaultTitle.slice(1);
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    title.textContent = storedName + ', д' + defaultTitle.slice(1);
}

userButton.onclick = function () {
    setUserName();
} */

/*  mainPic.onclick = function() {                       //не работает.. почему?
    if (mainPic.src == 'images/profile.jpg') {
        mainPic.src = 'images/profile2.jpg';
    } else if (mainPic.src == 'images/profile2.jpg') {
        mainPic.src = 'images/profile3.jpg';
    } else {
        mainPic.src = 'images/profile.jpg';
    }
} */
