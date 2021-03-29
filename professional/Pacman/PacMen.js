var pos = 0;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
var direction = 0;
const pacMen = []; // This array holds all the pacmen




function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}
var focus = 0;
var direction = 0;
// Factory to make a PacMan at a random position with random velocity
function makePac() {
    // returns an object with random values scaled {x: 33, y: 21}
    let velocity = setToRandom(10); // {x:?, y:?}
    let position = setToRandom(200);
    // Add image to div id = game
    let game = document.getElementById('game');
    let newimg = document.createElement('img'); //experiment
    newimg.style.position = 'absolute';
    newimg.src = 'PacMan1.png'; //experiment
    newimg.width = 100;
    //experiment
    focus = (focus + 1) % 2;
    /*if (direction === 1) {
        pos -= 20;
        newimg.style.left = pos + "px";
    } else {
        pos += 20;
        newimg.style.left = pos + 'px';
    }*/
    //newimg.style.position = 'absulute';//
    //newimg.src = 'PacMan1.png';// set position here 
    //newimg.width = 100;//
    newimg.style.left = position.x;
    newimg.style.top = position.y;
    // add new Child image to game
    game.appendChild(newimg);
    // return details in an object
    return {
        position,
        velocity,
        newimg
    }
}


function update() {

    //loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;
        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y + 65;
        focus = (focus + 1) % 2;
        newimg.src = pacArray[direction][focus];
    })
    setTimeout(update, 20);
}
//document.getElementById("update").onclick = update;
document.getElementById("update").onclick = update;
//moveMen.addEventListener("click", update());

function checkCollisions(item) {
    if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||//
        item.position.x + item.velocity.x < 0) {item.velocity.x = -item.velocity.x; direction = 0}// detect collision with all walls and make pacman bounce
    if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
        item.position.y + item.velocity.y <= 65) {item.velocity.y = -item.velocity.y; item.position.y += 1; direction = 1}//
}

focus = (focus + 1) % 2;
  let newimg = document.createElement('img');
function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
}


document.getElementById("makeOne").onclick = makeOne;