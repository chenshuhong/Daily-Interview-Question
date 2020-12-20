let 和 const 的特点
1. 不会被提升  
JavaScript 引擎在扫描代码发现变量声明时，要么将它们提升到作用域顶部(遇到 var 声明)，要么将声明放在 TDZ 中(遇到 let 和 const 声明)。访问 TDZ 中的变量会触发运行时错误。只有执行过变量声明语句后，变量才会从 TDZ 中移出，然后方可访问。
```js
if (false) {
    let value = 1;
}
console.log(value); // Uncaught ReferenceError: value is not defined
```
2. 重复声明报错
```js
var value = 1;
let value = 2; // Uncaught SyntaxError: Identifier 'value' has already been declared
```
3. 不绑定全局作用域
```js
var value = 1;
console.log(window.value); // 1
```
```js
let value = 1;
console.log(window.value); // undefined
```

#### 循环中的块级作用域
```js
var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log(i);
    };
}
funcs[0](); // 3
```
```js
var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = (function(i){
        return function() {
            console.log(i);
        }
    }(i))
}
funcs[0](); // 0
```
```js
var funcs = [];
for (let i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log(i);
    };
}
funcs[0](); // 0
```
#### babel
```js
if (false) {
    let value = 1;
}
console.log(value); // Uncaught ReferenceError: value is not defined
```
如果还是直接编译成 var，打印的结果肯定是 undefined，然而 Babel 很聪明，它编译成了：
```js
if (false) {
    var _value = 1;
}
console.log(value);
```

```js
var funcs = [];
for (let i = 0; i < 10; i++) {
    funcs[i] = function () {
        console.log(i);
    };
}
funcs[0](); // 0
```
```js
var funcs = [];

var _loop = function _loop(i) {
    funcs[i] = function () {
        console.log(i);
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}
funcs[0](); // 0
```
