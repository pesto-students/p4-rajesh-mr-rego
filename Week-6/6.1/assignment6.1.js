// returns the sum of the elements of an array.
function sumOfArray(arr) {
    return arr.reduce((partialSum, a) => partialSum + a, 0);
}

// this is used to maximum sum possible of a contiguous subarray of the passed array
function maxSumOfSubArray(arr) {
    let arrLen = arr.length;
    let maxSum = 0;

    // easy conditions if array length is less than or equal to 2
    if(arrLen <= 0) {
        maxSum = -1;
    } else if(arrLen == 1) {
        maxSum = arr[0];
    } else if(arrLen == 2) {
        maxSum = Math.max(arr[0], arr[1]);
    } else {
        // initiate the minimum and maximum possible subarray lengths
        let MinLen = 2;
        let MaxLen = arrLen - 1;

        let lennie = MinLen;
        while(lennie <= MaxLen) {
            for(let i=0 ; i<arrLen-lennie+1 ; i++) {
                let newArr = [];
                for (let el = i ; el<i+lennie ; el++) {
                    newArr.push(arr[el]);
                }

                maxSum = Math.max(maxSum, sumOfArray(newArr));
            }
            lennie++;
        }
    }
    return maxSum;
}

const input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const input2 = [1, 3, 10, 4, -1, 1, 8];
const input3 = [1, 2, 3, 4, -10];
const input4 = [100, 35];

console.log('Maximum possible sum of input1 =', maxSumOfSubArray(input1));
console.log('Maximum possible sum of input2 =', maxSumOfSubArray(input2));
console.log('Maximum possible sum of input3 =', maxSumOfSubArray(input3));
console.log('Maximum possible sum of input4 =', maxSumOfSubArray(input4));
