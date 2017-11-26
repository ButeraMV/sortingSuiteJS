function bubbleSort(array){
  var swap = true;
  while(swap) {
    swap = false;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        var toSwap = array[i];
        array[i] = array[i + 1];
        array[i + 1] = toSwap;
        swap = true;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;