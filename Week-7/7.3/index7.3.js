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

let array1 = [1,3,5,7,9];
let head1 = createSLL(array1);
traverseSLL(head1);
