const age1 = [20,21,22,20,23];
const age2 = [15,12,10,14,13];
const age3 = [10,30,40,20];
const newArray = age1.concat(age2).concat(age3);
const newArray2 = [ ...age1, ...age2,  5, ...age3 ];
const max = Math.max(...newArray2); 
console.log(newArray2);
console.log(max);