class SLLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function createSLL(arr) {
    head = new SLLNode(arr[0]);
    let curr = head;

    for(let i=1 ; i<arr.length ; i++) {
        curr.next = new SLLNode(arr[i]);
        curr = curr.next;
    }

    return head;
}

function traverseSLL() {
    let curr = head;
    while(curr != null) {
        console.log(curr.value);
        curr = curr.next;
    }
}

let head = null;

head = createSLL([15, 3, 24, 12, 5]);
traverseSLL();
