AOS.init({
    duration: 1000,
    mirror: true,
    offset: 20,
});

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

//est
const question = document.querySelectorAll(".question");

question.forEach((item, index) => {
    const questionBtn = item.querySelector(".question-btn");
    questionBtn.addEventListener("click", () => {
        item.classList.toggle("activeQuestion");

        removeOpen(index);
    });
});

function removeOpen(index1) {
    question.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove("activeQuestion");
        }
    });
}
