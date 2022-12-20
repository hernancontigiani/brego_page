titulos = {
    "01-02": "No debería haber comido ese postre",
    "01-03": "¿Salimos a correr?",
    "01-15": "Slurp",
    "01-16": "¿Sale pile?",
    "05-02": "Época de poda, ¡a cuidar las plantitas!",
    "05-03": "Winter is coming",
    "06-21": "¡¡A hibernar!!",
    "07-15": "Trabajo muy duro, como un esclavo, denme croquetas",
    "12-01": "¿¡Cómo que ya llegó diciembre!?",
    "12-20": "¿¡Cómo que ya llegó diciembre!?",
    "12-24": "¡¡Feliz Nochebuena!! ¡Que me traigan muchos mimitos!",
    "12-25": "¡Feliz GuauNavidad!"
}

const date = `${new Date().getMonth() + 1}-${new Date().getDate()}`;

const titulo = titulos[date];
if(titulo) {
    document.getElementById("bregoImg").src = `static/images/${date}.jpg`;
    document.getElementById("titulo").innerHTML = titulo;
}