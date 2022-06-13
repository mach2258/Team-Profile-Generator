
const Employee = require('../lib/Employee');


describe("Employee", () => {

    test('creates Employee object containing "name, id, email"', () => {
        const employee = new Employee();

        expect("name" in employee).toEqual(true);
        expect("id" in employee).toEqual(true);
        expect("email" in employee).toEqual(true);
    })

    test('Checks if employee is object', () => {
        const employee = new Employee();

        expect(typeof employee).toEqual("object");
    })

    test('Checks if you can set name', () => {
        const name = "Erich";
        const obj = new Employee(name);

        expect(obj.name).toEqual(name);
    })

    test('Checks if you can set ID', () => {
        const id = 1234;
        const obj = new Employee('name', id);

        expect(obj.id).toEqual(id);
    })

    test('Checks if you can set email', () => {
        const email = "name@gmail.com";
        const obj = new Employee('name', 1234, email);

        expect(obj.email).toEqual(email);
    })

    test('Checks if you can get name from getName() function', () => {
        const name = "Erich";
        const employee = new Employee(name);

        expect(employee.getName()).toEqual(name);
    })

    test('Checks if you can get id from getID() function', () => {
        const id = 1234;
        const employee = new Employee("name", id);

        expect(employee.getID()).toEqual(id);
    })

    test('Checks if you can get email from getEmail() function', () => {
        const email = "Erich@gmail.com";
        const employee = new Employee("name", 1234, email);

        expect(employee.getEmail()).toEqual(email);
    })

    test('Checks if you can get role from getRole() function', () => {
        const role = "Employee";
        const employee = new Employee("name", 1234, "email", role);

        expect(employee.getRole()).toEqual(role);
    })
})