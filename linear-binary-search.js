// Test Search Data
const listDataA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const listDataB = [5, 4, 1, 2, 3, 6, 10, 9, 8, 7];

const linearSearch = (data, search) => {
  console.log("GET DATA: ", data);
  const dataLenght = data.length;
  for (let i = 0; i <= dataLenght; i += 1) {
    const item = data[i];
    if (item === search) {
      return true;
    }
  }
  return false;
};

// Binary Search only Support Shorted Data Only
const binarySearch = (data, search) => {
  let pointerFirst = 0;
  let pointerLast = data.length - 1;

  while (pointerFirst <= pointerLast) {
    const pointerMid = Math.floor((pointerFirst + pointerLast) / 2);
    const item = data[pointerMid];

    if (item == search) {
      // Item Found!
      console.log({ item, pointerLast, pointerMid, pointerFirst });
      return true;
    }

    if (item < search) {
      pointerFirst = pointerMid + 1;
    }

    if (item > search) {
      pointerLast = pointerMid - 1;
    }
  }
  console.log({ item, pointerLast, pointerMid, pointerFirst });
  // Item Not Found!
  return false;
};

const binarySearchRecursive = (list, target) => {
  if (list.length) {
    let lastPointer = list.length;
    let midPointer = Math.floor(lastPointer / 2);
    let data = list[midPointer];
    if (data === target) {
      return true;
    } else {
      if (target > data) {
        return binarySearchRecursive(list.slice(0, midPointer), target);
      }
      return binarySearchRecursive(list.slice(midPointer), target);
    }
  }
  return false;
};
// Must Be Short Data
// const listDataA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(binarySearchRecursive(listDataA, 3));
// binarySearch(listDataA, 2);
