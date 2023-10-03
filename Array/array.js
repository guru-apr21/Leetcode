// This class mimics the functionality of a native javascript array
// It uses a javascript object as a key-value store to hold the array elements,
// and an instance variable to keep track of the array's length

class MyArray {
  constructor() {
    this.length = 0; // Initialize length to zero
    this.data = {}; // Initialize data as an empty object
  }

  // Appends an item to the end of the array, increments the length, returns the updated length
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  //Retrieves the element at the given index, returns undefined if the index is out of bounds
  get(index) {
    return this.data[index];
  }

  //Removes the last element from the array and returns it, returns undefined if the array is empty
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}

const arr = new MyArray();
arr.push(1);
arr.pop();
console.log(arr.get(0));
