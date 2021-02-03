class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.length = 1;

    this.tail = this.head;
  }

  prepend(value) {
    const newNode = new NewNode(value);
    newNode.next = this.head;

    this.head = newNode;
    this.length++;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

const test = new LinkedList(10);

test.append(5);
test.append(15);

test.prepend(25);
test.prepend(30);

console.log(test);
console.log(test.head.next.next);
