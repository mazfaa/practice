const log = console.log;

class Queue {
  constructor() {
    this.collection = [];
  }

  print() {
    log(this.collection);
  }

  enqueue(item) {
    this.collection.push(item);
  }

  dequeue() {
    return this.collection.shift();
  }

  peek() {
    log(this.collection[0]);
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

const queue = new Queue();

queue.print();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print();

queue.dequeue();

queue.print();

queue.peek();