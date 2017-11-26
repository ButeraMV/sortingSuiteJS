assert = require('chai').assert;
const insertionSort = require('../insertionSort')

describe("Insertion Sort", function(){
  it("can sort numbers", function(){
    assert.deepEqual(insertionSort([4, 3, 2, 1, 5]), [1, 2, 3, 4, 5])
  })

  it("can sort negative numbers", function(){
    assert.deepEqual(insertionSort([-4, -3, -2, -1, -5]), [-5, -4, -3, -2, -1])
  })

  it("can sort characters", function(){
    assert.deepEqual(insertionSort(["B", "C", "A", "E", "D"]), ["A", "B", "C", "D", "E"])
  })
})