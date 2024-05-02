const log = console.log;

// Array Linear Search

const arrayOfNumbers = [1, 2, 3];
const valueToBeSearched = 2;

// const linearSearchResult = linearSearch(arrayOfNumbers, valueToBeSearched);
// printSearchResult(linearSearchResult);

function linearSearch(arrayOfNumbers, valueToBeSearched) {
  const arrayLength = arrayOfNumbers.length;

  for (let i = 0; i < arrayLength; i++) {
    if (arrayOfNumbers[i] == valueToBeSearched) {
      return i;
    }
  }

  return -1;
}

// Array Binary Search

const arrayOfSortedNumbers = [1, 2, 3, 4, 5];
const elementToBeSearched = 4;

// const binarySearchResult = binarySearch(arrayOfSortedNumbers, elementToBeSearched);
// printSearchResult(binarySearchResult);


function binarySearch(arrayOfSortedNumbers, elementToBeSearched) {
  let leftSide = 0,
      middleSide = 0,
      rightSide = arrayOfSortedNumbers.length - 1;

  while (rightSide >= leftSide) {
    middleSide = leftSide + Math.floor((rightSide - leftSide) / 2);

    if (arrayOfSortedNumbers[middleSide] == elementToBeSearched) {
      return middleSide;
    }

    if (arrayOfSortedNumbers[middleSide] > elementToBeSearched) {
      rightSide = middleSide - 1; 
    } else {
      leftSide = middleSide + 1;
    }
  }

  return -1;
}

function printSearchResult(result) {
  (result == -1) ?
  log('Element not found.') :
  log(`Element found at index : ${result}`);
}

// Array recursively binary search

const arrayOfSortedNumbersLength = arrayOfSortedNumbers.length;
// const recursivelyBinarySearchResult = recursivelyBinarySearch(arrayOfSortedNumbers, elementToBeSearched, 0, arrayOfSortedNumbersLength - 1);
// printSearchResult(recursivelyBinarySearchResult);

function recursivelyBinarySearch(arrayOfSortedNumbers, elementToBeSearched, leftSide, rightSide) {
  while (rightSide >= leftSide) {
    middleSide = leftSide + Math.floor((rightSide - leftSide) / 2);

    if (arrayOfSortedNumbers[middleSide] == elementToBeSearched) {
      return middleSide;
    }

    if (arrayOfSortedNumbers[middleSide] > elementToBeSearched) {
      return recursivelyBinarySearch(arrayOfSortedNumbers, elementToBeSearched, leftSide, middleSide - 1);
    } else {
      return recursivelyBinarySearch(arrayOfSortedNumbers, elementToBeSearched, middleSide + 1, rightSide);
    }
  }

  return -1;
}

// Reverse array in iterative way

function reverseArray(arrayOfSortedNumbers, end) {
  let start = 0;

  while (start < end) {
    [arrayOfSortedNumbers[start], arrayOfSortedNumbers[end]] =
    [arrayOfSortedNumbers[end], arrayOfSortedNumbers[start]];

    start++;
    end--;
  }
}

// const reverseArrayResult = reverseArray(arrayOfSortedNumbers, arrayOfSortedNumbersLength - 1);

// Array left rotate

function leftRotateArray(arrayOfSortedNumbers, iterationCount) {
  for (let i = 0; i < iterationCount; i++) {
    const first = arrayOfSortedNumbers.shift();
    arrayOfSortedNumbers.push(first);
  }
}

let rotateIterationCount = 2;

// leftRotateArray(arrayOfSortedNumbers, rotateIterationCount);
// log(arrayOfSortedNumbers);

// Rotate an array using juggling algorithm

const arrayOfNumbersToBeRotated = [1, 2, 3, 4, 5, 6];
// jugglingLeftRotateArray(arrayOfNumbersToBeRotated, rotateIterationCount);
// log(arrayOfNumbersToBeRotated);

