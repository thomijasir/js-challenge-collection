const sampleList = [4, 8, 2, 1];
const sampleListB = [5, 4, 1, 2, 3, 6, 10, 9, 8, 7];
const selectionShort = (list) => {
  const maxNum = 99999;
  const sortedList = [];
  let slicedList = [...list];
  for (let k = 0; k < list.length; k++) {
    let minimum = maxNum;
    let index = 0;

    for (let i = 0; i < slicedList.length; i++) {
      const current = slicedList[i];
      if (current < minimum) {
        minimum = current;
        index = i;
      }
    }

    sortedList.push(minimum);
    slicedList[index] = maxNum;
  }
  console.log("GET LIST: ", sortedList);
};

selectionShort(sampleListB);
