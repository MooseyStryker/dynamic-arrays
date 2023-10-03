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
    if (this.length === this.capacity) {

      let doubleCap = this.capacity * 2
      let newData = new Array(doubleCap)

      for (let i = 0; i < this.length; i++){
        newData[i] = this.data[i]
      }

      this.data = newData
      this.capacity = doubleCap
    }

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
    if (this.length === 0){
      return undefined;
    }
    let firstItem = this.data[0];
    for(let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.length--
    return firstItem
  }

  unshift(val) {
    if (this.length === this.capacity) {

      let doubleCap = this.capacity * 2
      let newData = new Array(doubleCap)

      for (let i = 0; i < this.length; i++){
        newData[i] = this.data[i]
      }

      this.data = newData
      this.capacity = doubleCap
    }
    
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = val
    this.length++

    return this.length
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++){
    if(this.data[i] === val) {
      return i;
     }
    }
    return -1
  }

  resize() {
      let doubleCap = this.capacity * 2
      let newData = new Array(doubleCap)

      for (let i = 0; i < this.length; i++){
        newData[i] = this.data[i]
      }

      this.data = newData
      this.capacity = doubleCap

  }
}


module.exports = DynamicArray;
