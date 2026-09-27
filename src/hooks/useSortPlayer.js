import { useState, useRef, useEffect, useCallback } from 'react';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function useSortPlayer(initialArray, algorithmGenerator, speedStr, onVerify) {
  const [array, setArray] = useState([...initialArray]);
  const [activeIndices, setActiveIndices] = useState({});
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  
  const cancelFlag = useRef(false);
  const startTime = useRef(null);
  const timerInterval = useRef(null);
  const speedRef = useRef(Number(speedStr));

  // Sync speed ref when it changes so it takes effect mid-run
  useEffect(() => {
    speedRef.current = Number(speedStr);
  }, [speedStr]);

  const reset = useCallback((newArray) => {
    cancelFlag.current = true;
    setIsRunning(false);
    setIsSorted(false);
    setArray([...newArray]);
    setActiveIndices({});
    setComparisons(0);
    setSwaps(0);
    setElapsedTime(0);
    if (timerInterval.current) clearInterval(timerInterval.current);
  }, []);

  const play = useCallback(async () => {
    cancelFlag.current = false;
    setIsRunning(true);
    setIsSorted(false);
    setComparisons(0);
    setSwaps(0);
    setElapsedTime(0);
    setActiveIndices({});

    let currentArray = [...array];
    const generator = algorithmGenerator(currentArray);
    
    startTime.current = Date.now();
    timerInterval.current = setInterval(() => {
      setElapsedTime((Date.now() - startTime.current) / 1000);
    }, 100);

    for (const step of generator) {
      if (cancelFlag.current) break;

      const { type, i, j, value, l, r } = step;

      let newState = { ...activeIndices };

      if (type === 'compare') {
        newState.comparing = [i, j];
        setComparisons(c => c + 1);
      } else if (type === 'swap') {
        newState.comparing = [];
        newState.swapping = [i, j];
        const temp = currentArray[i];
        currentArray[i] = currentArray[j];
        currentArray[j] = temp;
        setSwaps(s => s + 1);
        setArray([...currentArray]);
      } else if (type === 'overwrite') {
        newState.comparing = [];
        newState.swapping = [i];
        currentArray[i] = value;
        setSwaps(s => s + 1);
        setArray([...currentArray]);
      } else if (type === 'pivot') {
        newState.pivot = i;
      } else if (type === 'range') {
        newState.activeRange = [l, r];
      } else if (type === 'markSorted') {
        newState.sorted = newState.sorted || [];
        newState.sorted.push(i);
      } else if (type === 'clearPhase') {
         // Custom clear for radix/count
      }

      setActiveIndices(newState);
      await delay(speedRef.current);
      if (cancelFlag.current) break;
    }

    if (timerInterval.current) clearInterval(timerInterval.current);
    
    if (!cancelFlag.current) {
      setIsRunning(false);
      setIsSorted(true);
      setActiveIndices({ sorted: currentArray.map((_, idx) => idx) });
      
      // Programmatic verification
      let sorted = true;
      for (let k = 1; k < currentArray.length; k++) {
        if (currentArray[k - 1] > currentArray[k]) {
          sorted = false;
          break;
        }
      }
      if (sorted) {
        console.log(`%cSuccess! Array of size ${currentArray.length} is correctly sorted.`, 'color: #10b981; font-weight: bold;');
      } else {
        console.error('Array is not sorted properly!');
      }
      if (onVerify) onVerify(sorted);
    }
  }, [array, algorithmGenerator, onVerify]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancelFlag.current = true;
      if (timerInterval.current) clearInterval(timerInterval.current);
    };
  }, []);

  return {
    array,
    activeIndices,
    comparisons,
    swaps,
    elapsedTime,
    isRunning,
    isSorted,
    play,
    reset
  };
}
