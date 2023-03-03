function checkStringLength (string, length) {
  return string.length <= length;
}

function checkPalindrom (string) {
  return string.toLowerCase().replaceAll(' ', '') === string.toLowerCase().replaceAll(' ', '').split('').reverse().join('');
}

function getNumber (string) {
  let resultNumber = '';

  for (let i = 0; i < string.length; i++) {
    if (Number(string[i])) {
      resultNumber = resultNumber + string[i];
    }
  }

  return Number(resultNumber);
}

function addString(string, minLength, addSymbolString) {
  return string.padStart(minLength, addSymbolString);
}
