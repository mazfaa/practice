const numbers = [64, 25, 12, 22, 11];
sort(numbers);
console.log(numbers);

function sort(numbers) {
  let indexOfMinElement = 0;
  const numbersLength = numbers.length;

  for (let i = 0; i < numbersLength - 1; i++) {
    indexOfMinElement = i;

    for (let j = i + 1; j < numbersLength; j++) {
      if (numbers[j] < numbers[indexOfMinElement]) {
        indexOfMinElement = j;
      }
    }

    swap(numbers, indexOfMinElement, i);
  }
}

function swap(numbers, indexOfMinElement, indexOfMaxElement) {
  [numbers[indexOfMaxElement], numbers[indexOfMinElement]] = 
  [numbers[indexOfMinElement], numbers[indexOfMaxElement]];
}