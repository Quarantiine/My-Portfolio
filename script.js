window.addEventListener('load', ()=> {});

// Floating Icon Section ===:
const floatingIcon = document.querySelector('.floating-icon');
const parentNavSection = document.querySelector('.parent-nav-section');
let flaotingIconSpeed = 10;

const floatingIconAppearence = ()=> {
    parentNavSection.getBoundingClientRect().y <= -100 ? floatingIcon.classList.add('floating-icon-toggle') : floatingIcon.classList.remove('floating-icon-toggle');
}
const floatingIconClickSystem = ()=> {
    window.scrollTo(0, 0);
}

floatingIcon.addEventListener('click', ()=> {
    floatingIconClickSystem();
});

setInterval(() => {
    floatingIconAppearence();
}, flaotingIconSpeed);

// Experience Year Section ===:
const experienceYearNumber = document.querySelectorAll('.experience-year-number');
const experienceYearsSlots = {
    htmlY: experienceYearNumber[0],
    cssY: experienceYearNumber[1],
    jsY: experienceYearNumber[2],
    scssY: experienceYearNumber[3],
    reactY: experienceYearNumber[4]
}
const {
    htmlY,
    cssY,
    jsY,
    scssY,
    reactY
} = experienceYearsSlots;

const experienceYearNumberSystem = ()=> {
    const date = new Date();
    const year = date.getFullYear();
    const startYear = 2019;

    htmlY.textContent = year-startYear;
    cssY.textContent = year-startYear;
    jsY.textContent = year-2020;
    scssY.textContent = year-2022;
    reactY.textContent = year-year;
}
setInterval(experienceYearNumberSystem, 1000);

// Project Section ===:
const project1Imgs = document.querySelectorAll('.projects-section-1 .project-imgs');
const project2Imgs = document.querySelectorAll('.projects-section-2 .project-imgs');
const project3Imgs = document.querySelectorAll('.projects-section-3 .project-imgs');
const projectImgLinks = document.querySelectorAll('.project-img-link');

const lastImageImplementationSystem = ()=> {
    const pro1EndIndex = project1Imgs.length;
    const pro2EndIndex = project2Imgs.length;
    const pro3EndIndex = project3Imgs.length;
    
    project1Imgs[pro1EndIndex-1].src = 'imgs/project-default-img.jpg';
    project2Imgs[pro2EndIndex-1].src = 'imgs/project-default-img.jpg';
    project3Imgs[pro3EndIndex-1].src = 'imgs/project-default-img.jpg';
}
lastImageImplementationSystem()