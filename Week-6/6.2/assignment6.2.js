const DIR_R = 0;
const DIR_D = 1;
const DIR_L = 2;
const DIR_U = 3;

function spiralIt(arr) {
    let newArr = [];

    const total_elements = arr.length * arr[0].length;

    let dir = DIR_R;    

    let start = 0;
    let end = arr[0].length;
    // console.log(total_elements, dir, start, end);

    let el = 0;
    while(el < total_elements) {


        el++;
    }

    return newArr;
}

const input = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9]];
// console.log(input);
console.log(spiralIt(input));

