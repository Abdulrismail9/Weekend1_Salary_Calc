console.log('JQ');

$(document).ready(readyNow);

function readyNow() {
    console.log('Jquery working!');
    $('#submit').on('click', addEmployees);
    $('#output').on('click', 'tr', deleteEmp);


} // end of readyNow function 
// class for employees 
class Employees {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    } // end of constructor
} // end of Employees class


// array to collect our employees 
let employees = [];

// this function will add employess to the table 
function addEmployees() {
    console.log(' in addEmployees');
    const newEmp = new Employees(
        $('#firstNameIn').val(),
        $('#lastNameIn').val(),
        $('#idIn').val(),
        $('#titleIn').val(),
        $('#annualSalaryIn').val()
    )
    console.log('added', newEmp);
    employees.push(newEmp);
    // emptying inputs 
    $('#firstNameIn').empty(' ');
    $('#lastNameIn').empty(' ');
    $('#idIn').empty(' ');
    $('#titleIn').empty(' ');
    $('#annualSalaryIn').empty(' ');
    displayEmp(employees);
} // end of addEmployees function 
// This function will display employee information on the dom 
function displayEmp(array) {
    console.log(' in displayEmp');

    $('#output').empty();

    for (let employee of array) {
        $('#output').append(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td> 
        <td class="empId">${employee.id}</td> 
        <td>${employee.title}</td>, 
        <td class="annualSal">${employee.annualSalary}</td>
        <td><button id="deleteBtn" type="button" class="btn btn-danger">Delete</button></tr>`)

    } // end of loop

    totalMonthly();

} // end of displayEmp function 

// this function will calculate the Total Monthly 
function deleteEmp() {
    console.log('employees delete button clicked');
    // this will find annual salary and id to target 
    const findSal = $(this).closest('tr').find('.annualSal').text();
    console.log('findsal', findSal);
    const findId = $(this).closest('tr').find('.empId').text();
    console.log(findId);
    // this will take out employees with the same id and annual salary 
    for (let emp in employees) {
        if (findSal == parseInt(employees[emp].annualSalary) && findId == parseInt(employees[emp].id)) {
            employees.splice(emp, 1);
            console.log('splice working');
        }
    }
    $(this).remove();
    totalMonthly();
}

// Function for adding total monthly
function totalMonthly() {
    console.log('adding total');
    let totalAmt = 0;
    for (let i = 0; i < employees.length; i++) {
        totalAmt += parseInt(employees[i].annualSalary);
        console.log('totals working', totalAmt);
    }
    $('#salaryTotals').empty();
    $('#salaryTotals').append(`<div>Total Monthly: ${totalAmt}</div>`);
    //conditional to change color of totalMonthly whenever salary is above 20000
    if (totalAmt > 20000) {
        $('#salaryTotals').addClass('red');
    } else {
        $('#salaryTotals').removeClass('red');
    }
}