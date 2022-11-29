const icono = document.querySelector(".cont-icono");
const app = document.querySelector(".icono");
const modal = document.querySelector(".modal-chat");
const radio = document.querySelectorAll(".rdbOpcion");
const chat = document.querySelector(".cuerpo-chat");

icono.addEventListener("click", () => {
    /* alert("Click en icono"); */
    if (app.classList.contains("bxl-whatsapp")) {
        app.classList.replace("bxl-whatsapp", "bx-x");
        modal.style.opacity = 1;
    } else {
        app.classList.replace("bx-x", "bxl-whatsapp");
        modal.style.opacity = 0;
    }
})

for (let i = 0; i < radio.length; i++) {
    /* alert("Hizo click en aumentar"); */
    radio[i].addEventListener('change', (e) => {

        if (e.target.id == "opcion1") {
            /* console.log("Apretó la opción 1"); */
            const div = document.createElement('div');
            div.classList.add('respuesta');
            div.innerHTML = `
                <div class="tri-der"></div>
                <div class="texto-resp">
                    <p>Elijo la opción 1</p>
                </div>
            `;
            chat.appendChild(div);

            const divBot = document.createElement('div');
            divBot.classList.add('mensaje-bot');
            divBot.innerHTML = `
                <div class="tri-izq"></div>
                <div class="texto">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et cumque illo?</p>
                </div>
            `;
            chat.appendChild(divBot);
        }
        else if (e.target.id == "opcion2") {
            /* console.log("Apretó la opción 2"); */
            const div = document.createElement('div');
            div.classList.add('respuesta');
            div.innerHTML = `
                <div class="tri-der"></div>
                <div class="texto-resp">
                    <p>Elijo la opción 2</p>
                </div>
            `;
            chat.appendChild(div);
        }
        else if (e.target.id == "opcion3") {
            /* console.log("Apretó la opción 3"); */
            const div = document.createElement('div');
            div.classList.add('respuesta');
            div.innerHTML = `
                <div class="tri-der"></div>
                <div class="texto-resp">
                    <p>Elijo la opción 3</p>
                </div>
            `;
            chat.appendChild(div);
        }
        else if (e.target.id == "opcion4") {
            /* console.log("Apretó la opción 4"); */
            const div = document.createElement('div');
            div.classList.add('respuesta');
            div.innerHTML = `
                <div class="tri-der"></div>
                <div class="texto-resp">
                    <p>Elijo la opción 4</p>
                </div>
            `;
            chat.appendChild(div);
        }
    })
}
