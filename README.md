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

1. Open the index.html in your web browser.

## Usage

1. df
1. df

## Built With

- VisualStudio Code
- HTML
- CSS
- JavaScript
- jQuery

## Acknowledgement

Thanks to [Prime Digital Academy](https://www.primeacademy.io/) who equipped and helped me to make this application a reality.
