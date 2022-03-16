// Bubble sort
// it compares one element to other one by one till end of array

let arr = [
  4, 6, 9, 2, 5, 6, 8, 23, 45, 2, 2, 32, 34, 23, 45, 54, 34, 54, 6, 56, 64,
];

function BubbleSort(arr) {
  // outer pass - for choosing the first element which is compared to other element by our algo
  for (let i = 0; arr.lenght; i++) {
    // inner pass- for choosing the second element
    // for(let ){}
  }
}

function bubbleSort(arr) {
  //Outer pass
  for (let i = 0; i < arr.length; i++) {
    //Inner pass
    for (let j = 0; j < arr.length - i - 1; j++) {
      //Value comparison using ascending order

      if (arr[j + 1] < arr[j]) {
        //Swapping
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
