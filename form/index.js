document.querySelector("form").addEventListener("submit", (event) => {
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;


    event.preventDefault(); // Prevent form submission for demonstration
    clearErrors(); // Clear previous errors
    if (fname === "") {
        document.getElementById("fname", "First name is required");
    }
})