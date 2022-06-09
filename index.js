// It is For Testing class

const ArrayCustom = require("./array-custom");

const data = new ArrayCustom([]);

data.add(1);
data.add(2);
data.add(3);

data.remove(10);

console.log(data.get());
