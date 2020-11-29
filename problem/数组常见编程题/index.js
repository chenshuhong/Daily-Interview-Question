// 扁平
Array.prototype.flat = function () {
  return [].concat(
    ...this.map((item) => (Array.isArray(item) ? item.flat() : [item]))
  );
};

//去重
Array.prototype.unique = function () {
  return [...new Set(this)];
};
