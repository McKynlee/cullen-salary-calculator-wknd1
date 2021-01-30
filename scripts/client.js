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

  //Create object to hold input data
  let employeeData = {
    name: $('#nameInput').val(),
    lastName: $('#lastNameInput').val(),
    idNumber: $('#idNumInput').val(),
    jobTitle: $('#jobTitleInput').val(),
    annualSalary: $('#salaryInput').val(),
    costToEmploy: 'costToEmploy TBD',
  };

  //Push object into array
  employees.push(employeeData);

  console.log(employees);
}
