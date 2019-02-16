const cvs = document.getElementById('snake');
const ctx = cvs.getContext("2d");

const box = 32;//sparsowac z  pliku config w przyszlosci

const imgGround = new Image();

imgGround.src = "img/Nothing.png";

const enemyImg = new Image();

enemyImg.src = "img/NaziBall.png";





let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();


dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";


//create a polanball

let polandball = [];


polandball = {
    x: 10 * box, //position x 
    y: 10 * box, //position y
};

//create the heart 

let heart = {
    x: Math.floor(Math.random() * 18 + 1) * box, //position x 
    y: Math.floor(Math.random() * 18 + 1) * box  //position y 
}

//create enemy

let enemy = {
    x: Math.floor(Math.random() * 18 + 1) * box, //position x 
    y: Math.floor(Math.random() * 18 + 1) * box  //position y 
}


//create the score var

let score = 0


//zmienna przechowujaca numer klawisza

let d = 0;
//

// hmm , keydown to chodzi o  naciśnienie klawisza, keyup to wydarzenie zwolnienia klawisza
//
document.addEventListener("keydown", direction);

function direction(event) {
    let key = event.keyCode;
    if (key == 37 && d != "RIGHT") {
        d = "LEFT";
        left.play(); //odpala muzyke
    } else if (key == 38 && d != "DOWN") {
        d = "UP";
        up.play(); //odpala muzyke
    } else if (key == 39 && d != "LEFT") {
        d = "RIGHT";
        right.play(); //odpala muzyke
    } else if (key == 40 && d != "UP") {
        d = "DOWN";
        down.play();  //odpala muzyke
    }
}

function draw() {
    ctx.drawImage(imgGround, 0, 0);

    for (let i = 0; polandball.length; i++) {
        ctx.fillStyle = "red"(i == 0) ? "green" : "white";
        ctx.fillRect(polandball[i].x, polandball[i].y, box, box);
        ctx.strokeStyle = "red";
        ctx.strokeRect(polandball[i].x, polandball[i].y);
    }
}
ctx.drawImage(enemyImg, enemy.x, enemy.y);





