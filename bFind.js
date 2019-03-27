function bFind(arr, value) {
    let leftIndex = arr[0];
    let rightIndex = arr[arr.length - 1];

    while (leftIndex <= rightIndex) {
        if (value === arr[leftIndex]) {
            return leftIndex;
        }

        if (value === arr[rightIndex]) {
            return rightIndex;
        }

        const middleIndex = Math.floor(leftIndex + rightIndex / 2);

        if (value < arr[middleIndex]) {
            rightIndex = middleIndex;
        } else {
            leftIndex = middleIndex;
        }
    }

    return -1;
}

module.exports = bFind;