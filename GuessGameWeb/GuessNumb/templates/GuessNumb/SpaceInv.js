var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var InitialX = 850, InitialY = 850, ShipX, Row, xu = 45, yu = 45, collumn;
var IEnemyX = 50, IEnemyY = 50, EnemyX, EnemyY;
var Interval = 100, MoveForwardID = null, MoveBackEnemyID = null, IntervalSpawn = 1000;
var EnemyList = [], EnemyNumber = 0, NumberOfEnemies = 0;

ctx.fillStyle = "#0000ff";
ctx.beginPath();
ctx.arc(InitialX, InitialY, 30, 0, 2 * Math.PI);
ctx.fill();


function MoveShip(x, key) {
    ShipX = x
    if (key === 68) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(ShipX - 10, InitialY, 31, 0, 2 * Math.PI);
        ctx.fill();
    }
    if (key === 65) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(ShipX + 10, InitialY, 31, 0, 2 * Math.PI);   
        ctx.fill();
    }
    ctx.fillStyle = "#0000ff";
    ctx.beginPath();
    ctx.arc(ShipX, InitialY, 30, 0, 2 * Math.PI);
    ctx.fill();
}

document.onkeydown = function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    //D
    if (key === 68) {
        InitialX += 10
        MoveShip(InitialX, key);
    }
    //A
    if (key === 65) {
        InitialX -= 10
        MoveShip(InitialX, key);
    }
    //Enter
    if (key === 13) {
        setInterval(CreateEnemy, IntervalSpawn);
        setInterval(MoveEnemy, Interval);
    }
    //W
    if (key === 87) {
    }
}

//Creates Enemy Class
class Enemy {
    constructor(EnemyX, EnemyY, Color, Forward) {
        this.EnemyX = EnemyX;
        this.EnemyY = EnemyY;
        this.Color = Color
        this.Forward = Forward
    }
}
//Makes a Random color for the enemy
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//Creates Enemy at start and adds to array

function CreateEnemyObj(EnemyNumber) {
    EnemyList[EnemyNumber] = new Enemy(IEnemyX, IEnemyY, getRandomColor(), true)
}

function CreateEnemy() {
    CreateEnemyObj(EnemyNumber);

    ctx.fillStyle = EnemyList[EnemyNumber].Color;
    ctx.beginPath();
    ctx.arc(EnemyList[EnemyNumber].EnemyX, EnemyList[EnemyNumber].EnemyY, 20, 0, 2 * Math.PI);
    ctx.fill();
    EnemyNumber += 1;
}

function MoveEnemy() {
    SwapDirection();
    for (NumberOfEnemies = 0; NumberOfEnemies < EnemyList.length; NumberOfEnemies += 1) {
        if (EnemyList[NumberOfEnemies].Forward == true) {
            MoveForward(NumberOfEnemies);
        }
        else {
            MoveBackward(NumberOfEnemies);
        }
    }
}

function SwapDirection() {
    for (NumberOfEnemies = 0; NumberOfEnemies < EnemyList.length; NumberOfEnemies += 1) {
        if (EnemyList[NumberOfEnemies].EnemyX == 1800) {
            MoveDown(NumberOfEnemies);
            EnemyList[NumberOfEnemies].Forward = false;
        }
        if (EnemyList[NumberOfEnemies].EnemyX <= 49) {
            MoveDown(NumberOfEnemies);
            EnemyList[NumberOfEnemies].Forward = true;
        }

    }
}

function MoveDown(NumberOfEnemies) {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(EnemyList[NumberOfEnemies].EnemyX, EnemyList[NumberOfEnemies].EnemyY, 21, 0, 2 * Math.PI);
    ctx.fill();
    EnemyList[NumberOfEnemies].EnemyY += 50;
    ctx.fillStyle = EnemyList[NumberOfEnemies].Color;
    ctx.beginPath();
    ctx.arc(EnemyList[NumberOfEnemies].EnemyX, EnemyList[NumberOfEnemies].EnemyY, 20, 0, 2 * Math.PI);
    ctx.fill();
}

function MoveForward(EnemyNumber) {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(EnemyList[EnemyNumber].EnemyX, EnemyList[EnemyNumber].EnemyY, 21, 0, 2 * Math.PI);
    ctx.fill();

    EnemyList[EnemyNumber].EnemyX += 10;
    ctx.fillStyle = EnemyList[EnemyNumber].Color;
    ctx.beginPath();
    ctx.arc(EnemyList[EnemyNumber].EnemyX, EnemyList[EnemyNumber].EnemyY, 20, 0, 2 * Math.PI);
    ctx.fill();

    console.log(EnemyList[EnemyNumber].EnemyX);
}

function MoveBackward(EnemyNumber) {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(EnemyList[EnemyNumber].EnemyX, EnemyList[EnemyNumber].EnemyY, 21, 0, 2 * Math.PI);
    ctx.fill();

    EnemyList[EnemyNumber].EnemyX -= 10;
    ctx.fillStyle = EnemyList[EnemyNumber].Color;
    ctx.beginPath();
    ctx.arc(EnemyList[EnemyNumber].EnemyX, EnemyList[EnemyNumber].EnemyY, 20, 0, 2 * Math.PI);
    ctx.fill();
}

