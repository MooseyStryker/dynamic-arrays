class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
  }

  read(index) {

    // Your code here
  }

  push(val) {

    // Your code here
  }


  pop() {

    // Your code here
  }

  shift(val) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = val
    this.length++

    return this.length
  }

  unshift(val) {

    // Your code here
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;
