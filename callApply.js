const normalPerson = {
    firstName: 'Shafi',
    lastName: 'Imam',
    salary: 15000,
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    chargeBill: function(amount, tax, tips) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

// normalPerson.chargeBill(500);
// normalPerson.chargeBill(3500);
// console.log(normalPerson.salary);
// console.log(normalPerson.getFullName());

const heroPerson = {
    firstName: 'hero',
    lastName: 'alam',
    salary: 25000

}

const wifePerson = {
    firstName: 'priya',
    lastName: 'imam',
    salary: 30000

}

normalPerson.chargeBill();

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendChargeBill = normalPerson.chargeBill.bind(wifePerson);
friendChargeBill(2000);

normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
normalPerson.chargeBill.call(heroPerson, 900, 200, 20);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(wifePerson, 8000, 2000, 200);
console.log(wifePerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log(heroPerson.salary);