var sp = require("./padArray");


console.log(sp.pad([0,1,2,3], 4,))
console.log(sp.pad([0,1,2,3], 5,))
console.log(sp.pad([0,1,2,3], 5, "Working"))
console.log(sp.pad([0,2,2,3,6], 8, "Forgot"))