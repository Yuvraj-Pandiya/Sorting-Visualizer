export function* bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      yield { type: 'compare', i: j, j: j + 1 };
      if (array[j] > array[j + 1]) {
        yield { type: 'swap', i: j, j: j + 1 };
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    yield { type: 'markSorted', i: n - i - 1 };
    if (!swapped) break;
  }
  // Mark remaining as sorted
  for (let i = 0; i <= n - 1; i++) {
    yield { type: 'markSorted', i };
  }
}
