

// make function that finds all .circle blocks and sets their height = width. notice th

function setCircleSize() {
    let circles = document.querySelectorAll('.circle'); 
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        let width = getComputedStyle(circle).width; 
        circle.style.height = width;
    }

    requestAnimationFrame(setCircleSize)
}
 
requestAnimationFrame(setCircleSize)

// modal

let isModalOpen = false;

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const circles = document.querySelectorAll('.circle');

const data = [
    {
        className: "circle__punkt",
        title: "пункт выдачи “аист”",
        src: "/images/tour/aist.png"
    },
    {
        className: "circle__skladPripasy",
        title: "склад с припасами",
        src: "/images/tour/skladPripasy.JPG"
    },
    {
        className: "circle__redOffice",
        title: "красный офис",
        src: "/images/tour/redOffice.PNG"
    },
    {
        className: "circle__pleteniOffice",
        title: "плетеный офис",
        src: "/images/tour/pleteniOffice.JPG"
    },
    {
        className: "circle__pechnik",
        title: "мастерская печника ",
        src: "/images/tour/pechnik.PNG"
    },
    {
        className: "circle__skladMaterials",
        title: "комната отдыха",
        src: "/images/tour/skladMaterials.JPG"
    },
    {
        className: "circle__tkach",
        title: "мастерская ткача",
        src: "/images/tour/tkach.jpg"
    },
    {
        className: "circle__itOffice",
        title: "IT офис",
        src: "/images/tour/itOffice.png"
    }
]

circles.forEach((circle) => {
    circle.addEventListener('click', () => {
        const el = data.find(el => circle.classList.contains(el.className));

        modal.querySelector('.modal__image').src = el.src;
        modal.querySelector('.modal__title').innerHTML = el.title;
        modal.classList.add('modal__open');
        isModalOpen = true;
    })
}) 

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal__open');
    isModalOpen = false;
})