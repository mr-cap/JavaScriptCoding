// map(), filter() and reduce() along with polyfills
// Note : map(), filter() and reduce() are the array methods which are used to iterate over an array
//        and perform a transformation and computation.
// 1) map(): creates a new array element by calling a function for each element of the array

let personDetails = [
  { name: "Prabha", age: 24, mark: 15 },
  { name: "Arvind", age: 14, mark: 18 },
  { name: "Vishal", age: 15, mark: 20 }
];

// const newDetails = personDetails
//   .map((arr) => {
//     arr.mark += 4;
//     return arr
//   })

console.log(personDetails);

// -------------------------------------------------------------------------------------------------

// 1) map() polyfill - custom map function

// Array.prototype.myMap = function(fn){
//   let temp = [] // as map returns an new array
//   for(let i=0; i<this.length; i++){
//     temp.push(fn(this[i],i,this))
//   }
//   return temp;
// }

// const customMap = personDetails.myMap((num,i,arr)=>{
//     num.mark += 4;
//     return num;
// })

// console.log(customMap);

// -------------------------------------------------------------------------------------------------
// 2) filter() polyfill - custom filter function

// Array.prototype.myFilter = function (fn) {
//   let temp = [];
//   for(let i=0;i<this.length;i++){
//     if(fn(this[i],i,this)) temp.push(this[i]);
//   }
//   return temp;
// }

// const customFilter = personDetails.myFilter((ele,i,arr)=>{
//   return ele.age > 20
// })

// console.log(customFilter)

// -------------------------------------------------------------------------------------------------

// 3) reduce() polyfill - custom reduce function

// Array.prototype.myReduce = function (fn, initialValue) {
//   var accumulator = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? fn(accumulator, this[i].mark, i, this) : this[i].mark;
//   }
//   return accumulator;
// };

// const customReduce = personDetails.myReduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(customReduce);

// -------------------------------------------------------------------------------------------------

// let nums = [1,2,3,4];
// Array.prototype.myReduce = function (fn, initialValue) {
//     var accumulator = initialValue;
//     for (let i = 0; i < this.length; i++) {
//       accumulator = accumulator ? fn(accumulator, this[i], i, this) : this[i];
//     }
//     return accumulator;
//   };

//   const customReduce = nums.myReduce((acc, curr, i, arr) => {
//     return acc + curr;
//   }, 0);

// console.log(customReduce);

// -------------------------------------------------------------------------------------------------
