// input [5,6,7,8,2,1,4,9]
// output [(5, 8), 2, [1,9]

const sampleProblem = [5, 6, 7, 8, 2, 1, 4, 9];
const sampleProblemB = [2, 1, 4, 7, 8, 9, 5];

const arrayGetFirstLast = (data) => {
  if (data.length > 1) {
    return [data[0], data[data.length - 1]];
  } else {
    return data[0];
  }
};

const arrayGroupSolve = (data) => {
  // Destructure Array
  const list = [...data];
  const newList = [];
  let tempArray = [];

  for (let i = 0; i < list.length; i++) {
    // const pointerPrev = list[i - 1];
    const pointerCurrent = list[i];
    const pointerNext = list[i + 1];
    if (pointerCurrent < pointerNext) {
      tempArray.push(pointerCurrent);
    } else {
      tempArray.push(pointerCurrent);
      newList.push(arrayGetFirstLast(tempArray));
      tempArray = [];
    }
  }

  console.log(newList);
};

arrayGroupSolve(sampleProblemB);
