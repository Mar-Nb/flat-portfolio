// scroll to top functionality
const scrollUp = document.querySelector("#vers-le-haut");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})