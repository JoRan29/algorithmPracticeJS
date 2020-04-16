// Function mergeSort
const mergeSort = (arr) => {
  //Check if arr can be split
  if (arr.length < 2) {
    return arr;
  }
  //Find middle index
  const middle = Math.floor(arr.length / 2);
  //Split arr in two (left and right)
  const leftSide = arr.slice(0, middle);
  const rightSide = arr.slice(middle, arr.length);
  //Use recursion to continue the splitting process
  console.log(`Split: ${leftSide} ${rightSide}`);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
};

// Function merge
const merge = (left, right) => {
  //Create new arr
  const result = [];
  //Check if left/right arr are empty
  while (left.length && right.length) {
    //Find lower value
    if (left[0] <= right[0]) {
      //Add left value
      result.push(left.shift());
    } else {
      //Add right value
      result.push(right.shift());
    }
  }
  //Merge left arr
  while (left.length) result.push(left.shift());
  //Merge right arr
  while (right.length) result.push(right.shift());
  //return result arr
  console.log(`Result: ${result}`);
  return result;
};

let arr = [4, 7, 8, 1, 10, 5, 3];

console.log(mergeSort(arr));

// Insertion Sort Algorithm

const insertionSort = (arr) => {
  //Loop through the arr (minus the base value)
  for (let i = 1; i < arr.length; i++) {
    //Loop through the entire arr and compare
    console.log("outer:" + arr[i]);
    for (let j = 0; j < arr.length; j++) {
      //Check if value is less than current index
      console.log("inner:" + arr[j]);
      if (arr[i] < arr[j]) {
        //If less, remove from arr and store in temp variable
        let temp = arr.splice(i, 1);
        console.log("temp:" + temp);
        //INSERT value into correct index
        arr.splice(j, 0, temp[0]);
      }
    }
  }
  //Return sorted arr
  return arr;
};

// console.log(insertionSort(arr));

let arr2 = [3, 1, 7];

console.log(insertionSort(arr2));

// Bubble Sort

function bubbleSort(arr) {
  //loop length
  const loop = arr.length;
  //loop for loop length
  for (let i = 0; i < loop; i++) {
    //cycle through arr items
    for (let j = 0; j < loop; j++) {
      //compare adjacent items
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
}

bubbleSort([45, 101, -10, 55522, 3224, 523, 16, 133, 543, 33, 33, 123]);

// Binary Search

function BinarySearch(array, low, high, target) {
  //base condition
  // To exit the recursion, if array is empty or n = 1
  if (low > high) {
    return -1;
  }
  //calculate the midpoint of array
  let mid = Math.floor((low + high) / 2);
  if (target == array[mid]) {
    console.log("Target is found at index: ", mid);
    return mid;
  } else if (target < array[mid]) {
    //if the target is less the number at the midpoint of array
    //Search the 2nd half.
    return BinarySearch(array, low, mid - 1, target);
  } else {
    //if the target is larger number at the midpoint of array
    //Search the 1st half.
    return BinarySearch(array, mid + 1, high, target);
  }
}
// To test:
BinarySearch([1, 5, 7, 8, 9, 10, 15], 0, 6, 5);
// Console:
("Target is found at index:  1");
