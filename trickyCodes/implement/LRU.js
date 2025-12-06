// Implement LRU (Least Recently Used) Cache

//FORMAT
/* 

class LRU {
    constructor(capacity){

    }

    get(key){

    }

    put(key, value){
    
    }
}

// Example Usage:

const cache = new LRU(2);
cache.put(1, 10);
cache.put(2, 20);

console.log(cache.get(1)); // 10

cache.put(3, 30);

console.log(cache.get(2)); // -1

*/















class Node {
    constructor(key, value) {
        this.key = key;
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}
class LRU {
    /**
     * @param {number} capacity The maximum number of items the cache can hold.
     */
    constructor(cap) {
        this.capacity = Number(cap);

        this.cache = new Map();

        this.head = new Node(0, 0); // Sentinel node
        this.tail = new Node(0, 0); // Sentinel node

        this.head.next = this.tail;
        this.tail.prev = this.head;

    }

    #addNode(node) {
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;
    }
    #removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    #moveToHead(node) {
        this.#removeNode(node);
        this.#addNode(node);
    }
    #popTail() {
        let prev = this.tail.prev;

        this.tail.prev = prev.prev;

        prev.next = null;
        prev.prev = null;

        return prev.key;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        this.#moveToHead(this.cache.get(key));
        return this.cache.get(key).data;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            let node = this.cache.get(key);

            node.data = value;

            this.#moveToHead(node);
        }
        else {
            let node = new Node(key, value);

            this.#addNode(node);
            this.cache.set(key, node);

            if (this.cache.size > this.capacity) {
                const lruNode = this.#popTail();
                this.cache.delete(lruNode);
            }
        }
    }
}

const cache = new LRU(2);
cache.put(1, 10);
cache.put(2, 20);

console.log(cache.get(1)); // 10
console.log(cache.get(3)); // -1

cache.put(3, 30);

console.log(cache.get(2)); // -1