export function* mergeSort(array) {
  function* merge(arr, l, m, r) {
    yield { type: 'range', l, r };
    let n1 = m - l + 1;
    let n2 = r - m;
    let L = new Array(n1);
    let R = new Array(n2);
    for (let i = 0; i < n1; i++) L[i] = arr[l + i];
    for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
      yield { type: 'compare', i: l + i, j: m + 1 + j };
      if (L[i] <= R[j]) {
        yield { type: 'overwrite', i: k, value: L[i] };
        arr[k] = L[i];
        i++;
      } else {
        yield { type: 'overwrite', i: k, value: R[j] };
        arr[k] = R[j];
        j++;
      }
      k++;
    }
    while (i < n1) {
      yield { type: 'overwrite', i: k, value: L[i] };
      arr[k] = L[i];
      i++;
      k++;
    }
    while (j < n2) {
      yield { type: 'overwrite', i: k, value: R[j] };
      arr[k] = R[j];
      j++;
      k++;
    }
    for (let x = l; x <= r; x++) {
      yield { type: 'markSorted', i: x };
    }
  }

  function* sort(arr, l, r) {
    if (l >= r) return;
    let m = l + Math.floor((r - l) / 2);
    yield* sort(arr, l, m);
    yield* sort(arr, m + 1, r);
    yield* merge(arr, l, m, r);
  }

  yield* sort(array, 0, array.length - 1);
}
