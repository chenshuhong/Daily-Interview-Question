console.log(['1','2','3'].map(parseInt))

console.log(parseInt('1',0))
console.log(parseInt('2',1))
console.log(parseInt('3',2))

// [ 1, NaN, NaN ]
// 1
// NaN
// NaN


//注意该函数可以实现一元函数
let unary = fn => val => fn(val)
let parse = unary(parseInt)

console.log(['1.1','2','0.3'].map(parse))

console.log(parse('1.1',0))
console.log(parse('2',1))
console.log(parse('0.3',2))

// [ 1, 2, 0 ]
// 1
// 2
// 0
