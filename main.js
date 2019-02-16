const cvs = document.getElementById('snake');
const ctx = cvs.getContext("2d");

const box = 32;

const ground = new Image();

ground.src = "img/Nothing.png";

const imgGround = new Image();

imgGround.src = "img/Nothing.png";



let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();


