export function* shellSort(array) {
  let n = array.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    yield { type: 'range', l: 0, r: n - 1 };
    for (let i = gap; i < n; i += 1) {
      let temp = array[i];
      let j;
      yield { type: 'pivot', i };
      for (j = i; j >= gap; j -= gap) {
        yield { type: 'compare', i: j - gap, j: i };
        if (array[j - gap] > temp) {
          yield { type: 'overwrite', i: j, value: array[j - gap] };
          array[j] = array[j - gap];
        } else {
          break;
        }
      }
      yield { type: 'overwrite', i: j, value: temp };
      array[j] = temp;
    }
  }
  for(let i=0; i<n; i++){
    yield { type: 'markSorted', i };
  }
}
