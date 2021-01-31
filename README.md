# Salary Calculator (jQuery)

## Description

_Duration: Weekend Sprint_

This application was created as a solution for capturing input data about an unlimited number of employees, displaying that data on the webpage, and automatically calculating the company's total monthly cost for paying employee's their salaries, which is also displayed on the web page.

I started with a blank directory, created an HTML index, and created and sourced in CSS, JS, and jQuery files. I designed a form in HTML to create easy-to-understand input boxes for inputting employee information, specifically: First Name, Last Name, Employee ID Number, Job Title and Annual Salary. I used JS and jQuery to capture this data upon clicking the "Submit!" button, and to display the data on the DOM (in a table I designed using HTML). I used a CSS Flex-Grid design to streamline the layout of the page.

As each row of employee information displays in the table on the DOM, there is also attached a 'Delete' button that will remove the entire row of that employee's data from the DOM.

![DOM Display](/images/wknd1CalcSalary.jpg)

At the bottom of the page, the total monthly costs for all employees that have been input is displayed. This is calculated by taking one month (or 1/12th) of the employee's annual salary that is input, and adding that to the same calculation for every other employee that has been input. An alert was requested for when this total monthly cost exceeds $20,000, so I used jQuery + JS to make the Total Monthly Costs flash with a red background when the $20,000 mark is exceeded.

![DOM Display](/images/wknd1CalcSalaryRED.jpg)

## Usage

## TODO

-[x] Create HTML/CSS/jQuery/JS files and link in HTML

-[x] Input form
----[x] employee first name - text
----[x] empl last name - text
----[x] ID number - number
----[x] job title - text
----[x] annual salary - number

-[x] Create a wireframe

-[x] Submit button
----[x] Collect input data (object)
----[x] Store input data
----[x] Calculate monthly costs
----------[x] Limit to two decimals
----------[x] If total monthly cost > $20k, add red bg color to ttl mth cost
----[x] Append info to DOM
----[x] Clear input fields

-[x] Delete Button
---[x] Remove that emp's info from the DOM
---{stretch}: Update total spend on salaries to remove deleted emp's sal
--- use `.text()` as getter or jQuery's `.data()` function.

-[] README -[x] Upload a wireframe/screenshot

**Stretch** -[x] Styling
-[] Delete button stretch listed above

#645244
#795663
#6C809A
#75BBA7
#7AE7C7
