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
//     a++;
//     for (let j = i + 1; j < arr.length; j++) {
//         b++;
//         if(arr[i] > arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log("A => ",a);
// console.log("B => ",b);
// console.log("Sorted arr is",arr);


// DSA Merge Sort

// let arr = [5, 2, 3, 1, 6, 9, 8];

// function mergeSort(arr) {

// }


// DSA Quick Sort

let arr = [5, 2, 3, 1, 6, 9, 8];

let pivot = arr[0];
function quickSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < pivot){
            arr.unshift(arr[i]);
        }
        if(arr[i] > pivot){
            arr.push(arr[i]);
        }
    }
}  
console.log("pivot is ==>", pivot);

console.log("sorted array is ==>",arr);