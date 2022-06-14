const ListNode = require('./list-node');

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getLast() {
        return this.tail;
    }

    getFirst() {
        return this.head;
    }

    getListLength() {
        return this.length;
    }

    createNode(key) {
        return new ListNode(key)
    }

    addNode(key, isTail = false) {
        const node = this.createNode(key);

        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
            this.length++;
            return this.head;
        }

        if (isTail) {
            this.tail.next = node;
            this.tail = node
        } else {
            node.next = this.head;
            this.head = node;
        }


        this.length++;
        return this.head;
    }

    addLast(key) {
        return this.addNode(key, true);
    }

    addFirst(key) {
        return this.addNode(key);
    }

    cleanList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this.head;
    }

    removeLast() {
        if (!this.head) {
            return this.head;
        }

        if (this.head === this.tail) {
            return this.cleanList();
        }

        let node = this.head;

        while (node.next !== this.tail) {
            node = node.next;
        }

        node.next = null;
        this.tail = node;
        this.length--;

        return this.head;
    }

    removeFirst() {
        if (!this.head) {
            return this.head;
        }

        if (this.head === this.tail) {
            return this.cleanList();
        }

        this.head = this.head.next;
        this.length--;
        return this.head;
    }

    removeN(key) {
        let node = this.head;

        if (node.value === key) {
            this.removeFirst();
        }

        while (node !== null && node.next !== null && node.next.value !== key) {
            node = node.next;
        }

        if (node.next === null) {
            return this.head;
        }

        node.next = node.next.next;
        this.length--;
        return this.head;
    }

    find(key) {
        let node = this.head;

        while (node !== null && node.value !== key) {
            node = node.next;
        }

        return node;
    }

    isEmpty() {
        return this.head === null;
    }

    insert(key, index) {
        let node = this.head;
        const newNode = new ListNode(key);

        for (let i = 1; i < index; i++) {
            node = node.next;
        }
        newNode.next = node.next;
        node.next = newNode;

        return this.head;
    }
}

const singleLinkedList = new SingleLinkedList();

console.log(singleLinkedList.addLast(2));
console.log(singleLinkedList.addLast(3));
console.log(singleLinkedList.addLast(4));
console.log(singleLinkedList.addFirst(1));
console.log(singleLinkedList.getFirst());
console.log(singleLinkedList.getLast());
console.log(singleLinkedList.removeLast());
console.log(singleLinkedList.removeFirst());
console.log(singleLinkedList.find(5));
console.log(singleLinkedList.removeN(5));
console.log(singleLinkedList.isEmpty());
console.log(singleLinkedList.getListLength());
console.log(singleLinkedList.insert(6, 2));
