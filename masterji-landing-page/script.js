// console.log("Hello, Masterji! Welcome to the landing page.");
// var b = 10;

// console.log("The value of a is: " + a, x);
// let a;
// a = 5;
// console.log("The value of a after assignment is: " + a);

function findDuplicates(nums) {
      nums.sort((a,b) => a-b);
      const set = new Set();
      let result = 0;
      for(let n of nums){
          if(set.has(n)){
              result = n;
              break;
          }
          set.add(n);
      }
    return [result, result+1];
  }
console.log(findDuplicates([1,1,2]));