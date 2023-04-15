function scopeHeader() {
    const header = document.querySelector(".main-header");

    function stickyNavbar() {
        if (window.scrollY === 0) {
            header.classList.add("navbarOnTop");
        } else {
            header.classList.remove("navbarOnTop");
        }
    }
    stickyNavbar();

    window.addEventListener("scroll", stickyNavbar);
}
scopeHeader();

const questionBtn = document.querySelectorAll(".question-btn");

questionBtn.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("activeQuestion");


    });
});