function jugglingLeftRotateArray(arrayOfNumbersToBeRotated, iterationCount) {
  const arrayLength = arrayOfNumbersToBeRotated.length;
  iterationCount %= arrayLength;

  const greatCommonDivisor = greatCommonDivisorGenerator(iterationCount, arrayLength);

  for (let i = 0; i < greatCommonDivisor; i++) {
    const temp = arrayOfNumbersToBeRotated[i];
    log(`Temp : ${temp}`); 
    // return;
    let j = i;

    while (1) {
      let k = j + iterationCount;

      log(`j : ${j}`); 
      log(`iterationCount : ${iterationCount}`); 
      log(`k : ${k}`); 
      log(`arrayLength : ${arrayLength}`); 

      if (k >= arrayLength) {
        k -= arrayLength;
      }

      log(`i : ${i}`); 

      if (k == i) {
        break;
      }

      log(`arrayOfNumbersToBeRotated[j] : ${arrayOfNumbersToBeRotated[j]}`); 
      log(`arrayOfNumbersToBeRotated[k] : ${arrayOfNumbersToBeRotated[k]}`); 

      arrayOfNumbersToBeRotated[j] = arrayOfNumbersToBeRotated[k];
      j = k;
    }

    log(`arrayOfNumbersToBeRotated[k] : ${arrayOfNumbersToBeRotated[j]}`); 

    arrayOfNumbersToBeRotated[j] = temp;

    log(`temp : ${temp}`); 
  }
}

function greatCommonDivisorGenerator(iterationCount, arrayLength) { // Great Common Divisor known as GCD
  log(`Iteration Count : ${iterationCount}. Array Length : ${arrayLength}`)
  if (arrayLength == 0) {
    return iterationCount;
  } else {
    return greatCommonDivisorGenerator(arrayLength, iterationCount % arrayLength);
  }
}

// log(arrayOfNumbers);

// Insert an element to an unsorted array

const elementToBeInserted = 14;
// const insertInUnsortedArrayResult = insertInUnsortedArray(arrayOfNumbers, elementToBeInserted);

// log(arrayOfNumbers);

function insertInUnsortedArray(arrayOfNumbersToBeInserted, elementToBeInserted) {
  const length = arrayOfNumbersToBeInserted.length;

  arrayOfNumbersToBeInserted[length] = elementToBeInserted;
}

// log(arrayOfNumbers);

// Insert element to an array in a specific position

const positionTarget = 1;
// const insertAtSpecificPositionToAnArrayResult = insertAtSpecificPositionToAnArray(arrayOfNumbers, elementToBeInserted, positionTarget); 

// log(arrayOfNumbers);

function insertAtSpecificPositionToAnArray(arrayOfNumbers, elemenToBeInserted, positionTarget) {
  const arrayLength = arrayOfNumbers.lenght;
  
  let i = arrayLength - 1;

  for (; i >= arrayLength; i--) {
    arrayOfNumbers[i + 1] = arrayOfNumbers[i];
  }

  arrayOfNumbers[positionTarget] = elementToBeInserted;
}

// log(arrayOfNumbers);

// Delete in unsorted array

// const elementToBeDeleted = 14;
// deleteInUnsortedArray(arrayOfNumbers, elementToBeDeleted);

// log(arrayOfNumbers);

function deleteInUnsortedArray(arrayOfNumbers, elementToBeDeleted) {
  const targetPosition = findElementInAnArray(arrayOfNumbers, elementToBeDeleted);
  const arrayLength = arrayOfNumbers.length;
  let i = targetPosition;

  log(arrayOfNumbers);
  for (; i < arrayLength - 1; i++) {
    arrayOfNumbers[i] = arrayOfNumbers[i + 1];
    log(arrayOfNumbers);
  }
}

function findElementInAnArray(arrayOfNumbers, elementToBeSearched) {
  const arrayLength = arrayOfNumbers.length;
  
  let i = 0;

  for (; i < arrayLength; i++) {
    if (arrayOfNumbers[i] == elementToBeSearched) {
      return i;
    }
  }

  return -1;
}

// Search in sorted array

