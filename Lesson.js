// class Stack {
//   constructor() {
//     this.arr = [];
//   }
//   push(value){
//     this.arr.push(value);
//   }
//   pop(){
//     return this.arr.pop()
//   }
//   peek(){
//     return this.arr[this.arr.length-1]
//   }
//   isEmpty(){
//     return this.arr[this.arrlength === 0]
//     // return !this.arr.length
//   }
// }

class Q {
  constructor() {
    this.arr = [];
  }
  enqueue(value) {
    this.arr.push(value);
    // this.arr.unshift(value)
  }

  dq(value) {
    return this.arr.shift(value);
    // return this.arr.pop()
  }

  peek() {
    return this.arr[0];
    // return this.arr[this.arr.length-1]
  }

  isEmpty() {
    return !this.arr.length
  }
}
