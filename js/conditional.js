// if   if else nested turnary



// if 

// let age = Number(prompt("Enter your age: "));

// if (age >= 18) {
//     console.log("You are an adult");
// }


// let age = Number(prompt("Enter your age: "));

// if (age >= 18) {
//     console.log("You are eligible to vote");
// }
// else{
//     console.log("You are not eligible to vote");
// }

// WAP 3 Numbers to check max Number

// let n1 = Number(prompt("Enter first number: "));
// let n2 = Number(prompt("Enter second number: ")); 
// let n3 = Number(prompt("Enter third number: "));

// if(n1>n2){
//     if(n1>n3){
//         console.log("n1 is max");
//     }
//     else{
//         console.log("n3 is max");
//     }
// }
// else{
//     if(n2>n3){
//         console.log("n2 is max");
//     }
//     else{
//         console.log("n3 is max");
//     }
// }


// WAP 3 Numbers to check min Number

// let n1= Number(prompt("Enter first number: "));
// let n2= Number(prompt("Enter second number: "));    
// let n3= Number(prompt("Enter third number: "));

// if (n1<n2){
//     if(n1<n3){
//         console.log("n1 is min");
//     }
//     else{
//         console.log("n3 is min");
//     }
// }
// else{
//     if(n2<n3){
//         console.log("n2 is min");
//     }
//     else{
//         console.log("n3 is min");
//     }
// }



//  1.   WAP 2 number to check smallest number

// let n1 = Number(prompt("Enter first number: "));
// let n2 = Number(prompt("Enter second number: "));   

// if(n1<n2){
//     console.log("n1 is min");
// }
// else{
//     console.log("n2 is min");
// }


// WAP Enter one value find its positive or nagative

// let n1 = Number(prompt("Enter first number: ")); 

// if(n1>=0){
//     console.log("n1 is positive");
// }
// else{
//     console.log("n1 is negative");
// }



// WAP Enter one value find its divisible by 5 and 3 or not

// let n1 = Number(prompt("Enter first number: "));

// if(n1%5==0 && n1%3==0){
//     console.log("n1 is divisible by 5 and 3");
// }
// else{
//     console.log("n1 is not divisible by 5 and 3");
// }



// WAP Enter one value find its divisible by 5 or not

// let n1 = Number(prompt("Enter first number: "));

// if(n1%5==0){
//     console.log("n1 is divisible by 5");
// }
// else{
//     console.log("n1 is not divisible by 5");
// }



// WAP to find 4 number to check max number

// let n1 = Number(prompt("Enter first number: "));
// let n2 = Number(prompt("Enter second number: "));
// let n3 = Number(prompt("Enter third number: "));
// let n4 = Number(prompt("Enter fourth number: "));

// if(n1>n2){
//     if(n1>n3){
//         if(n1>n4){
//             console.log("n1 is max");
//         }
//         else{
//             console.log("n4 is max");
//         }
//     }
//     else{
//         console.log("n3 is max");
//     }
// }
// else{
//     if(n2>n3){
//         if(n2>n4){
//             console.log("n2 is max");
//         }
//         else{
//             console.log("n4 is maximum");
//         }
//     }
//     else{
//         console.log("n3 is maximum");
//     }
// }




// WAP to find 4 number to check min number

// let n1 = Number(prompt("Enter first number: "));
// let n2 = Number(prompt("Enter second number: "));
// let n3 = Number(prompt("Enter third number: "));
// let n4 = Number(prompt("Enter fourth number: "));

// if(n1<n2){
//     if(n1<n3){
//         if(n1<n4){
//             console.log("n1 is min");
//         }
//         else{
//             console.log("n4 is min");
//         }
//     }
//     else{
//         console.log("n3 is max");
//     }
// }
// else{
//     if(n2<n3){
//         if(n2<n4){
//             console.log("n2 is min");
//         }
//         else{
//             console.log("n4 is minimum");
//         }
//     }
//     else{
//         console.log("n3 is minimum");
//     }
// }




// WAP Students marks wheather pass or fail

// let marks = Number(prompt("Enter your marks: "));

// if(marks>=33){
//     console.log("You are pass");
// }
// else{
//     console.log("You are fail");
// }



// WAP year to check leap year or not

// let year = Number(prompt("Enter year: "));
// if(year % 4 ==0) {
//     console.log("Leap year");
// }
// else{
//     console.log("Not a leap year");
// }


// Ladder if else
// let marks;
// marks = Number(prompt("Enter your marks: "));
// if (marks >= 90) {
//     console.log("your grade is A+");
// }
// else if (marks >= 80) {
//     console.log("Your grade is A");
// }
// else if (marks >= 70) {
//     console.log("Your grade is B");
// }
// else if(marks >= 60) {
//     console.log("Your grade is C");
// }
// else if(marks >= 50) {
//     console.log("Your grade is D");
// }
// else if(marks >= 40) {
//     console.log("Your grade is E");
// }
// else{
//     console.log("You are fail");
// }



// switch case

// let choice = Number(prompt("Enter your choice:"));
// let a,b;
// a = Number(prompt("Enter first number:"));
// b = Number(prompt("Enter second number:"));

// switch (choice) {
//     case 1:
//         console.log("Your addition is: " ,a+b);
//         break;
//     case 2:
//         console.log("Your substraction is: " ,a-b);
//         break;
//     case 3:
//         console.log("Your multiply is: ",a*b);
//         break;
//     case 4:
//         console.log("Your division is: ",a/b);
//         break;
//     case 5:
//         console.log("Your modulas is: ",a%b);
//         break;
//     case 6:
//         console.log("2 power of 16 is: ",2**16);
//         break;
//     default:
//         console.log("Invalid choice");
//         break;
// }


// Password logic