const elementToSearch = 3;
const leftSide = 0;
const rightSide = arrayOfNumbers.length - 1;

// const searchInSortedArrayResult = searchInSortedArray(arrayOfNumbers, leftSide, rightSide, elementToSearch); 

// (searchInSortedArrayResult !== -1) ?
//   log(`Element ${elementToSearch} found at index : ${searchInSortedArrayResult}`) :
//   log(`Element ${elementToSearch} not found.`);

function searchInSortedArray(arrayOfNumbers, leftSide, rightSide, elementToSearch) {
  if (rightSide < leftSide) {
    return -1;
  }

  const middleSide = leftSide + Math.floor((rightSide - leftSide) / 2);

  // log(arrayOfNumbers[middleSide]);

  if (arrayOfNumbers[middleSide] == elementToSearch) {
    return middleSide;
  }

  if (arrayOfNumbers[middleSide] > elementToSearch) {
    return searchInSortedArray(arrayOfNumbers, leftSide, middleSide - 1, elementToSearch);
  }
  
  return searchInSortedArray(arrayOfNumbers, middleSide + 1, rightSide, elementToSearch);
}

// Insert an element to a sorted array

// log(arrayOfSortedNumbers);
// insertInSortedArray(arrayOfSortedNumbers, 7);
// insertInSortedArray(arrayOfSortedNumbers, 6);
// log(arrayOfSortedNumbers);

function insertInSortedArray(arrayOfSortedNumbers, elementToBeInserted) {
  const arrayLength = arrayOfSortedNumbers.length;
  let i = arrayLength - 1;

  for (; (i >= 0 && arrayOfSortedNumbers[i] > elementToBeInserted); i--) {
    arrayOfSortedNumbers[i + 1] = arrayOfSortedNumbers[i];
  }

  arrayOfSortedNumbers[i + 1] = elementToBeInserted;
}

// Check if an array is sorted or not in non-decreasing orded using recursive approach

// const arrayOfNumbersToBeChecked = [1, 2, 3, 4, 5];
const arrayOfNumbersToBeChecked = [1, 3, 4, 2];
// const isArraySortedWithRecursiveResult = isArraySortedWithRecursive(arrayOfNumbersToBeChecked, arrayOfNumbersToBeChecked.length);
// log(isArraySortedWithRecursiveResult);

function isArraySortedWithRecursive(arrayOfNumbersToBeChecked, arrayLength) {
  if (arrayLength == 1 || arrayLength == 0) {
    return true; // The array was sorted
  }

  if (arrayOfNumbersToBeChecked[arrayLength - 1] < arrayOfNumbersToBeChecked[arrayLength - 2]) {
    return false; // The array is not yet sorted
  }

  return isArraySortedWithRecursive(arrayOfNumbersToBeChecked, arrayLength - 1);
}

// Check if an array is sorted or not in non-decreasing orded using iterative approach

// const isArraySortedWithIterativeResult = isArraySortedWithIterative(arrayOfNumbersToBeChecked, arrayOfNumbersToBeChecked.length);
// log(isArraySortedWithIterativeResult);

function isArraySortedWithIterative(arrayOfNumbersToBeChecked, arrayLength) {
  if (arrayLength == 1 || arrayLength == 0) {
    return true;
  }
  
  for (let i = 0; i < arrayLength; i++) {
    if (arrayOfNumbersToBeChecked[i] > arrayOfNumbersToBeChecked[i + 1]) {
      return false;
    }
  }

  return true;
}

// Generate sub array

const subArrayResult = subArray(arrayOfNumbers);
log(subArrayResult);

function subArray(arrayOfNumbers) {
  const mainArray = [];
  const arrayLength = arrayOfNumbers.length;

  for (let i = 0; i < arrayLength; i++) {
    const helperArray = [];

    for (let j = i; j < arrayLength; j++) {
      helperArray.push(arrayOfNumbers.slice(i, j + 1));
    }

    for (const el of helperArray) {
      mainArray.push(el);
    }

    // mainArray.push(helperArray);
  }

  return mainArray;
}