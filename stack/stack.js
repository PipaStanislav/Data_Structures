class Stack {
    constructor() {
        this.stack = [];
    }

    add(key) {
        this.stack.push(key);
        return this.stack;
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    bottom() {
        return this.stack[0];
    }

    clean() {
        return this.stack = [];
    }
    pop() {
        this.stack.pop()
        return this.stack;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    length() {
        return this.stack.length
    }
}

const stack = new Stack();

console.log(stack.add(1));
console.log(stack.add(2));
console.log(stack.add(3));
console.log(stack.add(4));
console.log(stack.add(5));
console.log(stack.top());
console.log(stack.bottom());
console.log(stack.pop());
console.log(stack.length());
console.log(stack.clean());
console.log(stack.isEmpty());

