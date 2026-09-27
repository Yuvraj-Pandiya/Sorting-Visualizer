export function* countSort(array) {
  let n = array.length;
  if (n === 0) return;
  
  let max = array[0];
  let min = array[0];
  
  for (let i = 1; i < n; i++) {
    yield { type: 'compare', i, j: 0 };
    if (array[i] > max) max = array[i];
    if (array[i] < min) min = array[i];
  }

  let range = max - min + 1;
  let count = new Array(range).fill(0);
  let output = new Array(n).fill(0);

  yield { type: 'range', l: 0, r: n - 1 };

  for (let i = 0; i < n; i++) {
    yield { type: 'pivot', i };
    count[array[i] - min]++;
  }

  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    yield { type: 'pivot', i };
    output[count[array[i] - min] - 1] = array[i];
    count[array[i] - min]--;
  }

  for (let i = 0; i < n; i++) {
    yield { type: 'overwrite', i, value: output[i] };
    array[i] = output[i];
  }

  for (let i = 0; i < n; i++) {
    yield { type: 'markSorted', i };
  }
}
