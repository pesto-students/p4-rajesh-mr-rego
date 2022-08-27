const DIR_R = 'r';
const DIR_D = 'd';
const DIR_L = 'l';
const DIR_U = 'u';

function spiralIt(arr) {
    console.log(arr);
    // console.log(arr[0][0]);

    let newArr = [];

    const total_elements = arr.length * arr[0].length;

    let dir = DIR_R;    

    let rowStart = 0;
    let rowEnd   = arr[0].length - 1;
    let row = rowStart;

    let colStart = 0;
    let colEnd   = arr.length - 1;
    let col = colStart;

    // console.log(total_elements, dir);

    for(let el=0 ; el<total_elements ; el++) {        
        let val = arr[row][col];
        console.log('--------------------------------')
        console.log('dir =', dir, 'val = ', val);
        console.log('rowStart =', rowStart, 'rowEnd = ', rowEnd, 'row =', row);
        console.log('colStart =', colStart, 'colEnd = ', colEnd, 'col =', col);

        if(val !== undefined) newArr.push(val);

        switch(dir.toLowerCase()) {
            case DIR_R:
                if(col < colEnd) {
                    col++;
                } else {
                    dir = DIR_D;
                    
                    rowStart++;
                    row = rowStart;
                }
            break;
            
            case DIR_D:
                if(row < rowEnd) {
                    row++;
                } else {
                    dir = DIR_L;

                    let temp = colStart;
                    colStart = colEnd - 1;
                    colEnd = temp;

                    col = colStart;
                }
            break;

            case DIR_L:
                if(col > colEnd) {
                    col--;
                } else {
                    dir = DIR_U;
                    
                    let temp = rowStart;
                    rowStart = rowEnd - 1;
                    rowEnd = temp;

                    row = rowStart;
                }
            break;

            case DIR_U:
                if(row > rowEnd) {
                    row--;
                } else {
                    dir = DIR_R;
                    
                    let temp = colStart;
                    colStart = colEnd + 1;
                    colEnd = temp;

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
]
// console.log(input);
// console.log('---------------------------------------------');
// spiralIt(input3x3);
spiralIt(input4x4);
// console.log(spiralIt(input4x4));

