//* Colores del fondo
const colors = ["#f4f4f4", "#ba3c33", "#ccffcc", "#ccccff", "#a491ca", "#c9b88d"];
let colorIndex = 0;

//* Datos de los integrantes
const descAlumno1 = "Estudiante de 7mo semestre.";
const descAlumno2 = "Estudiante de noveno semestre.\nMe gustan los videojuegos, la música Rock/Metal y programar.";

const members = [
    { photo: "alumno1.jpg", nombre: "Emiliano Rebolledo", title: "Alumno 1", desc: descAlumno1 },
    { photo: "alumno2.jpg", nombre: "Gustavo Ramírez Mireles", title: "Alumno 2", desc: descAlumno2 }
];
let memberIndex = 0;

//* Evento para el cambio de color
document.getElementById("colorButton").addEventListener("click", () => {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
});

//* Evento para el cambio de integrante
document.getElementById("switchButton").addEventListener("click", () => {
    const memberPhoto = document.getElementById("member-photo");

    // Hacemos la imagen transparente para iniciar el efecto de "fade-out"
    memberPhoto.style.opacity = 0;

    // Usamos setTimeout para esperar a que termine la transición
    setTimeout(() => {
        // Actualizamos toda la información del integrante
        memberIndex = (memberIndex + 1) % members.length;
        memberPhoto.src = 'img/' + members[memberIndex].photo;
        document.getElementById("member-name").textContent = members[memberIndex].nombre;
        document.getElementById("member-desc").innerText = members[memberIndex].desc;

        // Hacemos la nueva imagen visible con un efecto "fade-in"
        memberPhoto.style.opacity = 1;

        // Actualizamos el texto del botón
        const nextMemberIndex = (memberIndex + 1) % members.length;
        const nextMemberName = members[nextMemberIndex].title;
        document.getElementById("switchButton").innerText = `Mostrar ${nextMemberName}`;
    }, 300); // El tiempo (400ms) debe coincidir con la transición del CSS
});

// Función para añadir un cero delante si el número es menor a 10
function formatTimeUnit(unit) {
    return unit < 10 ? '0' + unit : unit;
}

function updateDateTime() {
    // Arreglos para los nombres de días y meses
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Obtenemos la fecha y hora actual
    const now = new Date();

    // Obtenemos nombres y números
    const dayName = diasSemana[now.getDay()];
    const monthName = meses[now.getMonth()];
    const dayNumber = now.getDate();
    const year = now.getFullYear();

    // Formateamos la hora
    const hours = formatTimeUnit(now.getHours());
    const minutes = formatTimeUnit(now.getMinutes());
    const seconds = formatTimeUnit(now.getSeconds());

    // Creamos las cadenas de texto
    const dateString = `${dayName}, ${dayNumber} de ${monthName} de ${year}`;
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Mostramos la fecha y la hora en el HTML
    document.getElementById("date").textContent = dateString;
    document.getElementById("clock").textContent = timeString;
}

// Llamamos a la función para que se ejecute cada segundo (1000ms)
setInterval(updateDateTime, 1000);

// La llamamos una vez al inicio para que no haya retraso al cargar la página
updateDateTime();