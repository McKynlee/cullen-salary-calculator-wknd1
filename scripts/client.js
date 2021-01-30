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
    annualSalary: Number($('#salaryInput').val()),
    costToEmploy: Number(totalMonthlyCost),
  };

  //Push object into array
  employees.push(employeeData);

  if (totalMonthlyCost > 20000) {
    // make bg color of Monthly Cost red
  }

  console.log(employees);

  displayEmployees(employees);
  displayMonthlyCost(employees);
}

function displayEmployees(empInfo) {
  //Append input values to table on DOM
  let table = $('#tableBody');

  table.empty();

  for (let item of empInfo) {
    table.append(`
  <tr>
    <td>${item.name}</td>
    <td>${item.lastName}</td>
    <td>${item.idNumber}</td>
    <td>${item.annualSalary}</td>
  </tr>
`);
  }
}

// function displayMonthlyCost(employeeInfo) {
//   //Calculate monthly costs on DOM
//   let totalCost = $('#totalMonthlyCost');
//   totalCost.empty();

//   for (let cost of employeeInfo) {
//     totalCost.append(`
// ${cost.costToEmploy}
// `);
//   }
// }
