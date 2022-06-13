//Require Intern  
const Intern = require('../lib/Intern');

describe("Intern", () => {

    test('creates Intern object containing "name, id, email"', () => {
        const intern = new Intern();

        expect("name" in intern).toEqual(true);
        expect("id" in intern).toEqual(true);
        expect("email" in intern).toEqual(true);
        expect("school" in intern).toEqual(true);
    })

    test('Checks if you can set school', () => {
        const school = "SCHOOL";
        const intern = new Intern("name", 123, "email", school);

        expect(intern.school).toEqual(school);
    })

    test('Checks if you can get role from getRole()', () => {
        const intern = new Intern('name', 1234, "email", "school");

        expect(intern.getRole()).toEqual("Intern");
    })

    test('Checks if you can get role from getRole()', () => {
        const school = "SCHOOL";
        const intern = new Intern('name', 1234, "email", school);

        expect(intern.getSchool()).toEqual(school);
    })
})