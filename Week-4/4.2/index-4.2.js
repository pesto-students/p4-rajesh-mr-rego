class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
 
    printDetails() {
        console.log(`This person is ${this.name} who is ${this.age} years old`);
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age);
    }

    teach(subject) {
        this.subject = subject;
        console.log(`${this.name} is now teaching ${this.subject}`);
    }
}

const t = new Teacher('Mihir', 40);
t.teach('Mathematics');
