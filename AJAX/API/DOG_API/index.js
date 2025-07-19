// // DOG API USING FETCH

// document.querySelector("button").addEventListener("click",  () => {
//     fetch("https://dog.ceo/api/breeds/image/random")
// .then(res => res.json())
// .then(data => {
//     let image = document.createElement("img");
//     image.style.margin = "10px";
//     image.setAttribute("src", data.message);
//     image.setAttribute("height", "250px");
//     image.setAttribute("width", "250px");
//     image.setAttribute("border", "2px solid black");
//     document.querySelector("#dogImg").prepend(image);
// })  
// .catch(err => console.log(err.message))

// })

// DOG API USING AJAX

// document.querySelector("button").addEventListener("click", () => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
//     xhr.onload = function () {
//         let data = JSON.parse(xhr.responseText);
//         let image = document.createElement("img");
//         image.style.margin = "10px";
//         image.style.objectFit = "cover";
//         image.setAttribute("src", data.message);
//         image.setAttribute("height", "250px");
//         image.setAttribute("width", "250px");
//         image.setAttribute("border", "2px solid black");
//         document.querySelector("#dogImg").prepend(image);
//     }
//     xhr.send();
// });