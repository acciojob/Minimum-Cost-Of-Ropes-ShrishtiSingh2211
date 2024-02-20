function calculateMinCost() {
  //your code here
	let inputElement = document.querySelector('#rope-lengths');
	let inputValue = inputElement.value;
	let ropeLengths = inputValue.split(',').map(Number);
	class MinHeap {
    constructor() {
        this.heap = [];
    }
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    getLeftChildIndex(i) {
        return 2 * i + 1;
    }
    getRightChildIndex(i) {
        return 2 * i + 2;
    }
    hasParent(i) {
        return this.getParentIndex(i) >= 0;
    }
    hasLeftChild(i) {
        return this.getLeftChildIndex(i) < this.heap.length;
    }
    hasRightChild(i) {
        return this.getRightChildIndex(i) < this.heap.length;
    }
    parent(i) {
        return this.heap[this.getParentIndex(i)];
    }
    leftChild(i) {
        return this.heap[this.getLeftChildIndex(i)];
    }
    rightChild(i) {
        return this.heap[this.getRightChildIndex(i)];
    }
    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
    peek() {
        if (this.heap.length == 0) {
            throw "Heap is empty";
        } else {
            return this.heap[0];
        }
    }
    poll() {
        if (this.heap.length == 0) {
            throw "Heap is empty";
        } else {
            let item = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
            return item;
        }
    }
    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}  
}  