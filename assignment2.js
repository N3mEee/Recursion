const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    else {
        let leftArray = arr.slice(0, arr.length / 2);
        let rightArray = arr.slice(arr.length / 2);
        return merge(mergeSort(leftArray), mergeSort(rightArray));
    }
};

function merge(leftArray, rightArray) {
    const result = [];
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            result.push(leftArray.shift());
        } else {
            result.push(rightArray.shift());
        }
    }

    while (leftArray.length) result.push(leftArray.shift());

    while (rightArray.length) result.push(rightArray.shift());

    return result;
}

const unsortedArray = [5, 7, 1, 3, 6, 8, 4, 2];
console.log(mergeSort(unsortedArray)); //[1,2,3,4,5,6,7,8]
