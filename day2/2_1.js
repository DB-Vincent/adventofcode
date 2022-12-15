const fs = require("fs")
const input = fs.readFileSync("2.txt", "utf-8")

const rps = {
  rock: 1,
  paper: 2,
  scissors: 3
}

const inputMap = {
  A: rps.rock,
  B: rps.paper,
  C: rps.scissors,
  X: rps.rock,
  Y: rps.paper,
  Z: rps.scissors
}

let totalScore = 0

input.split(/\r?\n/).forEach(line => {
  const yourMove = inputMap[line[2]]
  const opponentMove = inputMap[line[0]]
  let currentScore = 0

  // Rock wins against scissors
  // Paper wins against rock
  // Scissors wins against paper

  // You win
  if (yourMove === rps.rock && opponentMove === rps.scissors || yourMove === rps.paper && opponentMove === rps.rock || yourMove === rps.scissors && opponentMove === rps.paper) {
    currentScore = yourMove + 6
  } else if (yourMove === opponentMove) {
    currentScore = yourMove + 3
  } else {
    currentScore = yourMove
  }

  totalScore += currentScore
})

console.log(`Total: ${totalScore}`)