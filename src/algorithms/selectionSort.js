export function* selectionSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    yield { type: 'pivot', i: minIdx }; // use pivot color for current min
    for (let j = i + 1; j < n; j++) {
      yield { type: 'compare', i: j, j: minIdx };
      if (array[j] < array[minIdx]) {
        minIdx = j;
        yield { type: 'pivot', i: minIdx };
      }
    }
    if (minIdx !== i) {
      yield { type: 'swap', i, j: minIdx };
      let temp = array[i];
      array[i] = array[minIdx];
      array[minIdx] = temp;
    }
    yield { type: 'markSorted', i };
  }
  yield { type: 'markSorted', i: n - 1 };
}
