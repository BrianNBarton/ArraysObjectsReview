"use strict";

// Define a function `reverseArrayString` that accepts one argument, a string of comma separated values. It should reverse the order of the values and return a string.
// Eg. reverseArrayString("1,2,3") should return "3,2,1"

const reverseArrayString = function(arrStr) {
  // Split the string by commas, results in an array
  let arr =  arrStr.split(","); // [1,2,3]

  // Reverse the array in place
  arr.reverse(); // [3,2,1]

  // Convert the array back into a comma separated string
  let result = arr.join(",");

  return result;
}

// Define a function `swapFirstLast` that accepts one argument, an array. It should take the first and last elements, and swap their positions in the array.
// Eg. swapFirstLast([0,2,4]) should return [4,2,0]

const swapFirstLast = function(arr) {

  // Shift removes the first element and returns it
  let first = arr.shift();

  // Pop removes the last element and returns it
  let last = arr.pop();

  // Push adds `first` to the end of the array
  arr.push(first);

  // Unshift adds `last` to the beginning of the array
  arr.unshift(last);

  return arr;
}

// Define a function `chopDNA` that accepts one argument, an array of strings. It should iterate the array, if the element is the stop codon "TAG", chop off the rest of the array and return it.
// Eg. chopDNA(["CCC", "AGG", "TAA", "CAA"]) should return ["CCC", "AGG", "TAA"]

const chopDNA = function(arr) {

  // Iterate Array
  arr.forEach(function(val,idx) {
    // If the current element is a stop codon, slice the array and return
    if(val === "TAA")
      return arr.slice(0, idx);
  });

  // If no stop codon was found, return the original
  return arr;
}

// TODO This array is just for reference, you can leave it commented
// let videos = [
//   {
//     name: "Keyboard Cat",
//     views: 59000000
//   },
//   {
//     name: "Charlie Bit My Finger",
//     views: 875000000
//   },
//   {
//     name: "Rick Astley - Never Gonna Give You Up",
//     views: 721000000
//   },
// ];

// Define a function `sortByViews` that accepts one argument, an array of objects. It should iterate the array and sort the objects by their `views` property.

const sortByViews = function(arr) {

  // Sort the array in place
  arr.sort(function(objA, objB) {

    // If `objA.views` is higher, set objA to a higher index
    if(objA.views > objB.views) {
      return 1;
    // If `objA.views` is lower, set objA to a lower index
    } else if(objA.views < objB.views) {
      return -1;
    }

    // If `objA.views` is equal to `objB.views`, leave them where they are.
    return 0;
  });

  return arr;
}
