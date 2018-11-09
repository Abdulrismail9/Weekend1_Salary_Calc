console.log('JQ');

$( document ).ready(readyNow);

function readyNow() {
    console.log('Jquery working!');
    $('#submit').on('click', addEmployees);
    
}// end of readyNow function 
// class for employees 
class Employess{
    constructor( firstName, lastName, id, title, annualSalary ){
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
    const tempEmp = new Employess( 
        $( 'firstNameIn' ).val(),
        $( 'lastNameIn' ).val(),
        $( 'idIn' ).val(),
        $( 'titleIn' ).val(),
        $( 'annualSalaryIn' ).val()
    )
}