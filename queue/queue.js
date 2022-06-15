class Queue {
    constructor() {
        this.queue = [];
    }

    add(key) {
        this.queue.push(key);
        return this.queue;
    }

    top() {
        return this.queue[0];
    }

    bottom() {
        return this.queue[this.queue.length - 1];
    }

    clean() {
        return this.queue = [];
    }

    shift() {
        this.queue.shift()
        return this.queue;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    length() {
        return this.queue.length
    }
}

const queue = new Queue();

console.log(queue.add(1));
console.log(queue.add(2));
console.log(queue.add(3));
console.log(queue.add(4));
console.log(queue.add(5));
console.log(queue.top());
console.log(queue.bottom());
console.log(queue.shift());
console.log(queue.length());
console.log(queue.clean());
console.log(queue.isEmpty());

