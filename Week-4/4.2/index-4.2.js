function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.printDetails = function() {
    console.log(`This person is ${this.name} who is ${this.age} years old.`);
}

function Teacher(name, age) {
    Person.call(this, name, age);
}

Teacher.prototype.teach = function(subject) {
    this.subject = subject;
    console.log(`${this.name} is now teaching ${this.subject}.`);
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

const t = new Teacher('Mihir Rego', 40);
t.printDetails();
t.teach('Physics');

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
 
//     printDetails() {
//         console.log(`This person is ${this.name} who is ${this.age} years old.`);
//     }
// }

// class Teacher extends Person {
//     constructor(name, age) {
//         super(name, age);
//     }

//     teach(subject) {
//         this.subject = subject;
//         console.log(`${this.name} is now teaching ${this.subject}.`);
//     }
// }

// const t = new Teacher('Mihir', 40);
// t.teach('Mathematics');
