class SLLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function createSLL(arr) {
    let head = new SLLNode(arr[0]);
    let curr = head;
    for(let i=1 ; i<arr.length ; i++) {
        curr.next = new SLLNode(arr[i]);
        curr = curr.next;
    }
    return head;
}

function traverseSLL(head) {
    let curr = head;
    let arrSLL = [];
    while(curr !== null) {
        arrSLL.push(curr.value);
        curr = curr.next;
    }
    console.log('traverse SLL:', arrSLL);
}

function createLoop(head, k) {
    let pivot = head;

    while(k--) {
        pivot = pivot.next;

        if(pivot === null) pivot = head;
    }

    let tail = pivot;
    while(tail.next !== null) {
        tail = tail.next;
    }

    tail.next = pivot;

    return head;
}

function traverseLoop(head) {
    let k= 10;
    let curr = head;
    let arrSLL = [];
    while(k-- && curr) {
        arrSLL.push(curr.value);
        curr = curr.next;
    }

    console.log('looped SLL:', arrSLL);
}

function detectLoopInSLL(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            slow = head;

            while(slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }

            return slow;
        }
    }

    return null;
}

let array1 = [1,3,5,7,9];
let head1 = createSLL(array1);
traverseSLL(head1);
const resp1 = detectLoopInSLL(head1);
console.log('loop response:', resp1);

createLoop(head1, 2);
traverseLoop(head1);

const resp2 = detectLoopInSLL(head1);
console.log('loop response:', resp2);
