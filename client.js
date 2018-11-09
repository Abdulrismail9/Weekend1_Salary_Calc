console.log('JQ');

$( document ).ready(readyNow);

function readyNow() {
    console.log('Jquery working!');
    $('#submit').on('click', addEmployees);
    $('#output').on('click', 'tr', deleteEmp );

    
}// end of readyNow function 
// class for employees 
class Employees{
    constructor( firstName, lastName, id, title, annualSalary ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    } // end of constructor
} // end of Employees class

let totalSalary = 0;
// array to collect our employees 
let employees = [];

// this function will add employess to the table 
function addEmployees() {
    console.log(' in addEmployees');
    const newEmp = new Employees( 
        $( '#firstNameIn' ).val(),
        $( '#lastNameIn' ).val(),
        $( '#idIn' ).val(),
        $( '#titleIn' ).val(),
        $( '#annualSalaryIn' ).val()
    )
    console.log('added', newEmp);
    employees.push( newEmp );
    // emptying inputs 
    $( '#firstNameIn' ).empty(' ');
    $( '#lastNameIn' ).empty(' ');
    $( '#idIn' ).empty(' ');
    $( '#titleIn' ).empty(' ');
    $( '#annualSalaryIn' ).empty(' ');
    displayEmp(employees);
}// end of addEmployees function 
// This function will display employee information on the dom 
function displayEmp(array) {
    console.log(' in displayEmp');
    
    $('#output').empty();

    for( let employee of array ){
        $('#output').append( `<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lasttName}</td> 
        <td>${employee.id}</td> 
        <td>${employee.title}</td>, 
        <td>${employee.annualSalary}</td>
        <td><button id="deleteBtn" type="button" class="btn btn-danger">Delete</button></tr>`
    )
    }// end of loop
    deleteEmp();
} // end of displayEmp function 

// this function will calculate the Total Monthly 
function deleteEmp() {
    console.log('employees delete button clicked');
    $(this).remove();
}