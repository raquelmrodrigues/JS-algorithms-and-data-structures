class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkdeList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //adiciona node no final da lista
    push(val) {
        var newNode = new Node(val);
        if(this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //remove node do final da lista
    pop() {
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length == 1) {
            this.head = nul;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    //remove node do inicio da lista
    shift() {
        if(this.length == 0) return undefined;
        var oldHead = this.head;
        if(this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    //adicionar node no inicio da lista
    unshift(val) {
        var newNode = new Node(val);
        if(this.length == 0) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //retorna o valor de um determinado indice
    get(index) {
        if(index < 0 || index > this.length) return null;
        if(index <= this.length/2) {
            var count = 0;
            var current = this.head;
            while(count != index) {
                current = current.next;
                count ++;
            }
        } else {
            var count = this.length -1;
            var current = this.tail;
            while(count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    //atualiza o valor de um determinado node
    set(index, val) {
        var foudNode = this.get(index);
        if(foudNode != null) {
            foudNode.val = val;
            return true;
        } 
        return false;
    }

    //insere um valor no meio da lista
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index == 0) return this.unshift(val);
        if(index == this.length) return this.push(val);
        
        var newNode = new Node(val);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false;
        if(index == 0) return this.shift;
        if(index == this.length - 1) return this.pop();
        var removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

