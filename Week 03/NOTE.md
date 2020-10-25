学习笔记

### LL 算法构建 AST 语法树

#### 四则运算

- TokenNumber：
  - 1 2 3 4 5 6 7 8 9 0 的组合
- Operator：+、-、\*、/
- Whitespace：<SP>
- LineTerminator: <LF><CR>

### 产生式规则

- <Expression>::=
  <AdditiveExpression><EOF>
- <AdditiveExpression>::=
  <MultiplicativeExpression>
  |<AdditiveExpression><+><MultiplicativeExpression>
  |<AdditiveExpression><-><MultiplicativeExpression>
- <MulitplicativeExpression>::=
  <Number>
  |<MultiplicationExpression><*><Number>
  |<MultiplicationExpression></><Number>
