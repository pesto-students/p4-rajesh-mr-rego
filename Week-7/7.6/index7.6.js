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
    if(stack1.length === 0) console.log('Queue is empty!');
    else {
        // move all elements from s1 to s2
        while(stack1.length > 0) stack2.push(stack1.pop());

        let deq = stack2.pop();
        console.log('popped element:', deq);

        // move all elements from s2 back to s1
        while(stack2.length > 0) stack1.push(stack2.pop());

        printQueue();
    }
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
dequeue();
dequeue();
enqueue('d');
dequeue();
enqueue('e');
dequeue();

