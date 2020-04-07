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

console.log(insertionSort(arr));
