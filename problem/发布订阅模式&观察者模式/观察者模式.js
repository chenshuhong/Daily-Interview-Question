class Subject{
    constructor(){
        this.observers = []
    }

    add(observer){
        this.observers.push(observer)
    }

    remove(observer){
        const index = this.observers.findIndex(obs=>obs===observer)
        !!~index&&this.observers.splice(index,1)
    }

    notify(){
        this.observers.map(obs=>{
            obs.update&&obs.update()
        })
    }
}

class Observer{
    constructor(name){
        this.name = name
    }

    update(){
        console.log(this.name)
    }
}

const sub = new Subject()
const obs1 = new Observer('ttsy1')
const obs2 = new Observer('ttsy2')
sub.add(obs1)
sub.add(obs2)

sub.notify()

sub.remove(obs2)
sub.notify()
