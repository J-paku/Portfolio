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
    navbarToggleBtn.classList.remove('open');
});


// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toogle-btn');
navbarToggleBtn.addEventListener('click', (sex) => {
    navbarMenu.classList.toggle('open');
    navbarToggleBtn.classList.toggle('open');
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
    home.style.opacity = 1 - window.scrollY / homeHeight;
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

// 1.すべての要素を持ってくる
// 2.IntersectionObserverを用いてすべてのSectionを観察する
// 3.ビューポートに映ってるNavbarを活性化する

const sectionsIds = [
    '#home',
    '#about',
    '#skill',
    '#work',
    '#contact',
];
const navItems = sectionsIds.map(id => 
    document.querySelector(`[data-link="${id}"]`));
const sections = sectionsIds.map(id => document.querySelector(id));
// console.log(navItems);

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];
function selectNavItem(selected) {
    selectedNavItem.classList.remove('active');
    selectedNavItem = selected;
    selectedNavItem.classList.add('active');
}
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
};
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting && entry.intersectionRatio > 0) {
            const index = sectionsIds.indexOf(`#${entry.target.id}`);

            //스크롤링이 아래로 되어서 페이지가 올라옴
            if(entry.boundingClientRect.y < 0) {
                selectedNavIndex = index + 1;
            } else {
                selectedNavIndex = index - 1;
            }
        }
    });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener('wheel', () => {
    if(window.scrollY === 0) {
        selectedNavIndex = 0 ;
    } else if (Math.round(window.scrollY + window.innerHeight) >= document.body.scrollHeight){
        selectedNavIndex = navItems.length -  1;
    }
    selectNavItem(navItems[selectedNavIndex]);
});

window.addEventListener('touchmove', () => {
    if(window.scrollY === 0) {
        selectedNavIndex = 0 ;
    } else if (Math.round(window.scrollY + window.innerHeight) >= document.body.scrollHeight){
        selectedNavIndex = navItems.length -  1;
    }
    selectNavItem(navItems[selectedNavIndex]);
});


// Contact　Meモーダル
const ContactModal = document.querySelector('#modal');
const homeContactBtn = document.querySelector('.home__button');
homeContactBtn.addEventListener('click', (e) => {
    ContactModal.style.display = "flex";
    ContactModal.style.margin = "0 0 100px 0";
});

ContactModal.addEventListener('click', (e)=>{
    const evTarget = e.target;
    if(evTarget.classList.contains("modal-overlay")) {
        ContactModal.style.display = "none";
    }
});

const ModalClose = document.querySelector('#closeModal');
ModalClose.addEventListener('click', () => {
    ContactModal.style.display = "none";
});

// function あつまり
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
    selectNavItem(navItems[sectionsIds.indexOf(selector)]);
}

function Contact_mail_click() {
    if(!confirm('メールを送りますか？')){
        return false;
    }
    alert('送信完了しました。');
    ContactModal.style.display = "none";
}