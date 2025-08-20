// let numbers = [5, 12, 8, 130, 44];
// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log("Maximum number:", max); 




// let arr = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArr = [];

// arr.forEach((item) => {
//   if (!uniqueArr.includes(item)) {
//     uniqueArr.push(item);
//   }
// });
// console.log(uniqueArr); // [1, 2, 3, 4, 5]




// let arr = [1, 2, 3, 4, 5];
// let reversedArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversedArr.push(arr[i]);
// }

// console.log(reversedArr); // [5, 4, 3, 2, 1]



// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// const result = [...arr1, ...arr2, ...arr3];
// console.log(result); // [1, 2, 3, 4, 5, 6]



// function searchInsertPosition(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1; 
//     } else {
//       right = mid - 1; 
//     }
//   }

//   return left;
// }

// const nums = [1, 3, 5, 6];
// const target1 = 5;
// const target2 = 2;
// const target3 = 7;
// const target4 = 0;

// console.log(searchInsertPosition(nums, target1));
// console.log(searchInsertPosition(nums, target2));
// console.log(searchInsertPosition(nums, target3));
// console.log(searchInsertPosition(nums, target4));






// Bubble sort

// let arr = [1, 5, 8, 9, 4, 7, 2, 55, 6, 88, 99, 44, 11, 22,25,665, 56, 89, 20, 15]

// for (let i = 0; i <= arr.length; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j]
//       arr[j] = arr[j + 1]
//       arr[j + 1] = temp
//     }
//   }
//   console.log(arr)
// }

// myEvent = () => "hello world";
// document.getElementById("demo").innerHTML = myEvent();




// function sum(a, b, c){
//   return a + b+ c;
// }

// function sum(a,b){
//   return a + b;
// }

// let a =  sum(10,20);

// console.log("a = ",a);


// function total(){
//   console.log("argument = ", arguments.length, arguments);
//   let sum = 0;
//   for (let i =0; i< arguments.length; i++){
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(" 2 argument = ", total(10 , 20));
// console.log(" 3 argument = ", total(10 , 20, 30));
// console.log(" 4 argument = ", total(10 , 20, 30, 40));


// function sum(a) {
//   let sum = 0;
//   for (let i=0; i<=a;i++) {
//     sum += a;
//   }
//   return sum;
// }
// console.log(sum(10));

// function sum(a){
//   if (a == 1){
//     return a;
//   }
//   return a+ sum(a-1);
// }

// console.log("sum == ", sum(10));

// function fibonacci(n, a=0 , b=1 ) {
//   if (n == 0) {
//     return;
//   }
//   process.stdout.write(a.toString());
//   fibonacci(n-1, b, a + b);
// }

// fibonacci(5);


// let sum = (a,b,sum) =>{
//   sum = 0;
//   return a+b;
// }

// console.log(sum(4,5));

// function vovel(str){
//   count = 0;
//   for(let char of str){
//     if(char === "a" || char === "i" ||char === "i" ||char === "o" ||char === "u"){
//       count++;
//     }
//   }
//   console.log(count);
// }
// vovel("vora")

// let vovelCount = (str) =>{
//   count = 0;
//    for(let char of str){
//     if(char === "a" || char === "i" ||char === "i" ||char === "o" ||char === "u"||char === "A" ||char === "E" ||char === "I" ||char === "O" || char === "U"){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vovelCount("LKAAAnjsn;WIOEURIADAOPEIFOWE"));


// let arr = [1, 2, 3, 4, 5, 6];

// let square = ((arr) => {
//   console.log(arr**2)
// });

// arr.forEach(square);


// let arr = [1,2,3,4,55,6,22,54,44,25,322221,745];

// let printValue = arr.reduce((res,curr) =>{
//   return res + curr;
// });
// console.log(printValue);



// let fruits = ["Apple","Watermelon","Orange","Banana"]
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let fName = ["vora"]
// let lName = ["jaydip"]


// let fruit = fruits.at(2);
// console.log(fruit);


// let fruit = fruits.push("Mango");
// console.log(fruits);


// let fruit = fruits.join(" * ");
// console.log(fruit);

// let fruit = fruits.pop();
// console.log(fruits);


// let fruit = fruits.shift();
// console.log(fruits);

// let fruit = fruits.unshift("banana");
// console.log(fruits);

// fruits[0] = "Kiwi"

// delete fruits[2]

// let joint = fName.concat(lName);
// console.log(joint);

// let fruit = fruits.splice(2, 0, "Lemon", "Kiwi");

// let fruit = fruits.splice(0,3);

// let fruit = fruits.toSpliced(0, 2)


// let fruit = fruits.copyWithin(0, 1)
// console.log(fruits);

// let newArr = arr.flat();
// console.log(newArr);

// let a= Math.E;
// let a= Math.PI;
// let a= Math.SQRT2;
// let a= Math.SQRT1_2;
// let a= Math.LN2;
// let a= Math.LN10;
// let a= Math.LOG2E;
// let a= Math.LOG10E;

// let a = Math.floor(5.3)
// let b = Math.floor(5.6)
// let c = Math.floor(-5.3)
// let d = Math.floor(-5.8)
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// fruits.sort();
// console.log(fruits);

// let num = [89,55,74,56,25,88,12,10,52,78,48,14];
// let fruits = ["Apple","watermelon","Orange","Banana","Lemon", "Kiwi"];
// fruits.sort();
// fruits.reverse();

// console.log(fruits);



// let text = "<ul>";
// for(let i = 0;i<fruit.length;i++){
//     text += "<li>"+fruit[i] + "</li>";
// }
// text += "</ul>";
// console.log(text);

// document.getElementById("demo").innerHTML = text;


// let nums = [2,7,11,15];
// let twoSum = function (target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] === target - nums[i]) {
//                 return [i, j];
//             }
//         }
//     }
// }
// console.log(twoSum(9));



// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] === target - nums[i]) {
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// };
// console.log(twoSum([2,7,11,15],2))


// let position = fruits.indexOf("Orange");
// let position = fruits.lastIndexOf("Orange");
// let position = fruits.includes("cheri");
// let high = num.findLastIndex(x => x > 40);

// let first = num.find(myFunction);

// function myFunction(value) {
//   return value > 18;
// }
// console.log(myFunction(14));

// let first = num.findIndex(myFunction);
// function myFunction(value) {
//   return value > 18;
// }
// console.log(myFunction(55));

// let math = 0.5 - Math.random();
// console.log(math); 


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkList{
    constructor(){
        this.head = null;
    }
    
    appendData(val){
        let temp = new Node(val);

        if (this.head == null) {
            this.head = temp;
        }
        else{
            let current = this.head;

            while(current.next != null){
                current = current.next;
            }
            current.next = temp;
        }
    }

    removeData(){
        if (this.head == null) {
            console.log("have kai nathi pan tya");
        } else if (this.head.next == null) {
            this.head = null
        }
        else{
            let current = this.head;
            let prev;
            while(current.next != null){
                prev = current;
                current = current.next;
            }
            prev.next = null;
        }
    }
    displayData(){
        if (this.head == null) {
            console.log("List is Empty");
        } else {
            let current = this.head;
            let data = "";
            while (current) {
                data +=current.data + "->";
                current = current.next;
            } 
            console.log(data);
        }
    }
};

let singlyLinkList = new SinglyLinkList();

singlyLinkList.appendData(100);
singlyLinkList.appendData(200);
singlyLinkList.appendData(300);
singlyLinkList.appendData(400);

singlyLinkList.displayData();


singlyLinkList.removeData();
singlyLinkList.removeData();
singlyLinkList.displayData();