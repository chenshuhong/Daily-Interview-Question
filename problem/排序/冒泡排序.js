const array = [5, 4, 1, 3, 2, 6, 7];
function sort(array) {
  let temp;
  //记录最后一次交换的位置
  let lastExchangeIndex = 0;
  //无序列表的边界，每次比较只需要比到这里为止
  let sortBorder = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    // 有序标记，每一轮的初始值为true
    let isSorted = true;
    for (let j = 0; j < sortBorder; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        //该轮发生过交换，不是有序的
        isSorted = false;
        //把无序列表边界更新为最后一次交换元素的位置
        lastExchangeIndex = j;
      }
    }

    sortBorder = lastExchangeIndex;
    if (isSorted) {
      break;
    }
  }
  return array;
}

console.log(sort(array));

const array2 = [2, 3, 4, 5, 6, 7, 8, 1];

function sort2(array) {
  let temp;
  let lastRightExchangeIndex = 0;
  let lastLeftExchangeIndex = 0;
  let leftSortBorder = 0;
  let rightSortBorder = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    let isSort = true;
    for (let j = leftSortBorder; j < rightSortBorder; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSort = false;
        lastRightExchangeIndex = j;
      }
    }
    rightSortBorder = lastRightExchangeIndex;
    if (isSort) {
      break;
    }
    isSort = true;
    for (let k = rightSortBorder; k > leftSortBorder; k--) {
      if (array[k - 1] > array[k]) {
        temp = array[k];
        array[k] = array[k - 1];
        array[k - 1] = temp;
        isSort = false;
        lastLeftExchangeIndex = k;
      }
    }
    leftSortBorder = lastLeftExchangeIndex;
    if (isSort) {
      break;
    }
  }
  return array;
}

console.log(sort2(array2));
