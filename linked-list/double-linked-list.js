const ListNode = require('./double-list-node');
console.log(ListNode)

class DoublyLinkedList {
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

    createNode(key, prev = null, next = null) {
        return new ListNode(key, prev, next);
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
            node.prev = this.tail;
            this.tail = node
        } else {
            this.head.prev = node;
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

        this.head.next.prev = null;
        this.head = this.head.next;
        this.length--;
        return this.head;
    }

    removeN(key) {
        if (!this.head) {
            return this.head;
        }

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
        newNode.prev = node;
        node.next = newNode;

        return this.head;
    }
}

const doubleLinkedList = new DoublyLinkedList();

console.log(doubleLinkedList.addLast(2));
console.log(doubleLinkedList.addLast(3));
console.log(doubleLinkedList.addLast(4));
console.log(doubleLinkedList.addFirst(1));
console.log(doubleLinkedList.getFirst());
console.log(doubleLinkedList.getLast());
console.log(doubleLinkedList.removeLast());
console.log(doubleLinkedList.removeFirst());
console.log(doubleLinkedList.find(5));
console.log(doubleLinkedList.removeN(5));
console.log(doubleLinkedList.isEmpty());
console.log(doubleLinkedList.getListLength());
console.log(doubleLinkedList.insert(6, 2));
