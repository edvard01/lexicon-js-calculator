alert(
  "Welcome to the web-based calculator! Insert two numbers then chose what operation you want to make!"
);

let run = true;

while (run) {
  let number1 = parseInt(prompt("Please input first number"));
  let number2 = parseInt(prompt("Please input second number"));

  let operation = prompt(
    "Please input operation (only [+ | - | / | *] available)"
  );

  //If a non number gets parsed to an int, its value becomes NaN
  if (!isNaN(number1) && !isNaN(number2)) {
    if (operation === "+") {
      alert(`${number1} + ${number2} = ${number1 + number2}`);
    } else if (operation === "-") {
      alert(`${number1} - ${number2} = ${number1 - number2}`);
    } else if (operation === "*") {
      alert(`${number1} * ${number2} = ${number1 * number2}`);
    } else if (operation === "/") {
      alert(`${number1} / ${number2} = ${number1 / number2}`);
    } else {
      alert(
        "Make sure you input a valid operation (available operations are shown in the alert)."
      );
      continue;
    }
    run = false;
  } else {
    alert("Make sure you input two numbers!");
  }
}
