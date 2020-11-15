function code2utf8(uni) {
  let uni2 = uni.toString(2);
  if (uni < 128) {
    return uni.toString(16);
  } else if (uni < 2048) {
    uni2 = ('00000000000000000' + uni2).slice(-11);
    const s1 = parseInt('110' + uni2.substring(0, 5), 2);
    const s2 = parseInt('10' + uni2.substring(5), 2);
    return s1.toString(16) + ',' + s2.toString(16);
  } else {
    uni2 = ('00000000000000000' + uni2).slice(-16);
    const s1 = parseInt('1110' + uni2.substring(0, 4), 2);
    const s2 = parseInt('10' + uni2.substring(4, 10), 2);
    const s3 = parseInt('10' + uni2.substring(10), 2);
    return s1.toString(16) + ',' + s2.toString(16) + ',' + s3.toString(16);
  }
}

function UTF8_Encoding(str) {
  let val = '';
  for (let i = 0; i < str.length; i++) {
    val += ',' + code2utf8(str.charCodeAt(i));
  }
  val += ',00';
  console.log(val);
  // 将16进制转化为ArrayBuffer
  return new Uint8Array(
    val.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16);
    })
  ).buffer;
}
