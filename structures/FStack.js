class FStack {
    constructor(){
        this.top = null;
    }
    pop() {
        if(this.top !== null) {
            this.top = this.top.next;
        }
    }
    push(value) {
        let stackNode = new FStackNode(value);
        stackNode.next = this.top;
        this.top = stackNode;
    }
    peek() {
        return this.top !== null ? this.top.value : null;
    }
    isEmpty() {
        return this.top === null;
    }
}

class FStackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}