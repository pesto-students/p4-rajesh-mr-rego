let stack1 = [];
let stack2 = [];

// adding an element to queue
function enqueue(elem) {
    // while(stack2.length > 0) {
    //     let el = stack2.pop();
    //     stack1.push(el);
    // }

    stack1.push(elem);
    printQueue();
}

// remove first element from the queue
function dequeue() {
    if(stack1.length === 0) console.log('Queue is empty!');
    else {
        // move all elements from s1 to s2
        // console.log('hello stack1:', stack1);
        while(stack1.length > 0) stack2.push(stack1.pop());

        // console.log('hello stack2:', stack2);
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


// process the set of incoming instructions as per the array arr passed
function processInput(arr) {
    console.log('PROCESSING INPUT: ', arr);

    stack1 = [];
    stack2 = [];

    while(arr.length > 0) {
        let order = arr.shift();
        // console.log('order:', order);

        if(order === 1) {
            let elem = arr.shift();
            // console.log('enqueue:', elem);
            enqueue(elem);
        } else if(order === 2) {
            // console.log('dequeue');
            dequeue();
        }
    }

    console.log('PROCESSING COMPLETE!');
}


const instructionSet1 = [1, 2, 1, 3, 2, 1, 4, 2];
const instructionSet2 = [1, 2, 2, 2, 1, 4];

processInput(instructionSet1);
console.log('---------------------------');
processInput(instructionSet2);
console.log('---------------------------');

// enqueue('a');
// enqueue('b');
// enqueue('c');
// dequeue();
// dequeue();
// enqueue('d');
// dequeue();
// enqueue('e');
// dequeue();

