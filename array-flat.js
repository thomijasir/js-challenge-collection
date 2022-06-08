const lisArray = [1, 2, [1, [1, 2, 3], 3], 4, 5];

// JS Flats
// console.log(lisArray.flat(2));

const arrayFlat = (list) => {
  let newArray = [];
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (item.length) {
      newArray = [...newArray, ...arrayFlat(item)];
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

console.log("GET ARRAY: ", arrayFlat(lisArray));
