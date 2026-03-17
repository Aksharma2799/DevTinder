/*

function createCounter(initialValue) {
  let count = initialValue;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    reset() {
      count = initialValue;
      return count;
    },
  };
}
const counter = createCounter(9);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());

*/

function findLargest(arr) {
  // your solution here
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let input = [10, 20, 40, 30];
result = findLargest(input);
console.log(result);
