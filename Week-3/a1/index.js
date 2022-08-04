function add(...args) {
    console.log(args);
    var sum = 0;
    for (let val in args) {
        sum += args[val];
    }
    console.log('sum =', sum);    
    return sum;
}

add(100, 200, 300, 400);
add(400, 300, 200, 100);
