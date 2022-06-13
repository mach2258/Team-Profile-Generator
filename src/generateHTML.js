const makeManager = function (manager) {
    return `<div class="card">
    <div class="card-top">
        <h1>${manager.name}</h1>
        <h2>
            ${manager.getRole()}
        </h2>
    </div>
    <div class="card-bottom">
        <p>ID: ${manager.id}</p>
        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p>${manager.officeNumber}</p>
    </div>
</div>`
}

const makeIntern = function (intern) {
    return `<div class="card">
    <div class="card-top">
        <h1>${intern.name}</h1>
        <h2>
            ${intern.getRole()}
        </h2>
    </div>
    <div class="card-bottom">
        <p>ID: ${intern.id}</p>
        <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p>${intern.school}</p>
    </div>
</div>`
}

const makeEngineer = function (engineer){
    return `<div class="card">
    <div class="card-top">
        <h1>${engineer.name}</h1>
        <h2>
            ${engineer.getRole()}
        </h2>
    </div>
    <div class="card-bottom">
        <p>ID: ${engineer.id}</p>
        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
</div>`
}


function makeHTML(team){

    const managerArray = [];
    const internArray = [];
    const engineerArray = [];

    for(let i = 0; i < team.length; i++)
    {
        let employee = team[i];
        let role = employee.getRole();

        switch(role)
        {
            case "Manager":
            managerArray.push(makeManager(employee))
            break;

            case "Intern":
            internArray.push(makeIntern(employee))
            break;

            case "Engineer":
            engineerArray.push(makeEngineer(employee))
            break;
        }
    }

return `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href = "./src/reset.css" rel="stylesheet">
    <link href = "./src/style.css" rel="stylesheet">
    <title>Employees</title>
</head>
<header>
    <h1>My Staff</h1>
</header>
<body>
    <section>
    ${managerArray.join('')}
    ${internArray.join('')}
    ${engineerArray.join('')}
    </section>
</body>
</html>`
}

module.exports = makeHTML;