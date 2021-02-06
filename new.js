class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('hero', 'balam', 20000);
const wifePerson = new Person('priya', 'imam', '20000');

console.log(heroPerson);
console.log(wifePerson);