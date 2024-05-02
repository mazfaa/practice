const numbers = [12, 11, 13, 5, 6];

sort(numbers);

console.log(numbers);

function sort(arr) {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      console.log(`j${j + 1}. ${arr}`);
      j--;
    }

    arr[j + 1] = temp;
    console.log(`i${i}. ${arr}`);
  }
}