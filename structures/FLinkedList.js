class FLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value) {
        let node = new FNode(value);
        if(!this.head) { // first element
            this.head = node;
            this.length++;
            return node;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }    
        currentNode.next = node;     
        this.length++; 
        return node;
    }

    get(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode;
            } 
            currentNode = currentNode.next;
        } 
        return null;
    }

    remove(value) {
        let currentNode = this.head;
        if(this.head.value === value) {
            head = this.head.next;
            return;
        }
        while(currentNode) {
            if(currentNode.next) {
                if(currentNode.next.value === value) {
                    currentNode.next = currentNode.next.next;
                    this.length --;
                    break;
                }
            }
            currentNode = currentNode.next;
        }
    }

    getSize() {
        return this.length;
    }
}

class FNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let linkedList = new FLinkedList();

linkedList.add("hello");
linkedList.add("world");
linkedList.add("!");

console.log(linkedList);