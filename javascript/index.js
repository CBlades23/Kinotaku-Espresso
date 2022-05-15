const navegacionToggle = document.querySelector(".navegacion__toggle")
const navegacion = document.querySelector(".navegacion")

navegacionToggle.addEventListener("click", () => {
    navegacion.classList.toggle("navegacion-menu-visible")
})