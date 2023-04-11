function scopeHeader() {
    const header = document.querySelector(".main-header");

    function stickyNavbar() {
        if (window.scrollY === 0) {
            header.classList.add("navbarOnTop");
        } else {
            header.classList.remove("navbarOnTop");
        }
    }

    window.addEventListener("scroll", stickyNavbar);
}
scopeHeader();