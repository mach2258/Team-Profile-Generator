const fs = require('fs')
const inquirer = require('inquirer')

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const makeHTML = require('./src/generateHTML')



const staff= [];

function spawnManager () {
    inquirer
        .prompt([
            {type: 'input', message: "Enter the manager's name", name: 'name'},
            {type: 'input', message: "Enter the manager's employee ID", name: 'employee'},
            {type: 'input', message: "Enter the manager's address", name: 'email'},
            {type: 'input', message: "Enter the manager's office number", name: 'office'},
        ])
        .then ((response) => {
            let manager = new Manager ( response.name, response.employee, response.email, response.office)
            staff.push(manager)
            spawnEmployee();
        })
}

function spawnEmployee() {
    inquirer
        .prompt([
            {type: 'list', message: "Is this new employee an Engineer or Intern?", name: 'role', choices: ['Engineer','Intern']},
            {type: 'input', message: "Enter the employee's employee name", name: 'name'},
            {type: 'input', message: "Enter the employee's employee ID", name: 'employee'},
            {type: 'input', message: "Enter the employee's email address", name: 'email'},
            {type: 'input', message: "Enter the employee's github username", when: (list) => list.role == "Engineer", name: "github"},
            {type: 'input', message: "Enter the employee's school", when: (list) => list.role == "Intern", name: "school" },
            {type: 'input', message: "Would you like to add another employee", name: "add"},
        ])
        .then((response) => {
            if(response.role == "Intern") {
                
                let intern = new Intern ( response.name, response.employee, response.email, response.school)
                staff.push(intern)
            }
            else if(response.role == "Engineer") {
                
                let engineer = new Engineer ( response.name, response.employee, response.email, response.github)
                staff.push(engineer)
            }
            if(response.add == true)
            {spawnEmployee();}
            else
            {spawnHTML()}
        })
}

const spawnHTML = () => {
    fs.writeFile("./staff.html", makeHTML(staff), (err) => {
        err ? console.log("Error: The following program has not worked") : console.log(" A HTML has spawned")
    })
}

spawnManager();