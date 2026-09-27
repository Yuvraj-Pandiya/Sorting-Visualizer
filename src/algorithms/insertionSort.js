export function* insertionSort(array) {
  let n = array.length;
  yield { type: 'markSorted', i: 0 };
  for (let i = 1; i < n; i++) {
    let key = array[i];
    yield { type: 'pivot', i };
    let j = i - 1;
    while (j >= 0) {
      yield { type: 'compare', i: j, j: j + 1 };
      if (array[j] > key) {
        yield { type: 'overwrite', i: j + 1, value: array[j] };
        array[j + 1] = array[j];
        j = j - 1;
      } else {
        break;
      }
    }
    yield { type: 'overwrite', i: j + 1, value: key };
    array[j + 1] = key;
    
    // Everything up to i is now sorted
    for (let k = 0; k <= i; k++) {
      yield { type: 'markSorted', i: k };
    }
  }
}
