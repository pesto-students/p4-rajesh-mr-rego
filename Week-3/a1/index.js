function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        var sum = 0;
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
memAdd(100, 200, 300, 400);
memAdd(100, 200, 300, 400);
memAdd(100, 200, 300, 400);
memAdd(300, 200, 300, 400);
memAdd(300, 200, 300, 400);
