const numbers = [64, 34, 25, 90, 12, 22, 11];
sort(numbers);
console.log(numbers);

function sort(arr) {
  let isSwapped,
      length = arr.length;

  for (let i = 0; i < length; i++) {
    isSwapped = false;

    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }

    if (isSwapped === false) {
      break;
    }
  }
}