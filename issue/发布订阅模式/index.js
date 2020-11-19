// 仿 node 的 events 模块 EventEmitter 实现发布订阅模式
class MyEventEmitter{
    constructor(){
        this._events = new Map() //存储事件/回调 键值对
        this._maxListeners = 10 //设立监听上限
    }

    emit(type,...args){
        let handlers = this.getHandlers(type)
        if(!handlers||!handlers.length)
            return
        handlers.map(handler=>{
            handler.apply(this,args)
        })
    }

    addListener(type,fn){
        let handlers = this.getHandlers(type)
        if(handlers){
            handlers.push(fn)
        }else{
            this.on(type,fn)
        }
    }

    removeListener(type,fn){
        if(!fn){
            this._events.delete(type)
            return
        }
        let handlers = this.getHandlers(type)
        if(handlers&&handlers.length){
            handlers.splice(handlers.findIndex(handler=>handler===fn),1)
        }
    }

    on(type,fn){
        this._events.set(type,[fn])
    }

    getHandlers(type){
        return this._events.get(type)
    }
}

const myEventEmitter = new MyEventEmitter()
myEventEmitter.addListener('some_event',function(...args){
    console.log(`some_event happen`,args)
})
function deleteFn(...args){
    console.log(`some_event happen 2`,args)
}
myEventEmitter.addListener('some_event',deleteFn)

setTimeout(function () {
    myEventEmitter.emit('some_event','hello')
},1000)

setTimeout(function () {
    myEventEmitter.removeListener('some_event',deleteFn)
    myEventEmitter.emit('some_event','hello2')
},1000)
