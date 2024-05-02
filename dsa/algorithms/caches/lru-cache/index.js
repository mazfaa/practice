// LRU Cache Algorithm (Least Recently Used Algorithm)

// LRU Cache implementation using queue and hashing
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.dequeue = [];
    this.map = new Map();
  }

  refer(x) {
    if (!this.map.has(x)) {
      if (this.dequeue.length === this.capacity) {
        const last = this.dequeue[this.dequeue.length - 1];
        this.dequeue.pop();
        this.map.delete(last);
      }
    } else {
      this.dequeue.splice(this.dequeue.indexOf(x), 1);
    }

    this.dequeue.unshift(x);
    this.map.set(x, 0);
  }

  display() {
    console.log(this.dequeue);
  }
}

const cache = new LRUCache(3);
cache.refer(1);
cache.refer(2);
cache.refer(3);

cache.display();

cache.refer(1);

cache.display();

cache.refer(4);

cache.display();