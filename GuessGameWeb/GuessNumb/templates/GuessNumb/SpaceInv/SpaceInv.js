var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var InitialX = 850, InitialY = 850, ShipX, Row, xu = 45, yu = 45, collumn;
var IEnemyX = 50, IEnemyY = 50, EnemyX, EnemyY;
var Laser = 

ctx.fillStyle = "#0000ff";
ctx.beginPath();
ctx.arc(InitialX, InitialY, 30, 0, 2 * Math.PI);
ctx.fill();

setInterval(MoveEnemy, 10);


/*function MoveAliens() {
    EnemyX = IEnemyX - 10;
    EnemyY = IEnemyY;
    for (row = 0; row < 3; row++) {
        EnemyY += yu;
        EnemyX = IEnemyX;
        for (collumn = 0; collumn < 11; collumn++) {
            EnemyX += xu
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(EnemyX - 10, EnemyY, 22, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    IEnemyX += 10
    EnemyX = IEnemyX;
    EnemyY = IEnemyY;
    for (row = 0; row < 3; row++) {
        EnemyY += yu;
        EnemyX = IEnemyX;
        for (collumn = 0; collumn < 11; collumn++) {
            EnemyX += xu
            ctx.fillStyle = "#008040";
            ctx.beginPath();
            ctx.arc(EnemyX, EnemyY, 20, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}*/


/*function CreateAliens() {
    EnemyX = IEnemyX;
    EnemyY = IEnemyY;
    for (row = 0; row < 3; row++) {
        EnemyY += yu;
        EnemyX = IEnemyX;
        for (collumn = 0; collumn < 11; collumn++) {
            EnemyX += xu
            ctx.fillStyle = "#008040";
            ctx.beginPath();
            ctx.arc(EnemyX, EnemyY, 20, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}*/
function MoveEnemy() {
    if (EnemyX < 1900) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(EnemyX, EnemyY, 21, 0, 2 * Math.PI);
        ctx.fill();
        EnemyX += 10;
        ctx.fillStyle = "#008040";
        ctx.beginPath();
        ctx.arc(EnemyX, EnemyY, 20, 0, 2 * Math.PI);
        ctx.fill();
    }
    else {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(EnemyX, EnemyY, 21, 0, 2 * Math.PI);
        ctx.fill();
        EnemyY += 30;
        ctx.beginPath();
        ctx.arc(EnemyX, EnemyY, 20, 0, 2 * Math.PI);
        ctx.fill();
        while (EnemyX > IEnemyX) {
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(EnemyX, EnemyY, 21, 0, 2 * Math.PI);
            ctx.fill();
            EnemyX -= 10;
            ctx.fillStyle = "#008040";
            ctx.beginPath();
            ctx.arc(EnemyX, EnemyY, 20, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

function CreateEnemy() {
    EnemyX = IEnemyX;
    EnemyY = IEnemyY;
    ctx.fillStyle = "#008040";
    ctx.beginPath();
    ctx.arc(EnemyX, EnemyY, 20, 0, 2 * Math.PI);
    ctx.fill();
}

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
    if (key === 68) {
        InitialX += 10
        MoveShip(InitialX, key);
    }
    if (key === 65) {
        InitialX -= 10
        MoveShip(InitialX, key);
    }
    if (key === 13) {
        CreateEnemy()
    }
}





