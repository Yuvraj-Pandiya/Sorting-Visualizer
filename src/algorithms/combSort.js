export function* combSort(array) {
  let n = array.length;
  let gap = n;
  let swapped = true;
  
  while (gap !== 1 || swapped === true) {
    gap = Math.floor((gap * 10) / 13);
    if (gap < 1) gap = 1;
    
    swapped = false;
    for (let i = 0; i < n - gap; i++) {
      yield { type: 'compare', i, j: i + gap };
      if (array[i] > array[i + gap]) {
        yield { type: 'swap', i, j: i + gap };
        let temp = array[i];
        array[i] = array[i + gap];
        array[i + gap] = temp;
        swapped = true;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    yield { type: 'markSorted', i };
  }
}
