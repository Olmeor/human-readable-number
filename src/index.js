module.exports = function toReadable (number) {
  const arrTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',];
  const arrHundred = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred',]
  let year = ' ' + String(number);
  
  if (number < 20) {
    return arrTwenty[number];

  } else if (number < 100) {
    if (+year[2] === 0) {
      return arrHundred[+year[1]];
    } else {
      return arrHundred[+year[1]] +' ' + arrTwenty[+year[2]]
    }

  } else if (number < 1000) {
    if (+year[2] === 0 && +year[3] === 0) {
      return arrTwenty[+year[1]] + ' ' + 'hundred';
    } else if (+year[2] === 0 && +year[3] !== 0) {
      return arrTwenty[+year[1]] + ' ' + 'hundred' + ' ' + arrTwenty[+year[3]];
    } else if (+year[2] !== 0 && +year[3] === 0) {
      return arrTwenty[+year[1]] + ' ' + 'hundred' + ' ' + arrHundred[+year[2]];
    } else if (+year[2] === 1) {
      return arrTwenty[+year[1]] + ' ' + 'hundred' + ' ' + arrTwenty[+(year[2] + year[3])];
    } else {
      return arrTwenty[+year[1]] + ' ' + 'hundred' + ' ' + arrHundred[+year[2]] + ' ' + arrTwenty[+year[3]];
    }
  }
}
