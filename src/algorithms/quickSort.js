export function* quickSort(array) {
  function* partition(arr, low, high) {
    let pivot = arr[high];
    yield { type: 'pivot', i: high };
    yield { type: 'range', l: low, r: high };
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
      yield { type: 'compare', i: j, j: high };
      if (arr[j] < pivot) {
        i++;
        yield { type: 'swap', i, j };
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    yield { type: 'swap', i: i + 1, j: high };
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
  }

  function* sort(arr, low, high) {
    if (low < high) {
      let pi = yield* partition(arr, low, high);
      yield { type: 'markSorted', i: pi };
      yield* sort(arr, low, pi - 1);
      yield* sort(arr, pi + 1, high);
    } else if (low === high) {
      yield { type: 'markSorted', i: low };
    }
  }

  yield* sort(array, 0, array.length - 1);
}
