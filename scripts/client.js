console.log('JS up and running!');

$(document).ready(onReady);

//Create repository to capture employee input data
let employees = [];

function onReady() {
  console.log('jQuery up and running!');

  //when 'Submit!' is clicked, store input data in array
  $(document).on('click', '#addItemBtn', addItem);
  $(document).on('click', '#deleteBtn', deleteMe);
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

  console.log(employees);

  displayEmployees(employees);
  displayMonthlyCost(employees);

  //Clear input boxes upon submit
  $('#nameInput').val('');
  $('#lastNameInput').val('');
  $('#idNumInput').val('');
  $('#jobTitleInput').val('');
  $('#salaryInput').val('');
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
    <td id="deleteBtn" data-value="${item.costToEmploy}">
      <button>Delete</button>
    </td>
  </tr>
`);
  }
}

function displayMonthlyCost(employeeInfo) {
  //Calculate monthly costs on DOM
  let totalCostOnDOM = $('#totalMonthlyCost');
  let totalCost = 0;

  totalCostOnDOM.empty();

  for (let cost of employeeInfo) {
    totalCost += Number(cost.costToEmploy);
    if (totalCost > 20000) {
      $('#mthCost').css('background-color', 'red');
    } else {
      $('#mthCost').css('background-color', '#6c809a');
    }
  }

  totalCostOnDOM.append(totalCost.toFixed(2));
}

function deleteMe() {
  let thisThing = $(this);

  //Testing delete button selection:
  console.log('What is this?', thisThing);

  //To remove entire list item element access its parent:
  $(this).parent().remove();
  
  // Code to be worked for future upgrade to remove deleted employee costs 
  // from total monthly cost displayed:
  
  // let costToRemove = Number($(this).data('value'));
  // console.log('costToRemove =', costToRemove);
  // Have correctly targeted the deleted employee's month cost data, 
  //but haven't figured out how to successfully remove it from the total cost- yet.
}
