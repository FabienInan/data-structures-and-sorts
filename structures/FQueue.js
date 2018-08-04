class FQueue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    add(value) {
        let current = this.last;
        this.last = new FQueueNode(value);
        if(this.first === null) {
            this.first = this.last;
        } else {
            current.next = this.last;
        }
    }
    remove() {
       if(this.first === null) {
           return null;
       } 
       let value = this.first.value;
       this.first = this.first.next;
       if(this.first === null) {
           this.last = null;
       }
       return value;
    }
    peek() {
        if(this.first === null) {
            return null;
        }
        return this.first.value;
    }
    isEmpty() {
        return this.first === null;
    }
}

class FQueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
