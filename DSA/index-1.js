// ** DSA Insertion Sort ** //

// let arr = [5, 3, 1, 2, 9, 7, 8];
// let a = 0;
// let b = 0;

// for (i = 0; i < arr.length - 1; i++) {
//     a++;
//     for (let j = i + 1; j < arr.length; j++) {
//         b++;
//         if (arr[i] > arr[j]) {
//             c = arr[i];
//             arr[i] = arr[j];
//             arr[j] = c;
//         }
//     }
// }
// console.log("A => ", a);
// console.log("B => ", b);
// console.log(arr);



// ** bubble sort **


// let a = 0;
// let b = 0;
// let arr = [5, 2, 3, 1, 6, 9, 8];
// for (let j = 0; j < arr.length - 1; j++) {
//     a++;
//     for (let i = 0; i < arr.length - 1-j; i++) {
//         b++;
//         if (arr[i] > arr[i + 1]) {
//             c = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = c;
//         }
//     }
// }
// console.log("A => ",a);
// console.log("B => ",b);
// console.log(arr);



// DSA selection  Sort


// let a = 0;
// let b = 0;
// let arr = [5, 2, 3, 1, 6, 9, 8];
// for (let i = 0; i < arr.length - 1; i++) {
//     min_index = i;
//     a++;
//     for (let j = i + 1; j < arr.length; j++) {
//         b++;
//         if (arr[min_index] >= arr[j]) {
//             min_index = j;
//         }
//     }
//     if (min_index === i) continue;
//     let deleted = arr.splice(min_index, 1);
//     arr.splice(i, 0, deleted[0]);
//     console.log(arr);
//     console.log(min_index);
// }
// console.log("A => ", a);
// console.log("B => ", b);
// console.log("Sorted arr is", arr);


// DSA Merge Sort

// let arr = [5, 2, 3, 1, 6, 9, 8];
// let a = 0;
// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;

//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));
//     console.log("Splitting => ", arr);

//     return merge(left, right);
// }
// function merge(left, right) {
//     a++;
//     let result = [];
//     let i = 0;
//     let j = 0;
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//             console.log("Merging => ", result);
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }
// return result.concat(left.slice(i)).concat(right.slice(j));
// }
// console.log("A => ", a);
// console.log("Sorted array is => ", mergeSort(arr));


// DSA quick sort

// let arr = [5, 2, 3, 1, 6, 9, 8];
// function quickSort(arr) {
//     if (arr.length <= 1) return arr;

//     const pivot = arr[arr.length - 1];
//     const left = [];
//     const right = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }
// console.log("Sorted array is => ", quickSort(arr));


// DSA Counting Array

// let arr = [2,3,0,2,3,2,1,2,5,4];
// let countArray = [];

// for(let i = 0; i < arr.length; i++) {
//     if (!countArray[arr[i]]) {
//         countArray[arr[i]] = 1;
//     } else {
//         countArray[arr[i]]++;
//     }
// }
// console.log("Count Array is => ", countArray);


// let arr = [5, 7, 8, 3, 6, 2, 1];
// sum = 0;
// function myArray(value,index) {
//     console.log("Value => ", value, "Index => ", index);
//     return sum += value; 
// }
// arr.reduce(myArray);
// console.log("Array after => ", sum);


// let arr = [5, 7, 8, 5, 3, 6, 2, 1, 6, 4, 5, 7,];

// console.log("Your value => ", arr.splice(6, 1, 2, 3, 5, 6, 9, 8, 7, 4));
// console.log("Your array => ", arr);

// 
// let arr = [10,'j','a','y','d','i','r','g','h'];
// console.log("Your value => ", arr.entries());

// const fruits = ["Banana", "Orange", "Apple", "Mango","Banana"];
// [[0, "Banana"], [1, "Orange"], [2, "Apple"], [3, "Mango"]]

// const list = fruits.entries();

// for (let i = 0; i < fruits.length; i++) {
//     console.log("Your value => ", list.next().value);       
// }

let arr = [1,2,5,6,8,9,7,2,5];
function myFunc(value,index) {
    console.log("Value => ", value, "Index => ", index);
    return [index + " - " + value];
}
console.log("Your value ", arr.at(myFunc));
// console.log("Your value ", arr); 


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };
// const keys = Object.keys(person);
// console.log("Keys of person object => ", keys);
// const values = Object.values(person);
// console.log("Values of person object => ", values);