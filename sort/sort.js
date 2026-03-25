// in place sorting with o(n2)

function bubbleSort(array) {
  let isSwaped;
  for (let i = array.length; i > 0; i--) {
    isSwaped = false;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwaped = true;
      }
    }
    if (!isSwaped) break;
  }

  return array;
}

function selectionSort(array) {
  let swapped;
  for (let i = 0; i < array.length - 1; i++) {
    swapped = false;
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
      swapped = true;
    }

    if (!swapped) break;
  }

  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = temp;
  }
  return array;
} 

function bucketSort(arr) {
  let n = arr.length
  if (n === 0) return arr
  
  let minValue = Math.min(...arr)
  let maxValue = Math.max(...arr)

  let bucketCount = Math.ceil(Math.sqrt(n))
  let buckets = Array.from({ length: bucketCount }, () => [])
  let alreadySorted =true;

  for (let i = 0; i < n; i++){
    let bi = Math.floor(((arr[i] - minValue) / (maxValue - minValue)) * (bucketCount - 1))

    if (buckets[bi].length > 0 && arr[i] < buckets[bi][buckets[bi][buckets[bi].length - 1]]) {
       alreadySorted = false
    }
    buckets[bi].push(arr[i])
  }

  if(alreadySorted) return arr
  for (let i = 0; i < bucketCount; i++) {
    insertionSort(buckets[i])
  }

  let index = 0

  for (let i = 0; i < bucketCount; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
       arr[index++] = buckets[i][j]
    }
  }
}
