// create stack

var Stack = function () {
  this.count = 0; //keeps track of items in the stack
  this.storage = {}; //empty object

  // Adds the value to the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value; //At index this.count -> add the value
    this.count++; //increase the count--shows one more item in the stack
  };

  // Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined; //nothing in the stack, return undefined
    }

    this.count--; //update the counter. decrease the counter by 1
    var result = this.storage[this.count]; // store the last stack value
    delete this.storage[this.count]; //delete the last stack value
    return result; //return stored last value
  };

  //   for Stack size, length of the stack
  this.size = function () {
    return this.count;
  };

  //   Returns the value at the end of the stack, peek
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.pop()); //2

console.log("peek -", myStack.peek());
console.log("size - ", myStack.size());
