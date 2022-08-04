function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }

    return[increment,log];
}

var [increment,log] = createIncrement();
increment();
increment();
increment();

log();

// What is logged?
/*
Mihir
0 will always be logged, as the var message was created ony once when count was zero.
'message' has not been updated at any point.
*/