'use strict';


// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


//  Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});


// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toogle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});


// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__button');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});


// Handle the TopPage Button
const topPageButton = document.querySelector('.topPage');
topPageButton.addEventListener('click', () => {
    
    scrollIntoView('#home');
});


// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 0.9 - window.scrollY / homeHeight;
}); 


// Show "Page up" button when scrolling down
const arrowUp = document.querySelector('.topPage');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});


// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (ev) =>{
    const filter = ev.target.dataset.filter || ev.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }


    // Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = 
        ev.target.nodeName === 'BUTTON' ? ev.target : ev.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anime-out');
    setTimeout(() => {
    //for(let project of projects), for(let i=0; i< projects.lengthi++){project = projects[i];と等しい}
    projects.forEach((project) => {
        if(filter === '*' || filter === project.dataset.type){
            project.classList.remove('invisible');
        }else{
            project.classList.add('invisible');
        }
    });

        projectContainer.classList.remove('anime-out');
    }, 250);
});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}