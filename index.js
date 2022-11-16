const d = document;
const $cardNotificacion = d.querySelectorAll(".notificacion");
const $cantidadNotificaciones = d.getElementById("contador-notificaciones");

const identificarNotificacion = () => {
    const arr = Array.from($cardNotificacion);
    let id = 0;
    for (const notificacion of arr) {
        if (!notificacion.classList.contains("notificacion-isActive")) {
            id++;
            notificacion.dataset.id = id;
        }
    }
}
const validarNotificaciones = () => {
    let cunetaNotificacionNoLeidas = 0;
    const arr = Array.from($cardNotificacion);
    for (const notificacion of arr) {
        (!notificacion.classList.contains("notificacion-isActive")) ? cunetaNotificacionNoLeidas++ : cunetaNotificacionNoLeidas - 1;
    }
    $cantidadNotificaciones.textContent = cunetaNotificacionNoLeidas;
}
const leidos = (id) => {
    const arr = Array.from($cardNotificacion);
    for (const notificacion of arr) {
        if (notificacion.dataset.id === id) {
            notificacion.querySelector(".info").classList.remove("notificacion-pendiente");
            notificacion.classList.add("notificacion-isActive");
        }
    }
}
const leidosTodos = ()=>{
    $cardNotificacion.forEach((notificacion)=>{
        notificacion.querySelector(".info").classList.remove("notificacion-pendiente");
        notificacion.classList.add("notificacion-isActive");
    })
    $cantidadNotificaciones.textContent = 0;
}

d.addEventListener("click", e => {
    if (e.target.matches("#mark")) {
        leidosTodos();
    }

    if (e.target.matches(".notificacion")) {
        leidos(e.target.dataset.id);
        validarNotificaciones();
    }
})
d.addEventListener("DOMContentLoaded", e => {
    identificarNotificacion();
    validarNotificaciones();
})