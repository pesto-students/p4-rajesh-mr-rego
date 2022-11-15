class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function createTree(arr) {
    return insertIntoTree(0, arr);
}

function insertIntoTree(i, arr) {
    let curr = null;

    if(i < arr.length) {
        // console.log(arr[i]);
        curr = new TreeNode(arr[i]);
        curr.left  = insertIntoTree(2*i + 1, arr);
        curr.right = insertIntoTree(2*i + 2, arr);
    }

    return curr;
}

function inorder(root) {
    if(root != null) {
        inorder(root.left);
        if(root.value) process.stdout.write(root.value.toString() + " ");
        else           process.stdout.write("NULL ");
        inorder(root.right);
    }
}

function calculateDepth(root) {
    if(root == null) {
        return 0;
    }

    let leftDepth  = calculateDepth(root.left);
    let rightDepth = calculateDepth(root.right);

    if(leftDepth > rightDepth)
        return leftDepth + 1;
    else
        return rightDepth + 1;
}

let array1 = [1, null, 2];
// let array1 = [3,9,20,null,null,15,7];
let root1 = createTree(array1);
inorder(root1);
console.log('');

const depth = calculateDepth(root1);
console.log('depth of tree:', depth);
