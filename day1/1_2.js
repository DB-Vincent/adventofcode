const fs = require("fs")
const input = fs.readFileSync("1.txt", "utf-8")

const elves = input.replace(/\r/g, "").trim().split("\n\n"); // Create array of all the calories per elf
let calories = []

elves.forEach((elf) => {
  let totalCalories = 0
  let elfCalories = elf.split("\n");

  elfCalories.forEach((calory) => totalCalories += Number(calory))
  calories.push(totalCalories)
})

calories.sort((a, b) => { return a - b })

let topThreeCalories = 0;
for (let i = calories.length; i > calories.length - 3; i--) {
  topThreeCalories += calories[i - 1]
}
console.log(topThreeCalories)