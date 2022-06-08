const closestNumber = (number, target) => {
  const targetNext = target + 1;
  const targetPrev = target - 1;

  if (number === target) {
    return true;
  }

  if (number >= target && number <= targetNext) {
    return true;
  }

  if (number <= target && number >= targetPrev) {
    return true;
  }

  return false;
};

const listData = [200, 3, 2, 20, 1, 5, 7, 5, 2, 100];

const singleShort = (data) => {
  let list = [...data];
  // Iterate Parent
  for (let i = 0; i < list.length; i++) {
    // Iterate List Item
    for (let j = 0; j < list.length; j++) {
      const itemCurrent = list[j];
      const itemNext = list[j + 1];
      if (itemCurrent > itemNext) {
        // Swap
        list[j] = itemNext;
        list[j + 1] = itemCurrent;
      }
    }
  }
  return list;
};

console.log(singleShort(listData));
