//require Engineer
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

    test('Creates an engineer object using constructor', () => {
        const engineer = new Engineer();

        
        expect("name" in engineer).toEqual(true);
        expect("id" in engineer).toEqual(true);
        expect("email" in engineer).toEqual(true);
        expect("github" in engineer).toEqual(true);
    })

    test('Checks if you can set github', () => {
        const github = "myGithub";
        const engineer = new Engineer("name", 123, "email", github);

        expect(engineer.github).toEqual(github);
    })

    test('Checks if you can get role from getRole()', () => {
        const engineer = new Engineer('name', 1234, "email", "myGithub");

        expect(engineer.getRole()).toEqual("Engineer");
    })

    test('Checks if you can get role from getRole()', () => {
        const myGithub = "myGithub"
        const engineer = new Engineer('name', 1234, "email", myGithub);

        expect(engineer.getGithub()).toEqual(myGithub);
    })
})