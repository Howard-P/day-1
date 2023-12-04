const files = require("node:fs");

files.readFile("input.txt", "utf8", (err, data) => {
  const input = data.split("\r\n");
  let totalNumber = 0;

  for (let i = 0; i < input.length; i++) {
    totalNumber += getNumbers(input[i]);
  }

  console.log(totalNumber);
});
/**
 * @param input {String}
 */
function getNumbers(input) {
  let FirstNumber = "";
  let LastNumber = "";

  for (let i = 0; i < input.length; i++) {
    const charcter = input[i];
    const inputNumber = Number(charcter);
    const indextype = typeof inputNumber;

    if (indextype === "number" && !Number.isNaN(inputNumber)) {
      if (Boolean(FirstNumber)) {
        LastNumber = inputNumber;
      } else {
        FirstNumber = inputNumber;
        LastNumber = FirstNumber;
      }
    }
  }
  return Number(`${FirstNumber}${LastNumber}`);
}

// function sayHello(name) {
//   console.log(`say hello to + ${name}`);
// }
// sayHello("japan");
