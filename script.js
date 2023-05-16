var target = document.getElementById('img')
var rand = Math.floor(Math.random()*6)
console.log(rand);
var imagesOfDice = ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/557px-Dice-1.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1200px-Dice-2-b.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/2048px-Dice-3-b.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/557px-Dice-4-b.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/557px-Dice-5.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/768px-Dice-6-b.svg.png"];
target.src = imagesOfDice[rand]
document.getElementById('numberr').innerHTML = rand+1