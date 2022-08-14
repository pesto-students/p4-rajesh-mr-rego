class Promise {
    constructor(handler) {
        this.status = 'pending';
        this.value = null;

        const resolve = value => {
            if(this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
            }
        };

        const reject = value => {
            if(this.status === 'pending') {
                this.status = 'rejected';
                this.value = value;
            }
        };

        try {
            handler(resolve, reject);
        } catch(err) {
            reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        if(this.status === 'fulfilled') {
            onFulfilled(this.value);
        } else if(this.status === 'rejected') {
            onRejected(this.value);
        }
    }
}