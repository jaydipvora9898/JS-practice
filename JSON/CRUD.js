let addUserForm = document.getElementById("addUser");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let mobileNo = document.getElementById("mobileNo");
let tbody = document.getElementById("viewData");

// edit user
let editUserForm = document.getElementById("editUser");
let editFname = document.getElementById("editFname");
let editLname = document.getElementById("editLname");
let editEmail = document.getElementById("editEmail");
let editPassword = document.getElementById("editPassword");
let editMobileNo = document.getElementById("editMobileNo");


let editIndex = null;
// Add Data into LocalStorage

addUserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    let newUser = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        password: password.value,
        mobileNo: mobileNo.value
    }
    users.push(newUser);
    localStorage.setItem("Users", JSON.stringify(users));
    addUserForm.reset();
    displayData()
});
function displayData() {
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    let data = "";
    users.forEach((user, index) => {
        let row =
            `<tr>
            <td>${index}</td>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.email}</td>
            <td>${user.mobileNo}</td>
            <td><button onclick="editData(${index})">Edit</button></td>
            <td><button onclick="deleteData(${index})">Delete</button></td>
        </tr>
        `
        data = data+row
    });
    tbody.innerHTML = data;
}
displayData()

// Delete record

function deleteData(id){
    let userData = JSON.parse(localStorage.getItem("Users"));
    userData.splice(id,1);
    localStorage.setItem("Users",JSON.stringify(userData))
    displayData()
}

// Edit Data
function editData(id){
    let userData = JSON.parse(localStorage.getItem("Users"));
    let editUser = userData[id];
    console.log(editUser);
    
    editFname.value =editUser.fname
    editLname.value =editUser.lname
    editEmail.value =editUser.email
    editPassword.value =editUser.password
    editMobileNo.value =editUser.mobileNo

    document.querySelector("#addDiv").style.display = "none"
    document.querySelector("#editDiv").style.display = "block"

    editIndex = id;
}

// Update Data into LocalStorage

editUserForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("Users"));
    users[editIndex] = {
        fname : editFname.value,
        lname : editLname.value,
        email : editEmail.value,
        password : editPassword.value,
        mobileNo : editMobileNo.value
    }
    localStorage.setItem("Users",JSON.stringify(users));
    editUserForm.reset();
    displayData()

    document.getElementById("addDiv").style.display = "block"
    document.getElementById("editDiv").style.display = "none"

    editIndex = null;

})
