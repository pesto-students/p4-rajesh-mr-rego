function threesum(arr, sum) {
    let arr1 = arr.slice();
    for(let l1=0 ; l1 < arr1.length ; l1++) {
        // console.log('-----------------------');
        let arr2 = arr1.slice();
        arr2.splice(l1, 1);
        // console.log('arr2', arr2);

        for(let l2=0 ; l2<arr2.length ; l2++) {
            let arr3 = arr2.slice();
            arr3.splice(l2, 1);
            // console.log('arr3', arr3);

            for(let l3=0 ; l3<arr3.length ; l3++) {
                let tempSum = arr1[l1] + arr2[l2] + arr3[l3];
                if(tempSum == sum) return [arr1[l1], arr2[l2], arr3[l3]];
            }
        }
    }

    return 'not found';
}

const input = [3, 3, 9, 0, 7, 7, 11];
const sumToFind = 20;

const values = threesum(input, sumToFind);
console.log('answer:', values);
