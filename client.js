console.log('JQ');

$(document).ready(readyNow);

function readyNow() {
    console.log('Jquery working!');
    $('#submit').on('click', addEmployees);
    $('#output').on('click', '.btn', deleteEmp);


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
    
    displayEmp();
} // end of addEmployees function 

// This function will display employee information on the dom 
function displayEmp() {
    let totalAmt = 0;
    console.log(' in displayEmp');
    $('#output').empty();
    for (let i = 0; i < employees.length; i++ ) {
        const employee = employees[i];
        $('#output').append(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td> 
        <td>${employee.id}</td> 
        <td>${employee.title}</td>, 
        <td>${employee.annualSalary}</td>
        <td><button  type="button" class="btn btn-danger" id="${employee.id}">Delete</button></tr>`);

    } // end of loop
    for( let i=0; i < employees.length; i++){
        const emp = employees[i];
        totalAmt += Number(emp.annualSalary);
    }
    $('#salaryTotals').text(totalAmt / 12);
    if (totalAmt > 20000) {
        $('#salaryTotals').addClass('red');
    } else {
        $('#salaryTotals').removeClass('red');
    }
    

} // end of displayEmp function 

// this function will calculate the Total Monthly 
function deleteEmp() {
    console.log('employees delete button clicked');
    let el = $(this).attr('id');
    console.log('el', el);
    for( let i=0; i < employees.length; i++) {
        const emp = employees[i];
        if(emp.id == el){
            employees.splice(i, 1);
        }
    }
    displayEmp();
    $(this).remove();
}

// Function for adding total monthly
// function totalMonthly() {
//     console.log('adding total');
//     let totalAmt = 0;
//     for (let i = 0; i < employees.length; i++) {
//         const emp = employees[i]
//         totalAmt += number(emp.annualSalary);
//         $('#salaryTotals').text(totalAmt / 12);
//         console.log('totals working', totalAmt);
//     }
//     $('#salaryTotals').empty();
//     $('#salaryTotals').append(`<div>Total Monthly: ${totalAmt}</div>`);
//     //conditional to change color of totalMonthly whenever salary is above 20000
//     if (totalAmt > 20000) {
//         $('#salaryTotals').addClass('red');
//     } else {
//         $('#salaryTotals').removeClass('red');
//     }
// }