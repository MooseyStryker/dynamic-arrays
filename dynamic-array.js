class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize
    this.length = 0
    this.data = new Array(this.capacity)
  }

  read(index) {
    return this.data[index]
  }

  push(val) {
    this.data[this.length] = val
    this.length++
  }


  pop() {
    if(this.length === 0) {
      return undefined;
    }
    const lastItem = this.data[this.length - 1]
    this.length--
    // console.log("This one is the last item: ",lastItem)
    return lastItem
  }

  shift() {

  }

  unshift(val) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = val
    this.length++

    return this.length
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;
