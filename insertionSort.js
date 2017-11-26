function insertionSort(array){
  for(var i = 0; i < array.length; i++) {
    var toSort = array[i];
    var j = i - 1
    while (j >= 0 && array[j] > toSort) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = toSort;
  }
  return array;
}

module.exports = insertionSort;