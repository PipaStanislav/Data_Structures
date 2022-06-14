const SingleListNode = require('./single-list-node');

class DoubleListNode extends SingleListNode {
    constructor(value, prev = null, next = null) {
        super(value, next);
        this.prev = prev;
    }
}

module.exports = DoubleListNode;
