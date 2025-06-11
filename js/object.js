// Js object

// syntex of object

// object literal
// let person = {
//     name: "John",
//     age: 20,
//     city: "New York"

// }

// console.log(person);
// console.log(person.name);
// console.log(person.city);
// person.city = "India";
// delete person.age;

// console.log(person);


// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor : "blue"
//   };


//   console.log(Object.keys(person));
//   console.log(Object.values(person));

// date Object

// let date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// math object

// let a = 50;
// console.log(a);
// console.log(Math.round(a));

// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(Math.abs(a));
// console.log(Math.pow(a, 2));
// console.log(Math.sqrt(a));
// console.log(Math.cbrt(a));
// console.log(Math.random());
// console.log(Math.min(1, 2, 3, 4, 5));
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.sin(a));
// console.log(Math.cos(a));
// console.log(Math.tan(a));
// console.log(Math.asin(a));
// console.log(Math.acos(a));
// console.log(Math.atan(a));



// string object

// let str = "Hello World";
// console.log(str);
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charAt(0));
// console.log(str.indexOf("World"));
// console.log(str.substring(0, 5));
// console.log(str.slice(0, 5));
// console.log(str.replace("World", "JavaScript"));
// console.log(str.concat("Hello", "World"));
// console.log(str.trim());
// console.log(str.split(" "));
// console.log(str.includes("Hello"));
// console.log(str.startsWith("Hello"));
// console.log(str.endsWith("World"));
// console.log(str.charAt(0));


// object with Array

// let person = {
//     name: "John",
//     age: 20,
//     city: "New York",
//     hobbies: ["reading", "writing", "coding"],
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY"
//     }
// }
// console.log(person);
// console.log(person.address.state);

// Object wit looping

let person = {
    name: "John",
    age: 20,
    city: "New York",
    hobbies: ["reading", "writing", "coding"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}

// let person = [11,22,33,44,55,66,77,]
    
// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }

for(let key in person){
    console.log(`${key} : ${person[key]}`);
}
