学习笔记
为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？
::first-line CSS pseudo-element （CSS伪元素）在某 block-level element （块级元素）的第一行应用样式。第一行的长度取决于很多因素，包括元素宽度，文档宽度和文本的文字大小。
::first-letter会选中某 block-level element（块级元素）第一行的第一个字母，并且文字所处的行之前没有其他内容（如图片和内联的表格） 。
从mdn的说明上看，::first-letter设置float的计算成本比::first-line小很多，所以可以支持flot等属性。