class TreeNode {
    constructor(value) {
        this.value = value;
        this.left  = null;
        this.right = null;
    }
}

function insertIntoTree(i, arr) {
    let curr = null;

    if(i < arr.length) {
        curr = new TreeNode(arr[i]);
        curr.left  = insertIntoTree(2*i + 1, arr);
        curr.right = insertIntoTree(2*i + 2, arr);
    }

    return curr;
}

function createTree(arr) {
    return insertIntoTree(0, arr);
}

function levelorder(root) {
    let queue = [];
    queue.push(root);

    while(queue.length !== 0) {
        let node = queue.shift();
        if(node && node.value) process.stdout.write(node.value.toString() + ' ');
        else                   process.stdout.write('-null- ');

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
}

console.log("TREES --------------------------");
const array1 = [3,9,20,null,null,15,7];
// const array1 = [1];
let root1 = createTree(array1);
levelorder(root1);
console.log();
