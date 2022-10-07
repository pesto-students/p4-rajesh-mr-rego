let stack1 = [];
let stack2 = [];

// adding an element to queue
function enqueue(elem) {
    while(stack2.length > 0) {
        let el = stack2.pop();
        stack1.push(el);
    }

    stack1.push(elem);
    printQueue();
}

// remove first element from the queue
function dequeue() {

}

// print current queue
function printQueue() {
    let queue = '';
    stack1.forEach((elem) => queue += ' -> ' + elem);
    console.log('current queue:', queue);
}

enqueue('a');
enqueue('b');
enqueue('c');
