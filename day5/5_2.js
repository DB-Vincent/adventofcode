const fs = require("fs");
const input = fs.readFileSync("5.txt", "utf-8")





let createStack = () => {
  let stacks = []
  let counter = 0
  let tempCounter = 1;
  // Seed
  let amountOfCols = (input.split(/\r?\n/)[0].length + 1)/4
  for (let i = 0; i < amountOfCols; i++)
    stacks.push([])

  // Parsing
  input.split(/\r?\n/).forEach(line => {
    counter = 0
    if (!line.startsWith("m")) { // Ignores the moves
      for (let col = 0; col < line.length; col += 4) { // Each column is 4 chars wide
        if (line[col + 1] != " " && isNaN(Number(line[col + 1]))) { // If the col is not empty
          stacks[counter].push(line[col + 1])
        }

        counter++
      }
    }
  })

  stacks.forEach(stack => stack.reverse())

  return stacks
}

let stacks = createStack()
input.split(/\r?\n/).forEach(line => {
  if (line.startsWith("m")) {
    let lineDetailed = line.split(" ")

    let count = lineDetailed[1]
    let from = lineDetailed[3]
    let to = lineDetailed[5]

    if (count > 1) {
      let itemsToBeMoved = []
      for (let i = count; i > 0; i--) {
        let removedItem = stacks[from - 1][stacks[from - 1].length - i]
        itemsToBeMoved.push(removedItem)
      }

      itemsToBeMoved.forEach(item => stacks[to - 1].push(item))
      stacks[from - 1].splice(stacks[from - 1].length - count, count);
    } else {
      let itemToBeMoved = stacks[from - 1].pop()
      stacks[to - 1].push(itemToBeMoved)
    }
  }
})

console.log(stacks)
let answer = ""

stacks.forEach(stack => {
  answer += stack[stack.length-1]
})
console.log(answer)