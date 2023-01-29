const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

let palabraAleatoria = randomWords(words);
let time = 10;
let score = 0;
let palabraIngresada = "";

function randomWords(){
    return words[Math.floor(Math.random()* words.length)]
}

function addToDOM(){
    document.querySelector("#randomWord").textContent = palabraAleatoria;
}

addToDOM()

document.querySelector("#text").addEventListener("input", function(e){
    palabraIngresada = text.value;
    if ( palabraIngresada == palabraAleatoria){
        time +=3;
        text.value = "";
        palabraIngresada = "";
        palabraAleatoria = randomWords(words);
        updateScore()
        addToDOM()
    }
})

let actualizarTiempo = function(){
    document.getElementById("timeSpan").innerHTML = time +"s";
    if(time === 0){
        clearInterval(timeInterval);
        gameOver()
    } else {
        time--;
        timeInterval;
    }
}

let timeInterval = setInterval(actualizarTiempo, 1000);

let updateScore = function(){
    score++
    document.getElementById("score").innerHTML = score;
}

let gameOver = function(){
    let contenedor = document.getElementById("end-game-container")
    let titulo = document.createElement("h1");
    titulo.innerHTML = "Te quedaste sin tiempo";
    contenedor.appendChild(titulo)
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Tu puntaje: " + score;
    contenedor.appendChild(parrafo);
    let boton = document.createElement("button");
    boton.innerHTML = "Volvé a empezar"
    boton.setAttribute("onclick","location.reload()")
    contenedor.appendChild(boton)
}
