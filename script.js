//* Colores del fondo
const colors = ["#f4f4f4", "#ba3c33", "#ccffcc", "#ccccff", "#a491ca", "#c9b88d"];
let colorIndex = 0;

//* Datos de los integrantes
const members = [
    { photo: "alumno1.jpg", desc: "Alumno 1: Emiliano Rebolledo, estudiante de 7mo." },
    { photo: "alumno2.jpg", desc: "Alumno 2: Gustavo Ramírez, estudiante de 9no." }
];
let memberIndex = 0;

//* Evento para el cambio de color
document.getElementById("colorButton").addEventListener("click", () => {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
});

//* Evento para el cambio de integrante
document.getElementById("switchButton").addEventListener("click", () => {
    memberIndex = (memberIndex + 1) % members.length;
    document.getElementById("member-photo").src = 'img/' + members[memberIndex].photo;
    document.getElementById("member-desc").innerText = members[memberIndex].desc;
});