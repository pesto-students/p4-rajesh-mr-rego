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

    console.log(arrSLL);
}

function rotateSLL(head, k) {
    let lenSLL = 1;
    let tail = head;

    while(tail.next !== null) {
        tail = tail.next;
        lenSLL++;
    }

    console.log('length SLL:', lenSLL);
    
    k %= lenSLL;
    if(k === 0) return head;

    tail.next = head;

    while(k--) {
        tail = tail.next;
    }

    head = tail.next;
    tail.next = null;
    return head;
}

let array1 = [2,4,6,8,10];
let head1 = createSLL(array1);

traverseSLL(head1);
head1 = rotateSLL(head1, 4);
traverseSLL(head1);
