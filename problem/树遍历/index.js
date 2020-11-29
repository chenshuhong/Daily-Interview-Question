const array = [
  { id: 6, pid: 2 },
  { id: 0 },
  { id: 1, pid: 0 },
  { id: 2, pid: 0 },
  { id: 3, pid: 1 },
  { id: 4, pid: 1 },
  { id: 5, pid: 2 },
];

//生成树
function toTree(array) {
  let result;
  const map = array.reduce((res, item) => {
    res[item.id] = item;
    return res;
  }, {});
  for (const item of Object.values(map)) {
    if (item.hasOwnProperty("pid")) {
      const parent = map[item.pid];
      parent.child = parent.child || [];
      parent.child.push(item);
    } else {
      result = item;
    }
  }
  console.log(JSON.stringify(result));
  return result;
}

const tree = toTree(array);

function deepTraversal(tree) {
  console.log(tree);
  if (tree.child && tree.child.length) {
    tree.child.map((node) => {
      deepTraversal(node);
    });
  }
}

function deepTraversalByWhile(tree) {
  const stack = [];
  stack.push(tree);
  let top;
  while (stack.length) {
    top = stack.pop();
    console.log(top);
    if (top.child && top.child.length) {
      stack.push(...top.child.reverse());
    }
  }
}

function widthTraversal() {
  const queue = [];
  queue.push(tree);
  let top;
  while (queue.length) {
    top = queue.shift();
    console.log(top);
    if (top.child && top.child.length) {
      queue.push(...top.child);
    }
  }
}

//deepTraversal(tree);
//deepTraversalByWhile(tree);
widthTraversal(tree);
