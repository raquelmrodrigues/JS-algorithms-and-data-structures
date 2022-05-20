class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    //insere um valor no final
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //retina um valor do final
    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    //insere um valor no inicio
    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }

    //retira um valor do inicio
    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //retorna um valor
    get(index) {
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    //atualiza o conteudo de um node
    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    //insere um novo node em uma determinada posição
    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index == this.length) {
            this.push(val);
            return true
        } 
        if(index == 0) {
            this.unshift(val);
            return true;
        } 
        var newNode = newNode(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.Node = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    //remove de uma posição especifica
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index == 0) return this.shift();
        if(index == this.length - 1) return this.pop();
        var previousNode = this.get(index -1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    //inverte a lista
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        var prev = null;
        var next;
        for(var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

}