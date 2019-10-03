module.exports = function multiply(first, second) {
// //   // your solution
// //   // return (BigInt( first ) * BigInt( second )).toString();
  let res_arr = [];
  second = second.split("").reverse();
  first.split("").reverse().forEach((el_a1, i) => 
    second.forEach((el_a2, j) => 
      res_arr[i + j] = (res_arr[i + j]) 
        ? res_arr[i + j] + el_a1 * el_a2 
        : el_a1 * el_a2)
  )
  return res_arr
      .map((item, index, arr) => {
          if(arr[index + 1]){
              arr[index + 1] = arr[index + 1] + Math.floor(arr[index] / 10);
              return item % 10;
          } else {
              return item
          }
      })
      .reverse().join("")
  }
