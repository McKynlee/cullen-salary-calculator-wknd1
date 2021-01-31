# Salary Calculator (jQuery)

## Description

_Duration: Weekend Sprint_

This application was created as a solution for capturing input data about an unlimited number of employees, displaying that data on the webpage, and automatically calculating the company's total monthly cost for paying employee's their salaries, which is also displayed on the web page.

I started with a blank directory, created an HTML index, and created and sourced in CSS, JS, and jQuery files. I designed a form in HTML to create easy-to-understand input boxes for inputting employee information, specifically: First Name, Last Name, Employee ID Number, Job Title and Annual Salary. I used JS and jQuery to capture this data upon clicking the "Submit!" button, and to display the data on the DOM (in a table I designed using HTML). I used a CSS Flex-Grid design to streamline the layout of the page.

As each row of employee information displays in the table on the DOM, there is also attached a 'Delete' button that will remove the entire row of that employee's data from the DOM.

![DOM Display](/images/wknd1CalcSalary.jpg)

At the bottom of the page, the total monthly costs for all employees that have been input is displayed. This is calculated by taking one month (or 1/12th) of the employee's annual salary that is input, and adding that to the same calculation for every other employee that has been input. An alert was requested for when this total monthly cost exceeds $20,000, so I used jQuery + JS to make the Total Monthly Costs flash with a red background when the $20,000 mark is exceeded.

![DOM Display](/images/wknd1CalcSalaryRED.jpg)

## Installation

1. Open the index.html file in your web browser.

## Usage

1. Gather data that you would like to input for employees, the comprehensive list of options is as follows:
   1. Employee First Name (string value)
   1. Employee Last Name (string value)
   1. Employee ID Number (number value)
   1. Employee Job Title (string value)
   1. Employee Annual Salary (number value)
1. Click on the words (label) preceding any given input box, or click directly into the box.
1. Type the corresponding input data into the box. Fill out all boxes for any given employee BEFORE clicking 'Submit!'.
1. Upon filling out all boxes with data for a given employee, click the 'Submit!' button. The employee information will show up in the table below the input boxes and the input boxes will be cleared and ready for you to repeat the above steps with the information of another employee.
1. The Total Monthly Cost will be calculated to include ALL employees that have been submitted.
1. If you would like to remove an employee from the table, click the 'Delete' button next to their name, and their row will be removed from the table. Their monthly cost information, however, is still included in the Total Monthly Costs. This will be a new feature included in my next upgrade to this app.

## Built With

- VisualStudio Code
- HTML
- CSS
- JavaScript
- jQuery

## Acknowledgement

Thanks to [Prime Digital Academy](https://www.primeacademy.io/) who equipped and helped me to make this application a reality.
