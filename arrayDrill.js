'use strict';

function max(numbers){
  let i = 0;
  let start = numbers[0];

  while (i < numbers.length){
    if(numbers[i] > start) {
      start = numbers[i];
    }
    i++;
  }
  return start;
}



//console.log(max([2, 3, 90, 10]));



function min(numbers){
  let i = 0;
  let currentMin = numbers[0];
  while (i < numbers.length) {
    if (numbers[i] < currentMin) {
      currentMin = numbers[i];
    }
    i++;
  }
  return currentMin;
}

//console.log(min([2, 3, 90, 1, 10]));




function average(numbers){
  console.log(numbers);
  let start = 0;
  numbers.forEach(function(number) {
    console.log(number);
     start = start + number;

  });

  

  return start / numbers.length;
}

console.log(average([1, 2, 3, 4]));