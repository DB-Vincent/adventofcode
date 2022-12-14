const fs = require("fs")
const input = fs.readFileSync("input", "utf-8")


let total = 0;
const priority = [undefined, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

input.split(/\r?\n/).forEach(line => {
  var middle = Math.floor(line.length / 2)

  var firstCompartment = line.substr(0, middle).split("")
  var secondCompartment = line.substr(middle, line.length).split("")

  for (let i = 0; i < firstCompartment.length; i++) {
    if (secondCompartment.includes(firstCompartment[i])) {
      total += priority.indexOf(firstCompartment[i])
      break
    }
  }
});

console.log(total)