/*========= menu icon navbar ========= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*========= scroll sections active link ========= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => { 
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/*========= sticky navbar ========= */
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100)

/*========= remove menu icon navbar when click navbar link (scroll) ========= */
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========= sticky navbar ========= */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true, // دي هتخليك تتنقل بين 3 عناصر من غير ما تدوس على الاسهم بتعمل scroll
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/*========= Dark Light Mode ========= */
let darkModeIcon = document.querySelector ('#darkMode-icone');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

/*========= scroll reveal  من موقع scrollrevealjs.com ========= */
ScrollReveal({ 
    // reset: true,
    distance: '90px', // تبدا من عند كم بكسل
    duration: 2000, // سرعة الدخول 2 ثانية 
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // بتحط العناصر اللى عايز تعمل عليها scroll وتختار scroll
ScrollReveal().reveal('.home_img img, .services-container, .portfolio-box, .testimonial-wrapper .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about_img img ', {origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content ', {origin: 'right' });
ScrollReveal().reveal('.home-content h2', {origin: 'left' });

/*========= typing animation ========= */

var typed = new Typed(".front", {
    strings: ["","Front-end Developer", "Web Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})