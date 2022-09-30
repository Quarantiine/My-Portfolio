"use strict";

window.addEventListener('load', function () {}); // Floating Icon Section ===:

var floatingIcon = document.querySelector('.floating-icon');
var parentNavSection = document.querySelector('.parent-nav-section');
var flaotingIconSpeed = 10;

var floatingIconAppearence = function floatingIconAppearence() {
  parentNavSection.getBoundingClientRect().y <= -100 ? floatingIcon.classList.add('floating-icon-toggle') : floatingIcon.classList.remove('floating-icon-toggle');
};

var floatingIconClickSystem = function floatingIconClickSystem() {
  window.scrollTo(0, 0);
};

floatingIcon.addEventListener('click', function () {
  floatingIconClickSystem();
});
setInterval(function () {
  floatingIconAppearence();
}, flaotingIconSpeed); // Experience Year Section ===:

var experienceYearNumber = document.querySelectorAll('.experience-year-number');
var experienceYearsSlots = {
  htmlY: experienceYearNumber[0],
  cssY: experienceYearNumber[1],
  jsY: experienceYearNumber[2],
  scssY: experienceYearNumber[3],
  sassY: experienceYearNumber[4],
  jqY: experienceYearNumber[5],
  tailwindY: experienceYearNumber[6]
};
var htmlY = experienceYearsSlots.htmlY,
    cssY = experienceYearsSlots.cssY,
    jsY = experienceYearsSlots.jsY,
    scssY = experienceYearsSlots.scssY,
    sassY = experienceYearsSlots.sassY,
    jqY = experienceYearsSlots.jqY,
    tailwindY = experienceYearsSlots.tailwindY;

var experienceYearNumberSystem = function experienceYearNumberSystem() {
  var date = new Date();
  var year = date.getFullYear();
  var startYear = 2019;
  htmlY.textContent = year - startYear;
  cssY.textContent = year - startYear;
  jsY.textContent = year - 2020; // scssY.innerHTML = `"<1 Years Of Experience"`;
  // sassY.innerHTML = "<1 Years Of Experience";
  // jqY.innerHTML = "<1 Years Of Experience";
  // tailwindY.innerHTML = "<1 Years Of Experience";
};

setInterval(experienceYearNumberSystem, 1000); // Project Section ===:

var project1Imgs = document.querySelectorAll('.projects-section-1 .project-imgs');
var project2Imgs = document.querySelectorAll('.projects-section-2 .project-imgs');
var project3Imgs = document.querySelectorAll('.projects-section-3 .project-imgs');
var projectImgLinks = document.querySelectorAll('.project-img-link');

var lastImageImplementationSystem = function lastImageImplementationSystem() {
  var pro1EndIndex = project1Imgs.length;
  var pro2EndIndex = project2Imgs.length;
  var pro3EndIndex = project3Imgs.length;
  project1Imgs[pro1EndIndex - 1].src = 'imgs/project-default-img.jpg';
  project2Imgs[pro2EndIndex - 1].src = 'imgs/project-default-img.jpg';
  project3Imgs[pro3EndIndex - 1].src = 'imgs/project-default-img.jpg';
};

lastImageImplementationSystem();