// 防抖 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
function debounce(fn, time = 1000) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}

const test = debounce(function () {
  console.log("aaaaaaaaaaaa");
}, 1000);

for (let i = 0; i < 100; i++) {
  test();
}
setTimeout(test, 2000);

// 节流 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
function throttle(fn, time) {
  let canRun = true;
  return function () {
    if (!canRun) {
      return;
    }
    canRun = false;
    setTimeout(() => {
      console.log("iiiiiii");
      fn.apply(this, arguments);
      canRun = true;
    }, time);
  };
}
const test2 = throttle(function () {
  console.log("bbbbbbbbbbbbbbbbb");
}, 1000);

for (let j = 0; j < 10000000; j++) {
  test2();
}
