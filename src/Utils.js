let flames_arr = ["f", "l", "a", "m", "e", "s"];

const blockSwap = (arr, d, n) => {
  if (n < d) return "invalid data";
  let result = [];
  result = arr.slice(d);
  for (let i = 0; i < d; i++) {
    result.push(arr[i]);
  }
  return result;
};

const flamesCalc = (count, flames_num) => {
  if (flames_num.length > 1) {
    let remainder;
    if (count > flames_num.length) {
      remainder = count % flames_num.length;
    } else {
      remainder = count;
    }
    flames_num.splice(remainder - 1, 1);
    flames_num = blockSwap(flames_num, remainder - 1, flames_num.length);
    return flamesCalc(count,flames_num);
  } else {
    return flames_arr[flames_num[0] - 1];
  }
};

export const match = (str1, str2) => {
  let str1_arr = str1.split("");
  let str2_arr = str2.split("");
  for (let i = 0; i < str1_arr.length; i++) {
    for (let j = 0; j < str2_arr.length; j++) {
      if (str1_arr[i] === str2_arr[j]) {
        str2_arr.splice(str2_arr[j], 1);
        str1_arr.splice(str1_arr[i], 1);
      }
    }
  }
  return flamesCalc(str1_arr.length + str2_arr.length, [1, 2, 3, 4, 5, 6]);
};