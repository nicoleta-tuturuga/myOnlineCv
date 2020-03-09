console.log("start");

var ul = document.getElementsByClassName("employees")[0];
var addForm = document.querySelector("form");
var loadingGif = document.querySelector(".loadingSpinner");



getDataFromServer();

function getDataFromServer() {
    fetch(" https://rest.atroot.cf/employees")
        .then(parseResponse)
        .then(displayEmployee)
}

function parseResponse(response) {
    return response.json();
}

function displayEmployee(employees) {

    for (var i = 0; i < 5; i++) {
        var employeeItem = employees[i];

        createEmployeeLi(employeeItem);
    }
}

function createEmployeeLi(employeeItem) {

    var li = document.createElement("li");
    li.classList.add("employee");

    var h4 = document.createElement("h4");
    h4.innerHTML = employeeItem.name;

    var img = document.createElement("img");
    img.setAttribute("src", employeeItem.avatar);

    var p = document.createElement("p");
    p.innerHTML = "Age: " + employeeItem.age + " Salary: " + employeeItem.salary

    var deleteLi = document.createElement("span");
    deleteLi.classList.add("delete");
    deleteLi.innerHTML = "&times";


    li.appendChild(h4);
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(deleteLi);

    ul.appendChild(li);


    deleteLi.addEventListener('click', function () {
        ul.removeChild(li);
    });
}

addForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var userName = document.getElementById("name").value;
    var userAge = document.getElementById("age").value;
    var userSalary = document.getElementById("salary").value;
    console.log(userName, userAge, userSalary)

    var newEmployee = {
        name: userName,
        age: userAge,
        salary: userSalary
    }

    loadingGif.classList.remove("hiddenLoadingSpinner");

    createEmployeeLi(newEmployee);

    addEmployeeUsingFetch(newEmployee);
})

//---------------------------------------
//post with fetch
//----------------------------------------


function addEmployeeUsingFetch(newEmployee) {
    fetch("https://rest.atroot.cf/employees", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newEmployee.name,
            age: newEmployee.age,
            salary: newEmployee.salary
        })
    })
        .then((response) => {
            console.log("Success!");
            loadingGif.classList.add("hiddenLoadingSpinner");
        });

}


console.log("end");