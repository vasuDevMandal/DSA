//SelectionSort
// https://www.youtube.com/watch?v=9jwm_9lOHu0&list=PLXzMwWvud3xSsw8TgFO2hjn5Yo-LSkyBx&index=32

// go through the whole list and find the minimum value and
// swap that with the minimum item in the list
/**
 * 1. find the minimum element and lock them in the 1st place
 * 2. reduce the array size by 1 [here we are excluding the front position of sorted element]\
 * 3. then in the remaining array find the minimum element and place them in the front of this array
 * 4. repeat step 2 and 3 till whole array is sorted
 * */

let arr = [10, 5, 8, 9, 6, 3, 4, 7, 2, 1];

function SelectionSort(array) {
  let arr = array.slice();

  // need n-1 swaps for n elements array
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i; //for storing minimum value index

    // ignoring first already sorted elements in the previous passes
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // after inner loop done we assume minIndex variable
    // have the index of minimum value in the inner loop array
    //so we swap

    // [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

console.log(SelectionSort(arr));
