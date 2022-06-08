const listData = [3, 2, 20, 1, 5, 7];

export const arrayInsert = (data, value, index) => {
  const newArray = [];
  if (index >= data.length) {
    return [...data, value];
  } else {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (i === index) {
        newArray.push(value);
        newArray.push(item);
      } else {
        newArray.push(item);
      }
    }
    return newArray;
  }
};

console.log(arrayInsert(listData, 4, listData.length));
// output should 3, 5, 20, 1, 5, 7
