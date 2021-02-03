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

  insert(index, value) {
    if (Number(index) === NaN) throw new Error("index must be Number");
    if (index === 0) {
      return this.prepend(value);
    }

    const leader = this._traversalToIndex(index - 1);

    const follower = leader.next;

    const newNode = new NewNode(value);

    newNode.next = follower;

    leader.next = newNode;
  }

  _traversalToIndex(index) {
    let targetNode = this.head;
    for (let currentIndex = 0; currentIndex < index; currentIndex++) {
      targetNode = targetNode.next;
    }
    return targetNode;
  }

  printLink() {
    const arr = [];
    let currentNode = this.head;
    arr.push(currentNode.value);
    while (!!currentNode.next) {
      currentNode = currentNode.next;
      arr.push(currentNode.value);
    }
    return arr;
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

test.insert(2, 88);

console.log(test.printLink());
