## 观察者模式
观察者模式指的是一个对象（Subject）维持一系列依赖于它的对象（Observer），当有关状态发生变更时 Subject 对象则通知一系列 Observer 对象进行更新。  
在观察者模式中，Subject 对象拥有添加、删除和通知一系列 Observer 的方法等等，而 Observer 对象拥有更新方法等等。  
在 Subject 对象添加了一系列 Observer 对象之后，Subject 对象则维持着这一系列 Observer 对象，当有关状态发生变更时 Subject 对象则会通知这一系列 Observer 对象进行更新。  

## 发布订阅模式（Publisher && Subscriber）
发布订阅模式指的是希望接收通知的对象（Subscriber）基于一个主题通过自定义事件订阅主题，被激活事件的对象（Publisher）通过发布主题事件的方式通知各个订阅该主题的 Subscriber 对象。
