export function* radixSort(array) {
  let n = array.length;
  if (n === 0) return;
  
  let max = array[0];
  for (let i = 1; i < n; i++) {
    yield { type: 'compare', i, j: 0 }; // Just highlighting
    if (array[i] > max) max = array[i];
  }

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    yield { type: 'range', l: 0, r: n - 1 };
    
    let output = new Array(n).fill(0);
    let count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
      yield { type: 'pivot', i };
      count[Math.floor(array[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
      yield { type: 'pivot', i };
      let digit = Math.floor(array[i] / exp) % 10;
      output[count[digit] - 1] = array[i];
      count[digit]--;
    }

    for (let i = 0; i < n; i++) {
      yield { type: 'overwrite', i, value: output[i] };
      array[i] = output[i];
    }
  }

  for (let i = 0; i < n; i++) {
    yield { type: 'markSorted', i };
  }
}
