console.log('script.js codes');


function handleMenu() {
    const nav = document.getElementById("navbar");
    const menu = document.getElementById("mobile-menu");
    const main = document.getElementById("main");

    if (nav && menu && main) {
        nav.classList.toggle("hidden");
        menu.classList.toggle("hidden");
        main.classList.toggle("hidden");
    } else {
        console.warn("One or more elements not found for menu toggle.");
    }
}
function handleMenu2() {
    const first = document.getElementById("first_arrow");
    const arrow1=document.getElementById("arrow1")
    if (first) {
        first.classList.toggle("hidden");
        arrow1.classList.toggle('-rotate-180');
    }
    else {
        console.warn("One or more elements not found for menu toggle.");
    }
}
function handleMenu3() {
    const second = document.getElementById("second_arrow");
        const arrow2=document.getElementById("arrow2")
    if (second) {
        second.classList.toggle("hidden");
        arrow2.classList.toggle('-rotate-180');
    }
    else {
        console.warn("One or more elements not found for menu toggle.");
    }
}
function handleMenu4() {
    const third = document.getElementById("third_arrow");
    const arrow3 =document.getElementById("arrow3");
    if (third) {
        third.classList.toggle("hidden");
        arrow3.classList.toggle("-rotate-180");
    }
    else {
        console.warn("One or more elements not found for menu toggle.");
    }
}
function handleMenu5() {
    const fourth = document.getElementById("fourth_arrow");
    const arrow4=document.getElementById("arrow4");
    if (fourth) {
        fourth.classList.toggle("hidden");
        arrow4.classList.toggle("-rotate-180");
    }
    else {
        console.warn("One or more elements not found for menu toggle.");
    }
}
function handleMenu6() {
    const fifth = document.getElementById("fifth_arrow");
    const arrow5=document.getElementById("arrow5");
    if (fifth) {
        fifth.classList.toggle("hidden");
        arrow5.classList.toggle("-rotate-180");
    }
    else {
        console.warn("One or more elements not found for menu toggle.");
    }
}
function handleMenu7() {
    const sixth = document.getElementById("sixth_arrow");
    const arrow6=document.getElementById("arrow6");
    if (sixth) {
        sixth.classList.toggle("hidden");
         arrow6.classList.toggle("-rotate-180");
    }
    else {
        console.warn("One or more elements not found for menu toggle.");
    }
}
const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if (isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }

}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');


setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);

setupIntersectionObserver(line4, true, 0.8);

const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    })
})