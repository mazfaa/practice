const log = console.log;

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);

    let current = this.head, previous, counter = 0;

    while (counter < index) {
      previous = current;
      current = current.next;
      counter++;
    }

    previous.next = node;
    node.next = current;

    this.size++;
  }

  // Insert last node
  insertLast(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  getAt(index) {
    let current = this.head;
    let counter = 0;

    while (current) {
      if (counter === index) {
        return current.data;
      }

      current = current.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (index > this.size) {
      return;
    }

    let current = this.head,
        previous,
        counter = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (counter < index) {
        previous = current;
        current = current.next;
        counter++;
      }
  
      previous.next = current.next;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertLast(300);
linkedList.insertAt(400, 2);
linkedList.insertAt(500, 0);

// log(linkedList);

// linkedList.removeAt(1);
// linkedList.printListData();

const getData = linkedList.getAt(0);

// (getData == null ? log(`${getData} : Data not found.`): log(getData));

linkedList.clearList();

linkedList.printListData();