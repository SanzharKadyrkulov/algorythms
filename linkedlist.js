class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value)
    }
    
    add(value){
        let temp = this.head
        while(temp.next !== null){
            temp = temp.next
        }
        temp.next = new Node(value)
    }

    remove(value){
        let temp = this.head
        if(temp.value === value){
            this.head = this.head.next
            return
        }
        let check = false
        while(temp !== null){
            if(temp.value === value){
                check = true
            }
            temp = temp.next
        }
        if(check){

            while(temp.next.value != value){
                temp = temp.next
            }
            temp.next = temp.next.next
        }else{
            console.log('not found');
        }
    }
    remove2(value){
        let temp = this.head
        if(temp.value === value){
            this.head = this.head.next
            return
        }
        while(true){
            if(temp.next===null){
                console.log('not found2');
                return
            }
            if(temp.next.value === value){
                temp.next = temp.next.next
                return
            }
            temp = temp.next
        }
    }

    update(value, newValue){
        let temp = this.head
        while(temp.value != value){
            temp = temp.next
        }
        temp.value = newValue
    }

    display(){
        let arr = []
        let temp = this.head
        while(temp !== null){
            arr.push(temp.value)
            temp = temp.next
        }
        console.log(arr);
    }
}

let ll = new LinkedList("100")
ll.add("A")
ll.add("B")
ll.add("C")
ll.add('D')
ll.add('E')
ll.remove('100')
ll.remove('h')
ll.remove2("c")
ll.update('A', "as")
ll.display()










// let A = new Node('Yunus')
// let B = new Node('Bado')
// A.next = B
// let C = new Node('Argen')
// B.next = C
// console.log(A);