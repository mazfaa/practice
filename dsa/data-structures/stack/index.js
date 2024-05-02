const log = console.log;

class Stack {
  constructor() {
    this.items = [];
    this.lengthCounter = 0;
  }

  push(element) {
    this.items[this.lengthCounter] = element;
    log(`${element} stored at index ${this.lengthCounter}`);
    this.lengthCounter++;

    return this.lengthCounter - 1;
  }

  pop() {
    if (this.lengthCounter === 0) {
      return undefined;
    }

    const deletedItem = this.items[this.lengthCounter - 1];
    this.lengthCounter--;

    log(`${deletedItem} removed.`);

    return deletedItem;
  }

  peek() {
    log(`The top element is ${this.items[this.lengthCounter - 1]}`);
    return this.items[this.lengthCounter - 1];
  }

  isEmpty() {
    log(this.lengthCounter === 0);
    return this.lengthCounter === 0;
  }

  size() {
    log(this.lengthCounter);
    return this.lengthCounter;
  }

  print() {
    if (this.lengthCounter == 0) {
      return [];
      // return this.items;
    }

    let str = '';

    for (let i = 0; i < this.lengthCounter; i++) {
      str += this.items[i] + '\n';
    }

    return str;
  }

  clear() {
    this.items = [];
    this.lengthCounter = 0;
    
    return this.items;
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

log(stack.print());

// stack.pop();

// stack.peek();

// stack.isEmpty();

// stack.size();

stack.clear();

log(stack.print());