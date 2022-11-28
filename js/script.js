const icono = document.querySelector(".cont-icono");
const app = document.querySelector(".icono");
const modal = document.querySelector(".modal-chat");

icono.addEventListener("click", () => {
    /* alert("Click en icono"); */
    if (app.classList.contains("bxl-whatsapp")) {
        app.classList.replace("bxl-whatsapp", "bx-x");
        modal.style.opacity = 1;
    }else{
        app.classList.replace("bx-x", "bxl-whatsapp");
        modal.style.opacity = 0;
    }
})