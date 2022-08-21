'use strict';

class Promise {
    constructor(handler) {
        this.status = 'pending';
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = value => {
            if(this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
                this.onFulfilledCallbacks.forEach(fn => fn(value));
            }
        };

        const reject = value => {
            if(this.status === 'pending') {
                this.status = 'rejected';
                this.value = value;
                this.onRejectedCallbacks.forEach(fn => fn(value));
            }
        };

        try {
            handler(resolve, reject);
        } catch(err) {
            reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        if(this.status === 'pending') {
            this.onFulfilledCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }
        
        if(this.status === 'fulfilled') {
            onFulfilled(this.value);
        }
        
        if(this.status === 'rejected') {
            onRejected(this.value);
        }
    }

    catch(onRejected) {
        if(this.status === 'pending') {
            this.onRejectedCallbacks.push(onRejected);
        }
        
        if(this.status === 'rejected') {
            onRejected(this.value);
        }
    }
}

function getNumber() {
    return Math.floor(Math.random() * 10000) + 1;
}

const p1 = new Promise((resolve, reject) => {
    let rand = getNumber();
    console.log('random val =', rand);
    
    if(rand % 5 != 0) resolve('Resolved: not divisible by 5');
    else              reject('Rejected: divisible by 5');
});
p1.then(console.log, (err) => {console.log(err)});

