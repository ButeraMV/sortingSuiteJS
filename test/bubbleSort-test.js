assert = require('chai').assert;
const bubbleSort = require('../bubbleSort')

describe("Bubble Sort", function(){
  it("can sort numbers", function(){
    assert.deepEqual(bubbleSort([4, 3, 2, 1, 5]), [1, 2, 3, 4, 5])
  })

  it("can sort negative numbers", function(){
    assert.deepEqual(bubbleSort([-4, -3, -2, -1, -5]), [-5, -4, -3, -2, -1])
  })

  it("can sort characters", function(){
    assert.deepEqual(bubbleSort(["B", "C", "A", "E", "D"]), ["A", "B", "C", "D", "E"])
  })
})