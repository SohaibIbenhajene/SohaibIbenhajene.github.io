const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".header .nav-bar .nav-list ul li");

window.addEventListener("scroll", () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
        }
    });
    navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    });
});

const body = document.querySelector("body");
const popup1 = document.getElementById("popup-1");
const popup2 = document.getElementById("popup-2");

function togglePopup1(){
    popup1.classList.toggle("active");
    if(popup1.classList.contains("active")){
        body.style.overflow = "hidden";
    }
    else{
        body.style.overflow = "auto";
    }
}

function togglePopup2(){
    popup2.classList.toggle("active");
    if(popup2.classList.contains("active")){
        body.style.overflow = "hidden";
    }
    else{
        body.style.overflow = "auto";
    }
}