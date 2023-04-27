AOS.init({
    duration: 1000,
    mirror: true,
    offset: 20,
});

function scopeHeader() {
    const header = document.querySelector(".header");

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

function faqEscopo() {
    const question = document.querySelectorAll(".question");

    question.forEach((item, index) => {
        const questionBtn = item.querySelector(".question-btn");
        questionBtn.addEventListener("click", () => {
            item.classList.toggle("activeQuestion");

            deactivateOtherQuestions(index);
        });
    });

    function deactivateOtherQuestions(selectedQuestionIndex) {
        question.forEach((item, index) => {
            if (selectedQuestionIndex != index) {
                item.classList.remove("activeQuestion");
            }
        });
    }
}
faqEscopo();