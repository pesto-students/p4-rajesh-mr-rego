

function genFibo(loop) {
    
    let FiboIterator = {
        _i: 1,
        _loop: loop,
        _firstterm: 0,
        _secondterm: 0,
        _finalterm: 0,
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if(this._i++ <= this._loop) {
                this._finalterm = (this._firstterm + this._secondterm) || 1;
                this._firstterm = this._secondterm;
                this._secondterm = this._finalterm;
                return {value: this._firstterm, done: false}
            } else {
                return { done: true }
            }
        }
    }

    return FiboIterator;
}

let arr = [];
const newFibo = genFibo(30);
for(let el of newFibo) {
    arr.push(el);
}

console.log(arr);