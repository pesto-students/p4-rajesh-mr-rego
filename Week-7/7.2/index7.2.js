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
    
}

let array1 = [2,4,6,8,10];
let head1 = createSLL(array1);

traverseSLL(head1);
