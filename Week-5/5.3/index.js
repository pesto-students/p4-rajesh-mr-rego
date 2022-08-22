function hasDuplicate(arr) {
    const mySet = new Set();

    for(let el of arr) {
        // console.log(el);
        if(mySet.has(el)) {
            return true;
        } else {
            mySet.add(el);
        }
    }

    return false;
}


const array = [1, 2, 1, 'h', 5, 1, 7];
console.log(array);
if(hasDuplicate(array)) {
    console.log('Yes, there are duplicates.')
} else {
    console.log('Nope, no suplicates found.')
}
