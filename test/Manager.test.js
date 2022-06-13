//require Manager 
const Manager = require('../lib/Manager');

describe("Manager", () => {

    test('Creates a manager object using constructor', () =>{
        const manager = new Manager();

        expect("name" in manager).toEqual(true);
        expect("id" in manager).toEqual(true);
        expect("email" in manager).toEqual(true);
        expect("officeNumber" in manager).toEqual(true);
    })

    test('Checks if you can set officeNumber', () => {
        const office = 1234;
        const manager = new Manager("name", 123, "email", office);

        expect(manager.officeNumber).toEqual(office);
    })

    test('Checks if you can get role from getRole()', () => {
        const manager = new Manager('name', 1234, "email", 5678);

        expect(manager.getRole()).toEqual("Manager");
    })

    test('Checks if you can get office number from officeNumber()', () => {
        const office = 12345;
        const manager = new Manager('name', 1234, "email", office);

        expect(manager.getOfficeNumber()).toEqual(office);
    })
})