// let old_pass = 123 ,cur_pass = 123 , new_pass = 2020, confirm_pass = 2020;
// cur_pass = prompt("Enter your current password: ");
// old_pass = prompt("Enter your old password: ");
// new_pass = prompt("Enter your new password: ");
// confirm_pass = prompt("Enter your confirm password: ");

// if(old_pass == cur_pass){
//     if(cur_pass == new_pass){
//         console.log("Both password is same");
//     }else if(new_pass == confirm_pass){
//         console.log("Password changed successfully");
//     }
//     else{
//         console.log("New password and confirm password are not same");
//     }
// }
// else{
//     console.log("Old password is not correct");
// }






// 1. An electricity board charges the following rates to domestic users to discourage farge consumption of energy For the first 100 units 60P per unit For the next 200 units 80P per unit Beyond 300 units 90P per unit All users are charged a minimum of Rs. 50. If the total amount is more than 300.00 then an additional surcharge of 15% is added. 


// let units = Number(prompt("Enter the number of units consumed: ")), amount = "";

// if (units <= 100) {
//     amount = units * 0.6 + 50;
// } else if (units <= 200) {
//     amount = (100 * 0.6) + ((units - 100) * 0.8) + 50;
//     console.log("Amount is: ", amount);
// } else if (units <= 300) {
//     amount = (100 * 0.6) + (200 * 0.8) + ((units - 300) * 0.9) + 50;
//     console.log("Amount is: ", amount);
// }
// else {
//     amount = (100 * 0.6) + (200 * 0.8) + (300 * 0.9) + ((units - 300) * 1) + 50;
//     console.log("Amount is: ", amount);
// }
// // If the total amount is more than 300.00 then an additional surcharge of 15% is added. 
// if (amount > 300) {
//     amount = amount * 0.15;
// }

// console.log("Total electricity bill: Rs.", amount);




// 2. C program to check whether a person is eligible for voting or not ?

// let age = Number(prompt("Enter your age: "));

// if (age >= 18) {
//     console.log("You are eligible for voting.");
// } else {
//     console.log("You are not eligible for voting.");
// }



// 3.


// let basicSalary = Number(prompt("Enter your basic salary: ")) , HRA, DA, grossSalary;

// if(basicSalary < 0) {
//     console.log("Invalid basic salary");
// }
// else if(basicSalary <= 5000) {
//     HRA = 0.08 * basicSalary;
//     DA = 0.2 * basicSalary;
//     grossSalary = basicSalary + HRA + DA;
//     console.log("HRA is: ", HRA);
//     console.log("DA is: ", DA);
//     console.log("Your gross salary is: ", grossSalary);
// }
// else if(basicSalary >= 5000 && basicSalary <= 10000) {
//     HRA = 0.12 * basicSalary;
//     DA = 0.3 * basicSalary;
//     grossSalary = basicSalary + HRA + DA;
//     console.log("HRA is: ", HRA);
//     console.log("DA is: ", DA);
//     console.log("Your gross salary is: ", grossSalary);
// }
// else if(basicSalary >= 10000 && basicSalary <= 15000) {
//     HRA = 0.15 * basicSalary;
//     DA = 0.4 * basicSalary;
//     grossSalary = basicSalary + HRA + DA;
//     console.log("HRA is: ", HRA);
//     console.log("DA is: ", DA);
//     console.log("Your gross salary is: ", grossSalary);
// }
// else {
//     HRA = 0.2 * basicSalary;
//     DA = 0.5 * basicSalary;
//     grossSalary = basicSalary + HRA + DA;
//     console.log("HRA is: ", HRA);
//     console.log("DA is: ", DA);
//     console.log("Your gross salary is: ", grossSalary);
// }



// 4.Compute taxes for a given income with tax słab rates as follows
// a. slab 1. 0-2500: 0%
// b. slab 2. 2500-500010%
// c. slab 3 5000-10000: 20%
// d. slab 4 10000+30%


// let income = Number(prompt("Enter your income: ")),tax = 0;

// if (income <= 2500) {
//     tax = 0;
// } else if (income <= 5000) {
//     tax = (income - 2500) * 0.1;
// } else if (income <= 10000) {
//     tax = (2500 * 0.1) + ((income - 5000) * 0.2);
// } else {
//     tax = (2500 * 0.1) + (5000 * 0.2) + ((income - 10000) * 0.3);
// }

// console.log("Your tax is: Rs.", tax.toFixed(2));


// 5.Write a program to evaluate the Total, Percentage, Grace of a student for the following constraints: 
// A. If marks>75-grade A 
// B. If 60 marks 75-grade B 
// C. If 45 marks 60-grace C 
// D. If 35 marks<45-grade D 
// E. If marks <35-Fall 


// let marks;
// marks = Number(prompt("Enter your marks: "));
// if (marks >=0 && marks <=100){
//     if (marks >= 75) {
//         console.log("your grade is A");
//     }
//     else if (marks >= 60 && marks < 75) {
//         console.log("Your grade is B");
//     }
//     else if (marks >= 45 && marks < 60) {
//         console.log("Your grade is C");
//     }
//     else if(marks >= 35 && marks < 45) {
//         console.log("Your grade is D");
//     }
//     else if(marks >= 0 && marks < 35) {
//         console.log("You are fail");
//     }
// }
// else{
//     console.log("Invalid marks");
// }


// 6. Declare two variables x and y. Assign values to these variables. Number x should be printed only if it is less than 2000 or greater than 3000, and number y should be printed only if it is between 100 and 500.

// let x = Number(prompt("Enter Your Value of X : ")),y = Number(prompt("Enter Your Value of Y : "));

// if (x < 2000 || x > 3000) {
//     console.log("x:", x);
// }

// if (y >= 100 && y <= 500) {
//     console.log("y:", y);
// }


