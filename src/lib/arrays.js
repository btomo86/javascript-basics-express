const getNthElement = (index, array) => {
  const arrLength = array.length;
  let positionToLookFor;
  if (index + 1 > arrLength) {
    positionToLookFor = index - arrLength;
  } else {
    positionToLookFor = index;
  }
  return array[positionToLookFor];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
 array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(e => { 
    return e.toUpperCase();
});
}

const reverseWordsInArray = strings => {
  return strings.map(word => {
  return word.split("").reverse().join("");
  })
};

const onlyEven = numbers => {
return numbers.filter(number => (number % 2 === 0));
};

const removeNthElement2 = (index, array) => {
  return array.filter(e => (e !== array[index]));
};

const elementsStartingWithAVowel = strings => {
  return (strings.filter(e => /^[aeiou]/i.test(e)));
};

const removeSpaces = string => {
  return string.replace(/\s+/g, '');
};

const sumNumbers = numbers => {
let total = 0;    
for(let i=0; i < numbers.length; i++){
total = total + Number(numbers[i]);
      }
      return total;
    };

   
  


const sortByLastLetter = strings => {
  const reverseString = (item) => item.split('').reverse().join('');
  return strings.map(reverseString).sort().map(reverseString);
};
}

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
}