// Called API

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/");
xhr.onload = function() {
    let data = JSON.parse(xhr.responseText);
    console.log(data);
    
}
xhr.send();