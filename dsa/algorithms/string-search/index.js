const log = console.log;

const text = 'AABAACAADAABAAABAA';
const pattern = 'AABA';

search(pattern, text);

function search(pattern, text) {
  const textLength = text.length;
  const patternLength = pattern.length;

  for (let i = 0; i <= textLength - patternLength; i++) {
    let j = 0;

    for (j; j < patternLength; j++) {
      if (text[i + j] != pattern[j]) {
        break;
      }
    }

    if (j === patternLength) {
      log('Pattern found at index ' + i);
    }
  }
}