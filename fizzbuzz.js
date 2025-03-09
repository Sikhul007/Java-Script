let output = [];
var count = 1;

function fizzbuzz() {
  output.push(count);
  if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  }
  count++;
  console.log(output);
}
for (var i = 0; i < 20; i++) {
  fizzbuzz();
}
