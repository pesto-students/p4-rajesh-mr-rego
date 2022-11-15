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
        curr = new TreeNode(arr[i]);
        curr.left  = insertIntoTree(2*i + 1, arr);
        curr.right = insertIntoTree(2*i + 2, arr);
    }

    return curr;
}

function inorder(root) {
    if(root != null) {
        inorder(root.left);
        
        if(root.value) {
            process.stdout.write(root.value.toString() + " ");
        }
        else {
            process.stdout.write("null ");
        }

        inorder(root.right);
    }
}

function checkBST(root) {
    if(root != null) {
        checkBST(root.left);
        
        if(root.value) {
            // process.stdout.write(root.value.toString() + " ");
            if(root.left && root.left.value && root.left.value >= root.value) return false; 
            if(root.right && root.right.value && root.right.value <= root.value) return false; 
        }
        else {
            // process.stdout.write("null ");
        }

        checkBST(root.right);
    }

    return true;
}

console.log("TREES --------------------------");
const array1 = [5,1,4,null,null,3,6];
// const array1 = [2,1,3];
// const array1 = [3,9,20,null,null,15,7];
let root1 = createTree(array1);
inorder(root1);
console.log();
const isBST = checkBST(root1);
if(isBST) console.log("Tree is a BST.");
else      console.log("Tree is not a BST.");

