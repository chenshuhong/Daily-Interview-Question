Object.defineProperty方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。

> **备注：**应当直接在 [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 构造器对象上调用此方法，而不是在任意一个 `Object` 类型的实例上调用 

## 语法

> ```js
Object.defineProperty(obj, prop, descriptor)
```

####  参数 

```
obj
```

要定义属性的对象。

```
prop
```

要定义或修改的属性的名称或 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 

```
descriptor
```

要定义或修改的属性描述符。

#### 返回值

被传递给函数的对象。