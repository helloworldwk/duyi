// 写一个函数，该函数用于判断某个数是不是奇数
function isOdd(num) {
  if (isNaN(+num) || num === "") {
    return "参数错误";
  }
  return num % 2 !== 0;
}

// 写一个函数，该函数用于判断某个数是不是素数
function isPrime(num) {
  if (isNaN(+num) || num === "") {
    return "参数错误";
  }

  var isFind = false;
  for (var i = 2; i < num - 1; i++) {
    if (num % i === 0) {
      isFind = true;
      break;
    }
  }

  return !isFind;
}
