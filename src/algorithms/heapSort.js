export function* heapSort(array) {
  let n = array.length;

  function* heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    yield { type: 'range', l: 0, r: n - 1 };

    if (l < n) {
      yield { type: 'compare', i: l, j: largest };
      if (arr[l] > arr[largest]) largest = l;
    }
    
    if (r < n) {
      yield { type: 'compare', i: r, j: largest };
      if (arr[r] > arr[largest]) largest = r;
    }

    if (largest !== i) {
      yield { type: 'swap', i, j: largest };
      let swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;
      yield* heapify(arr, n, largest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    yield* heapify(array, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    yield { type: 'swap', i: 0, j: i };
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    yield { type: 'markSorted', i };
    yield* heapify(array, i, 0);
  }
  yield { type: 'markSorted', i: 0 };
}
