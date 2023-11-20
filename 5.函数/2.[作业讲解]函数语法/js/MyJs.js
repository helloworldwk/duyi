// 写一个函数，该函数用于判断某个数是不是奇数
function isOdd(num) {
  return num % 2 !== 0;
}

// 写一个函数，该函数用于判断某个数是不是素数
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  var isFind = false;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      isFind = true;
      break;
    }
  }

  return !isFind;
}

// 写一个函数，该函数用于对数组求和
function sumOfArray(arr) {
  if (!Array.isArray(arr)) {
    return "参数错误，不是数组";
  }

  var sum = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (+arr[i]) {
      sum += arr[i];
    } else {
      return "数组项必须是数字";
    }
  }

  return sum;
}

// 写一个函数，该函数用于得到数组中的最大值
function maxOfArray(arr) {
  if (!Array.isArray(arr)) {
    return "参数错误，不是数组";
  }

  var max = arr[0];
  for (var i = 1; i <= arr.length; i++) {
    if (+arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// 写一个函数，该函数用于得到数组中的最小值
function minOfArray(arr) {
  if (!Array.isArray(arr)) {
    return "参数错误，不是数组";
  }

  var min = arr[0];
  for (var i = 1; i <= arr.length; i++) {
    if (+arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// 写一个函数，该函数用于判断数组是否是稀松数组
function hasEmptyInArray(arr) {
  if (!Array.isArray(arr)) {
    return "参数错误，不是数组";
  }

  for (var i = 0; i <= arr.length - 1; i++) {
    if (!(i in arr)) {
      return true;
    }
  }

  return false;
}

// 写一个函数，判断该某年是否是闰年
function isLeap(year) {
  if (isNaN(+year)) {
    return "年份不正确";
  }

  // 4年一闰，百年不润；400年一润
  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0 ||
    (year % 4 !== 0 && year % 100 !== 0 && year % 400 === 0)
  );
}

// 写一个函数，得到某年某月的天数
function getDays(year, month) {
  if (isNaN(+year)) {
    return "年份不正确";
  }

  if (isNaN(+month)) {
    return "月份不正确";
  }

  if (+month === 2) {
    return isLeap(year) ? 29 : 28;
  } else if ((+month < 8 && isOdd(+month)) || (+month >= 8 && !isOdd(+month))) {
    return 31;
  } else {
    return 30;
  }

  // if (isLeap(year) && +month === 2) {
  //   return 29;
  // } else if (!isLeap(year) && +month === 2) {
  //   return 28;
  // } else if ([1, 3, 5, 7, 8, 10, 12].includes(+month)) {
  //   return 31;
  // } else {
  //   return 30;
  // }
}

// 写一个函数，得到某个数字数组中出现次数最多的数字和频率
function getTopFreqInArray(arr) {
  if (!Array.isArray(arr)) {
    return "参数错误，不是数组";
  }

  var obj = {};
  for (var i = 0; i <= arr.length - 1; i++) {
    if (typeof arr[i] !== "number") {
      return "数组项必须是数字数组";
    }

    if (!(arr[i] in obj)) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] = ++obj[arr[i]];
    }
  }

  var result;
  for (var prop in obj) {
    if (!result || obj[prop] >= result.frequency) {
      result = {
        number: +prop,
        frequency: obj[prop],
      };
    }
  }
  return `出现最多的数字是${result.number}，出现了${result.frequency}次`;
}
