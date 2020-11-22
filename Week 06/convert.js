function StringToNumber(str) {
  // 2进制
  if (str.startsWith('0b')) {
    return parseInt(str.substring(2), 2);
  }
  // 8进制
  if (str.startsWith('0o')) {
    return parseInt(str.substring(2), 8);
  }
  // 16进制
  if (str.startsWith('0x')) {
    return parseInt(str.substring(2), 16);
  }
}

function NumberToString(num, radix = 10) {
  if (radix !== 10) {
    const type = radix === 2 ? '0b' : radix === 8 ? '0o' : '0x';
    return type + num.toString(radix);
  }
  return num;
}
