function ArrayChallenge(strArr) {
  // STEP TO SOLVE
  // 1. Cretate V-Store
  // 2. Loop Array
  // 3. Check V-STore
  // if store doesnot available then store it
  // else
  // 1. Get Index Store
  // 2. Remove Index Sore
  // 3. Store New Value Array
  // 4. Format Array As We Want
  // 5. Return new array

  // [NOTE!!!]
  // INPUT FOR ["A", "B", "C", "D", "E", "D", "Q", "Z", "C"]
  // SHOULD A-B-E-D-Q-Z-C NOT E-D-Q-Z-C
  // Because in the value A and B must be store, becuase not available in virtual memory
  // and also A and B Never access again so it will store in the begining of virtual memory

  const vArray = [];

  for (let i = 0; i < strArr.length; i++) {
    const item = strArr[i];
    const checkVarr = vArray.indexOf(item);

    if (checkVarr == -1) {
      vArray.push(item);
    } else {
      const getIndex = vArray.indexOf(item);
      vArray.splice(getIndex, 1);
      vArray.push(item);
    }
  }

  // code goes here
  return vArray.join("-");
}

// keep this function call here
console.log(ArrayChallenge(readline()));
