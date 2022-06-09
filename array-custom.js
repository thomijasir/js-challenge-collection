class ArrayCustom {
  constructor(data) {
    this.data = data || [];
  }

  get = () => {
    return this.data;
  };

  add = (value) => {
    this.data.push(value);
  };

  indexOf = (index) => {
    return this.data[index];
  };

  removeAt = (index) => {
    const newArray = [...this.data];
    newArray.splice(index, 1);
    this.data = newArray;
  };

  remove = (value) => {
    const newArray = [...this.data];
    const indexData = newArray.indexOf(value);
    if (indexData > -1) {
      newArray.splice(indexData, 1);
    }
    this.data = newArray;
  };
}

module.exports = ArrayCustom;
