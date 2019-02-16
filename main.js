const cvs = document.getElementById('polandBall');
const ctx = cvs.getContext("2d");

const box = 32;//sparsowac z  pliku config w przyszlosci

const imgGround = new Image();

imgGround.src = "img/Nothing.png";

const enemyImg = new Image();

enemyImg.src = "img/NaziBall.png";


const heartImg = new Image();

heartImg.src = "img/Heart.png";





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



let polandball = {
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


//zmienna przechowujaca numer klawisza, 
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
    // ctx.drawImage(imgGround, 0, 0);


    ctx.fillStyle = "red";
    ctx.fillRect(polandball.x, polandball.y, box, box);
    ctx.strokeStyle = "red";
    ctx.strokeRect(polandball.x, polandball.y);
}
ctx.drawImage(enemyImg, enemy.x, enemy.y);


//Olde head osition

let polanballX = polanball.x;

let polanballY = polanball.x;

// which direction

if (d == "LEFT") polanballX -= box;
if (d == "UP") polanballY -= box;
if (d == "RIGHT") polanballX += box;
if (d == "DOWN") polanballY += box;




// checkCollision
function collision(polandball, enemy) {
    if (polandball.x == enemy.x && polandball.y == enemy.y) {
        return true;
    }
    return false;
}

// call draw function every 100 ms - funkcja odświeżająca co 100ms

let game = setInterval(draw, 100);


