
const icono = document.querySelector(".cont-icono");
const app = document.querySelector(".icono");
const modal = document.querySelector(".modal-chat");
const radio = document.querySelectorAll(".rdbOpcion");
const chat = document.querySelector(".cuerpo-chat");
const contOpciones = document.querySelector(".marcar");


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

        contOpciones.style.display = "none";

        if (e.target.id == "opcion1") {
            /* console.log("Apretó la opción 1"); */
            
            elegirOcion(1);

            const divBot = document.createElement('div');
            divBot.classList.add('mensaje-bot');
            divBot.innerHTML = `
                <div class="tri-izq"></div>
                <div class="texto">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div class="marcar2">
                        <label for="subopcion1">
                            <input type="radio" id="opcion1-1" name="subopcion1" class="subopcion1">
                            Opcion 1
                        </label>
                        <label for="subopcion1">
                            <input type="radio" id="opcion1-2" name="subopcion1" class="subopcion1">
                            Opcion 2
                        </label>
                    </div>
                </div>
            `;
            chat.appendChild(divBot);

            let subRadio1 = document.querySelectorAll(".subopcion1");

            for (let i = 0; i < subRadio1.length; i++) {
                subRadio1[i].addEventListener('change', (e) => {
                    /* console.log(e.target.id); */

                    let marcarOpciones = document.querySelector(".marcar2");
                    marcarOpciones.style.display = "none";

                    if (e.target.id == "opcion1-1") {
                        elegirOcion(1);

                        mensajeDetallar();
                    }
                    else if (e.target.id == "opcion1-2") {
                        elegirOcion(2);

                        mensajeDetallar();
                    }
                })
            }
        }
        else if (e.target.id == "opcion2") {
            /* console.log("Apretó la opción 2"); */
            
            elegirOcion(2);

            const divBot = document.createElement('div');
            divBot.classList.add('mensaje-bot');
            divBot.innerHTML = `
                <div class="tri-izq"></div>
                <div class="texto">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div class="marcar2">
                        <label for="subopcion2">
                            <input type="radio" id="opcion2-1" name="subopcion2" class="subopcion2">
                            Opcion 1
                        </label>
                        <label for="subopcion2">
                            <input type="radio" id="opcion2-2" name="subopcion2" class="subopcion2">
                            Opcion 2
                        </label>
                        <label for="subopcion2">
                            <input type="radio" id="opcion2-3" name="subopcion2" class="subopcion2">
                            Opcion 3
                        </label>
                    </div>
                </div>
            `;
            chat.appendChild(divBot);

            let subRadio2 = document.querySelectorAll(".subopcion2");

            for (let i = 0; i < subRadio2.length; i++) {
                subRadio2[i].addEventListener('change', (e) => {
                    /* console.log(e.target.id); */

                    let marcarOpciones = document.querySelector(".marcar2");
                    marcarOpciones.style.display = "none";

                    if (e.target.id == "opcion2-1") {
                        elegirOcion(1);

                        mensajeDetallar();
                    }
                    else if (e.target.id == "opcion2-2") {
                        elegirOcion(2);

                        mensajeDetallar();
                    }
                    else if (e.target.id == "opcion2-3"){
                        elegirOcion(3);

                        mensajeDetallar();
                    }
                })
            }
        }
        else if (e.target.id == "opcion3") {
            /* console.log("Apretó la opción 3"); */
            
            elegirOcion(3);

            mensajeDetallar();
        }
        else if (e.target.id == "opcion4") {
            /* console.log("Apretó la opción 4"); */
            
            elegirOcion(4);

            const divBot = document.createElement('div');
            divBot.classList.add('mensaje-bot');
            divBot.innerHTML = `
                <div class="tri-izq"></div>
                <div class="texto">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div class="marcar2">
                        <label for="subopcion4">
                            <input type="radio" id="opcion4-1" name="subopcion4" class="subopcion4">
                            Opcion 1
                        </label>
                        <label for="subopcion4">
                            <input type="radio" id="opcion4-2" name="subopcion4" class="subopcion4">
                            Opcion 2
                        </label>
                        <label for="subopcion4">
                            <input type="radio" id="opcion4-3" name="subopcion4" class="subopcion4">
                            Opcion 3
                        </label>
                        <label for="subopcion4">
                            <input type="radio" id="opcion4-4" name="subopcion4" class="subopcion4">
                            Opcion 4
                        </label>
                        <label for="subopcion4">
                            <input type="radio" id="opcion4-5" name="subopcion4" class="subopcion4">
                            Opcion 5
                        </label>
                    </div>
                </div>
            `;
            chat.appendChild(divBot);

            let subRadio4 = document.querySelectorAll(".subopcion4");

            for (let i = 0; i < subRadio4.length; i++) {
                subRadio4[i].addEventListener('change', (e) => {
                    /* console.log(e.target.id); */

                    let marcarOpciones = document.querySelector(".marcar2");
                    marcarOpciones.style.display = "none";

                    if (e.target.id == "opcion4-1") {
                        elegirOcion(1);

                        mensajeDetallar();
                    }
                    else if (e.target.id == "opcion4-2") {
                        elegirOcion(2);

                        mensajeDetallar();
                    }
                    else if (e.target.id == "opcion4-3"){
                        elegirOcion(3);

                        mensajeDetallar();
                    }
                    else if (e.target.id == "opcion4-4") {
                        elegirOcion(4);

                        mensajeDetallar();
                    }
                    else if (e.target.id == "opcion4-5"){
                        elegirOcion(5);

                        mensajeDetallar();
                    }
                })
            }
        }
    })
}

function elegirOcion(numero) {
    const div = document.createElement('div');
    div.classList.add('respuesta');
    div.innerHTML = `
        <div class="tri-der"></div>
        <div class="texto-resp">
            <p>Elijo la opción ${numero}</p>
        </div>
    `;
    chat.appendChild(div);
}

function mensajeDetallar() {
    const divBot = document.createElement('div');
    divBot.classList.add('mensaje-bot');
    divBot.innerHTML = `
        <div class="tri-izq"></div>
        <div class="texto">
            <p>De acuerdo, me podría detallar su problema para darle una correcta respuesta?</p>
        </div>
    `;
    chat.appendChild(divBot);
}