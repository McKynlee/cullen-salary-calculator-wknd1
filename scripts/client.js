console.log('JS up and running!');

$(document).ready(onReady);

//Create repository to capture employee input data
let employees = [];

function onReady() {
  console.log('jQuery up and running!');

  //when 'Submit!' is clicked, store input data in array
  $(document).on('click', '#addItemBtn', addItem);
}

function addItem(event) {
  //Override form page refresh:
  event.preventDefault();

  //test that addItem runs
  console.log('in addItem');

  let totalMonthlyCost = $('#salaryInput').val() / 12;
  //Create object to hold input data
  let employeeData = {
    name: $('#nameInput').val(),
    lastName: $('#lastNameInput').val(),
    idNumber: $('#idNumInput').val(),
    jobTitle: $('#jobTitleInput').val(),
    annualSalary: $('#salaryInput').val(),
    costToEmploy: totalMonthlyCost,
  };

  //Push object into array
  employees.push(employeeData);

  if (totalMonthlyCost > 20000) {
    // make bg color of Monthly Cost red
  }

  console.log(employees);

  displayEmployees();
}

function displayEmployees() {
  //Append input values to table on DOM
  let;
}
