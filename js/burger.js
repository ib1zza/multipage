
const burgerEl = document.querySelector(".header__burger");
const burgerBtn = document.querySelector(".burger__button");
const burgerOverlay = document.querySelector(".burger__content")
let isOpen = false;

if (burgerBtn) {
    function listener() {
        isOpen = !isOpen;
        burgerEl.classList.toggle("burger__opened", isOpen)
    }

    function close() {
        isOpen = false;
        burgerEl.classList.toggle("burger__opened", isOpen)
    }
    
    burgerOverlay.addEventListener("click", close);

    burgerBtn.addEventListener("click", listener)
}