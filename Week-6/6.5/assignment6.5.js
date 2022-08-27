function checkDiff(arr, diff) {
    let num1, num2;

    arr.forEach(element => {
        arr.forEach(element1 => {
            // console.log(element-element1);
            let newDiff = element-element1;
            if(diff == newDiff) {
                num1 = element;
                num2 = element1;
            }
        });    
    });

    return [num1, num2];
}

const A    = [ 5, 10, 3, 2, 50, 80];
const diff = -40;

const result = checkDiff(A, diff);
console.log(`The numbers are [${result[0]}, ${result[1]}]`);
