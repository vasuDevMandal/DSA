// Bubble sort
// https://www.youtube.com/watch?v=IAeLoGzU4RE&list=PLXzMwWvud3xSsw8TgFO2hjn5Yo-LSkyBx&index=31

let arr = [6, 8, 9, 7, 10, 3, 1, 2, 5, 4];

// comparing index of positon 1-2, 2-3, 3-4, 4-5, 5-6, 6-7, 7-8, 8-9, 9-10 ---->total  9 comparisions
// for n values , we have n-1 comparisions - [for 10 items - 9 comparisions]

function BubbleSort(arr) {
  console.log("array length:", arr.length); //10
  // [arr.length - 1] because we dont have to compare the last time
  //10 but we need 9 comparisons so [arr.lenght - 1]

  for (let i = 0; i < arr.length - 1; i++) {
    // depending upon the position we lock the last element in correct place
    // so dont need to compare it so we reduce the size of next loop by i

    for (let j = 0; j < arr.length - 1 - i; j++) {
      // compare and swap
      if (arr[j] > arr[j + 1]) {
        // swap method 1
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        // swap method 2
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(BubbleSort(arr));
console.log("original is changed", arr); //original array is changed

console.log("----pure function----");
// this is not a pure function
// pure functions does not mutate its parameters
// solution is just make the copy of the arguments pass to this function

let arr2 = [6, 8, 9, 7, 10, 3, 1, 2, 5, 4];
console.log("arr 2:", arr2);
function BubbleSort2(array) {
  let arr = array.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log("after bubble sorting:", BubbleSort2(arr2));
console.log("original not changed", arr2); //original array remain un-changed
