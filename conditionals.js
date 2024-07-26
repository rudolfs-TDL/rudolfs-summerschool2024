function testNumbers(numbers) {
  let result;
  if (numbers < 0) {
    result = "number is positive";
  } else {
    result = "number is negative";
  }
  return result;
}

let numbers = 0;
const RESULT = numbers < 0 ? "numbers is positive" : "number is negative";

console.log(testNumbers(0));
console.log(RESULT);
