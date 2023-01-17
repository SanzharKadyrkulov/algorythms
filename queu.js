class Queue{
    constructor(){
        this.arr = []
    }

    enqueue(e){
        this.arr.push(e)
    }
    dequeue(e){
        if(this.arr.length === 0){
            console.log('stack is empty');
            return
        }
        return this.arr.shift()
    }
    display(){
        if(this.arr.length === 0){
            console.log('stack is empty');
            return
        }
        console.log(this.arr);
    }
}

let q = new Queue
q.enqueue(100)
q.enqueue('Yunus')
q.enqueue([1,2,3,4,5])
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()

q.display()