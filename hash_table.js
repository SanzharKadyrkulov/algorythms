class HashTable{
    constructor(){
        this.data = []
    }
    _hash(key){
        let index = 0
        for(let i =0; i<key.length; i++){
            index+=key.charCodeAt(i)
        }
        return index
    }
    add(key, value){
        let index = this._hash(key)
        if(this.data[index] === undefined){
            
            this.data[index] = value
        }else{
            // let index = this._hash(key)
            this.data[index+1] = value
        }
    }
    get(key){
        let index = this._hash(key)
        if(this.data[index] === undefined){
            console.log('not found');
        }else{
            console.log(this.data[index]);
        }
    }
    remove(key){
        let index = this._hash(key)
        if(this.data[index] === undefined){
            console.log('cant delete');
        }else{
            this.data[index] = undefined
        }
    }
}

const hash = new HashTable;

hash.add('Sanzhar', 100)
hash.add('Umid', 200)
hash.add('dimU', 300)
hash.get('Umid')
// hash.get('Sanzhar')
// hash.get('Umi')
// hash.get('Umid')
// hash.remove('Umid')
// hash.get('Umid')

