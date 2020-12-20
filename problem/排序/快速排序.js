const array = [6, 4, 2, 1, 5];

function getRandomInt(min, max) {
  const result = Math.floor(Math.random() * (max - min) + min);
  console.log(result, min, max);
  return result;
}

function quickSort(array, leftIndex = 0, rightIndex = array.length - 1) {
  if (leftIndex >= rightIndex) {
    return;
  }
  let pivotIndex = partition(array, leftIndex, rightIndex);
  quickSort(array, leftIndex, pivotIndex);
  quickSort(array, pivotIndex + 1, rightIndex);
}

function partition(array, leftIndex, rightIndex) {
  //基准元素
  let pivotIndex = getRandomInt(leftIndex, rightIndex);
  let pivot = array[pivotIndex];
  let t = array[leftIndex];
  array[leftIndex] = pivot;
  array[pivotIndex] = t;
  //左边的指针
  let mLeftIndex = leftIndex;
  //右边的指针
  let mRightIndex = rightIndex;

  while (mLeftIndex !== mRightIndex) {
    while (mLeftIndex < mRightIndex && array[mRightIndex] > pivot) {
      mRightIndex--;
    }
    while (mLeftIndex < mRightIndex && array[mLeftIndex] <= pivot) {
      mLeftIndex++;
    }
    if (mLeftIndex < mRightIndex) {
      let temp = array[mLeftIndex];
      array[mLeftIndex] = array[mRightIndex];
      array[mRightIndex] = temp;
    }
  }
  let temp = array[mLeftIndex];
  array[mLeftIndex] = array[leftIndex];
  array[leftIndex] = temp;
  return mLeftIndex;
}

quickSort(array);
console.log(array);
