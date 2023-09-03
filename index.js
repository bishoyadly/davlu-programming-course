let number1 = prompt("Enter First Number: ");

number1 = parseFloat(number1);

let number2 = prompt("Enter Second Number: ");

number2 = parseFloat(number2);

let operation = prompt("Enter operation: ");

let result;

if (operation == '+') {
    result = number1 + number2;
}

if (operation == '-') {
    result = number1 - number2;
}

if (operation == '*') {
    result = number1 * number2;
}

if (operation == '/') {
    result = number1 / number2;
}

alert("The result equals "+ result);