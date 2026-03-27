// space o(n)
// time complex o(n^2)

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex]= temp
}


function pivote(array, pivotIndex = 0, endIndex = array.length - 1) {
    let swapIndex = pivotIndex
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++
            swap(array , swapIndex, i)
         }
    }

    swap(array, pivotIndex, swapIndex)
    return swapIndex
}

function quickSort(array, left = 0, right = array.length - 1) {
    if (left >= right) return 
    let  pivoteIndex = pivote(array, left , right)
    quickSort(array, left, pivoteIndex - 1);
    quickSort(array, pivoteIndex + 1, right);
}
 let arr = [ 2, 5, 8, 1,9, 4]
quickSort(arr)

console.log("sorted array " , arr)