function createStack() {
    var items = [];

    return {
        print: function() {
            console.log(items);
        },

        push: function(item) {
            items.push(item);
            this.print();
        },

        pop: function() {
            items.pop();
            this.print();
        }
    }
}

console.log('STACK 1 -------------------------------');
const stack1 = createStack();
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.pop();

console.log('tryin to alter stack1 directly');
stack1.items = [1, 2, 3];
stack1.print();

console.log('  ');
console.log('STACK 2 -------------------------------');
const stack2 = createStack();
stack2.push('hi');
stack2.push('pesto');
stack2.push('tech');
stack2.pop();

console.log('tryin to alter stack2 directly');
stack2.print();


