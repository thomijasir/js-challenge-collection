const data = [2, 4, 7, 8, 9];
const compare = [1, 8, 2, 7, 8];

// return should be  [2, 8, 7]

const insertionMerge = (data, compare) => {
  const newArray = [];

  if (data.length !== compare.length) {
    return "Cannot Compare Length Different!";
  }

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const checkNewArr = newArray.includes(item);
    const checkCompare = compare.includes(item);
    if (!checkNewArr && checkCompare) {
      newArray.push(item);
    }
  }

  return newArray;
};

console.log(insertionMerge(data, compare));
