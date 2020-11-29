const promise = new Promise(function (resolve, reject) {
  // ... some code
  if (true) {
    resolve(1);
  } else {
    reject(2);
  }
});

promise
  .then((data) => {
    //console.log(data);
  })
  .catch((err) => {
    //console.log(err);
  });
// 1

// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error("fail")), 3000);
// });
//
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000);
// });

//p2.then((result) => console.log(result)).catch((error) => console.log(error));
// Error: fail
// 上面代码中，p1是一个 Promise，3 秒之后变为rejected。
// p2的状态在 1 秒之后改变，resolve方法返回的是p1。
// 由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。
// 所以，后面的then语句都变成针对后者（p1）。又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。

new Promise((resolve, reject) => {
  resolve(1);
  //console.log(2);
}).then((r) => {
  //console.log(r);
});
// 2
// 1
//调用resolve或reject并不会终结 Promise 的参数函数的执行

Promise.prototype.finally = function (cb) {
  return this.then((value) => {
    this.constructor.resolve(cb()).then(() => value);
  }).catch((err) => {
    this.constructor.resolve(cb()).then(() => {
      throw err;
    });
  });
};

/*const testFinallyPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1456);
  }, 1000);
});

testFinallyPromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("rrrrrrr");
  });*/

Promise.resolve(2)
  .finally(() => {})
  .then((data) => {
    console.log(data);
  });

const f = () => console.log("now");
(async () => f())();
console.log("next");
