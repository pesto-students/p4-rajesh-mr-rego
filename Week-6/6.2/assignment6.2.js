// constants for cursor traversal, we always start with Direction R
const DIR_R = 'r';
const DIR_D = 'd';
const DIR_L = 'l';
const DIR_U = 'u';

function spiralIt(arr) {
    // initialise new array for spiral element addition
    let newArr = [];

    const total_elements = arr.length * arr[0].length;

    let dir = DIR_R;    

    // initialise first limits
    let rowStart = 0;
    let rowEnd   = arr.length - 1;
    let row = rowStart;

    let colStart = 0;
    let colEnd   = arr[0].length - 1;
    let col = colStart;

    // I tried with a while loop, but was getting undefined errors so just used a 'for'
    for(let el=0 ; el<total_elements ; el++) {
        let val = arr[row][col];
        if(val !== undefined) newArr.push(val);

        switch(dir.toLowerCase()) {
            // columns are traversed left to right, and when end is reached, row start is updated for down movement
            case DIR_R:
                if(col < colEnd) {
                    col++;
                } else {
                    dir = DIR_D;
                    
                    rowStart++;
                    row = rowStart;
                }
            break;
            
            // columns are traversed up to down, and when end is reached, column start is updated for left movement
            case DIR_D:
                if(row < rowEnd) {
                    row++;
                } else {
                    dir = DIR_L;

                    colEnd--;
                    col = colEnd;
                }
            break;
            
            // columns are traversed right to left, and when end is reached, row start is updated for up movement
            case DIR_L:
                if(col > colStart) {
                    col--;
                } else {
                    dir = DIR_U;
                    
                    rowEnd--;
                    row = rowEnd
                }
            break;
            
            // columns are traversed down to up, and when end is reached, row start is updated for right movement
            case DIR_U:
                if(row > rowStart) {
                    row--;
                } else {
                    dir = DIR_R;
                    
                    colStart++;
                    col = colStart;
                }
            break;
        }
    }

    return newArr;
}

const input3x3 = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9]
];

const input4x4 = [
    [ 1,  2,  3,  4],
    [ 5,  6,  7,  8],
    [ 9, 10, 11, 12],
    [13, 14, 15, 16]
];

const input5x5 = [
    [  1,   2,   3,  4,   5],
    [  6,   7,   8,  9,  10],
    [ 11,  12,  13,  14, 15],
    [ 16,  17,  18,  19, 20],
    [ 21,  22,  23,  24, 25],
];

const input2x5 = [
    [  1,  2,  3,  4,  5],
    [  6,  7,  8,  9, 10]
];

const input5x2 = [
    [  1,  2],
    [  3,  4],
    [  5,  6],
    [  7,  8],
    [  9, 10],
];

const input1x5 = [
    [1],
    [2],
    [3],
    [4],
    [5]
];


const arr = spiralIt(input1x5);
console.log(arr);
