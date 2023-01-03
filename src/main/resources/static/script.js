const navBtn = document.querySelector('[data-nav-btn]');
const nav = document.querySelector('[data-nav]')


navBtn.addEventListener("click", () => {
    const vis = nav.getAttribute("data-visable");
    console.log('1');
    if (vis === "false") {
        nav.setAttribute("data-visable", true);
        navBtn.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visable", false);
        navBtn.setAttribute("aria-expanded", false);
    }
});