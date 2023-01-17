class Stack{
    constructor() {
        this.arr = []
    }
    push(element){
        this.arr.push(element)
    }   
    pop(){
        if(this.arr.length === 0){
            console.log('stack is empty');
            return
        }
        return this.arr.pop()
    }
    length(){
        console.log(this.arr.length);
    }
    peek(){
        console.log(this.arr[this.arr.length - 1]);
    }
    display(){
        if(this.arr.length === 0){
            console.log('method dislay, stack is empty');
            return
        }
        console.log(this.arr);
    }
}

let st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.pop()
st.pop()
st.pop()
st.pop()
st.display()