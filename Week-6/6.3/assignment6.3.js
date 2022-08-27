function sort012(arr) {
    let arr0 = [], arr1 = [], arr2 = [];

    arr.forEach(element => {
        if(element == 0) {
            // console.log('zero');
            arr0.push(0);
        } else if(element == 1) {
            // console.log('one');
            arr1.push(1);
        } else if(element == 2) {
            // console.log('two');
            arr2.push(2);
        }
    });

    return arr0.concat(arr1, arr2);
}

let input = [0, 2, 0, 1, 0, 2, 0, 0];
input = sort012(input);
console.log(input);
