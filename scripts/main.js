'use strict';

const mainPics = document.querySelectorAll('.main-pic'),
    thumbnails = document.querySelectorAll('.link-image'),
    description = document.querySelector('.description'),
    backButton = document.querySelector('.item-6'),
    homePage = {
        thumbSrc: [],
        thumbAlt: [],
        mainPicsSrc: [],
    };

for (let i = 0; i < thumbnails.length - 1; i++) {
    homePage.thumbSrc.push(thumbnails[i].src);
    homePage.thumbAlt.push(thumbnails[i].alt);
    homePage.mainPicsSrc.push(mainPics[i].src);
}

function hideMainPics() {
    mainPics.forEach(item => {
        item.classList.add('hidden');
        item.classList.remove('show', 'fade');
    });
}

function showMainPic(n = 5) {
    mainPics[n].classList.add('show', 'fade');
    mainPics[n].classList.remove('hidden');
}

function pictureChanger(theme) {
    for (let i = 1; i < thumbnails.length; i++) {
        thumbnails[i-1].src = `images/${theme + String(i)}sm.jpg`;
        mainPics[i-1].src = `images/${theme + String(i)}.jpg`;
        thumbnails[i-1].alt = '';
    }
}

hideMainPics();
showMainPic();

thumbnails.forEach((item, i) => {
    thumbnails[i].addEventListener('mouseover', () => {
        hideMainPics();
        showMainPic(i);
        description.textContent = thumbnails[i].alt;
    });
    thumbnails[i].addEventListener('mouseout', () => {
        description.textContent = '';
    });
    thumbnails[i].addEventListener('click', (evt) => {
        evt.preventDefault();        
        if (backButton.classList.contains('hidden')) {
            backButton.classList.add('show', 'fade');
            backButton.classList.remove('hidden');
            pictureChanger(thumbnails[i].dataset.theme);
        }
    });
});

backButton.addEventListener('click', function() {
    backButton.classList.add('hidden');
    backButton.classList.remove('show', 'fade');
    for (let i = 0; i < thumbnails.length - 1; i++) {
        thumbnails[i].src = homePage.thumbSrc[i];
        thumbnails[i].alt = homePage.thumbAlt[i];
        mainPics[i].src = homePage.mainPicsSrc[i];
    }
});

// old code

// let mainPic = document.querySelector('.main-pic');
// let defaultPic = mainPic.src;
// let thumbnails = document.querySelectorAll('.link-image');
// let description = document.querySelector('.description');
// let defaultDescription = description.textContent;
// let userButton = document.querySelector('.user-button');
// let title = document.querySelector('.title');
// let defaultTitle = title.textContent;
// let backButton = document.querySelector('.item-6');

// let pictureChanger = function(theme) {
//     for (let j = 0; j < thumbnails.length - 1; j++) {
//         thumbnails[j].src = 'images/' + theme + String(j+1) + 'sm.jpg';     
//     }
// };

// for (let i = 0; i < thumbnails.length; i++) {
//     thumbnails[i].addEventListener('mouseover', function () {
//         mainPic.src = thumbnails[i].src.slice(0, -6) + '.jpg';
//         if (backButton.classList.contains('hidden') || i===5) {
//             description.textContent = thumbnails[i].alt;
//         }
//     });
//     thumbnails[i].addEventListener('mouseout', function () {
//         if (backButton.classList.contains('hidden')) {    
//             mainPic.src = defaultPic;
//         }
//         description.textContent = defaultDescription;
//     });
//     if (i < 5) {
//         thumbnails[i].addEventListener('click', function() {
//             if (backButton.classList.contains('hidden')) {
//                 pictureChanger(thumbnails[i].dataset.theme);
//                 backButton.classList.remove('hidden');
//             }
//         });
//     }
// }

// backButton.addEventListener('click', function() {
//     backButton.classList.add('hidden');
//     thumbnails[0].src = 'images/mypic1sm.jpg';
//     thumbnails[1].src = 'images/mypic21sm.jpg';
//     thumbnails[2].src = 'images/cats1sm.jpg';
//     thumbnails[3].src = 'images/creatures1sm.jpg';
//     thumbnails[4].src = 'images/owners1sm.jpg';
// });
