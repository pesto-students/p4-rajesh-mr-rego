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
    let arr = [];

    let curr = head;
    while(curr != null) {
        arr.push(curr.value);
        curr = curr.next;
    }

    console.log("SLL: ", arr);
}

function reverseSLL(head) {
    let curr = head;
    let newarr = [];
    while(curr != null) {
        newarr.push(curr.value);
        curr = curr.next;
    }

    newarr.reverse();
    return createSLL(newarr);
}

let head1 = createSLL([15, 3, 24, 12, 5]);
traverseSLL(head1);
head1 = reverseSLL(head1);
traverseSLL(head1);
