/*
memoize function will first sort the array descending order, and then calculate or retrieve sum.
this helps in reducing calculations for shuffled but same parameters, for eg. (100, 200, 300) or (200, 100, 300) or (300, 200, 100) 
*/
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        console.log('---------------------------------------------');
        console.log('original array =', args.toString());
        var sum = 0;
        args.sort((a, b) => a - b);
        const key = args.toString();
        console.log('key =', key);
        if(cache.has(key)) {
            sum = cache.get(key);
            console.log("found in cache, sum = ", sum);
            return sum;
        }

        sum = fn(...args);
        cache.set(key, sum);
        console.log("adding to cache, sum =", sum);
        return sum;
    }
}

function add(...args) {
    var sum = 0;
    for (let val in args) {
        sum += args[val];
    }  
    return sum;
}

function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}

const memAdd = memoize(add);

memAdd(100, 200, 300, 400);
memAdd(200, 300, 100, 400, 100);
memAdd(100, 200, 300, 400);
memAdd(100, 200, 300, 400);
memAdd(300, 200, 300, 400);
memAdd(300, 200, 300, 400);
memAdd(1, 2, 3, 4);
memAdd(4, 3, 2, 1);

