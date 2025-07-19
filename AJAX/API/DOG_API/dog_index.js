let select = document.querySelector("select");
let button = document.querySelector("button");
let dogImg = document.querySelector("#dogImg");

// Fetching breed list and populating select options
fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(data => {
    let breedList = Object.keys(data.message);
    breedList.forEach(breed => {
      let option = document.createElement("option");
      option.setAttribute("value", breed);
      option.innerHTML = breed;
      select.append(option);
    });
  })
  .catch(err => console.log(err.message));

// Button click event to fetch image
button.addEventListener("click", () => {
  let selectedBreed = select.value;
  if (selectedBreed === "select-breed") {
    alert("Please select a breed");
    return;
  }

  fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
    .then(res => res.json())
    .then(data => {
      dogImg.innerHTML = "";
      
      let img = document.createElement("img");
      img.setAttribute("src", data.message);
      img.style.width = "300px";
      img.style.height = "300px";
      img.style.borderRadius = "10px";
      img.style.margin = "10px";
      img.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
      
      dogImg.append(img); 
    })
    .catch(err => console.log(err.message));
});
