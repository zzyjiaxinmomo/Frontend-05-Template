function kmp(source, pattern) {
  var table = new Array(pattern.length).fill(0); //table: 用于存储自身重复的计数情况
  {
    var i = 1; //table 下标
    var j = 0; //字符串下标

    while (i < pattern.length) {
      if (pattern[i] === pattern[j]) {
        // 找到自身重复
        ++i, ++j; // table下标和 字符串下标都向右 移动一位
        table[i] = j; // table[i]标记为j (标记table中i下标之前已连续重复的个数)
      } else {
        if (j > 0) {
          // 当前字母前面已经有连续重复的， 重复个数为table[j]
          j = table[j]; // 跳转到连续重复的后面那个字符串 table[j]
        } else {
          //当前字母前面没有连续重复，
          ++i; //table下标右移动 一位
        }
      }
    }
    console.log(table);
  }

  {
    //匹配模块
    let i = 0; //source下标
    let j = 0; //pattern下标
    while (i < source.length) {
      if (source[i] === pattern[j]) {
        //找到相同的
        ++i, ++j; // i和j都向右边移动一位
      } else {
        //不同
        if (j > 0)
          //pattern中 有前缀相同的，
          j = table[j];
        //j跳转回到 自身重复的字符串的结束,再进行对比
        //pattern中，暂时还没有前缀相同
        else ++i; //i移动到下一位
      }
      if (j === pattern.length)
        //pattern已经匹配到最后一个啦， 说明找到了字符串
        return true;
    }
    return false; //source 的i循环完毕， 表示没有找到pattern字符串
  }
}
kmp('', 'abcdabce');
//a b c d a b c e
//0 0 0 0 0 1 2 3
// a a b a a a c
// 0 0 1 0 1 2 2
