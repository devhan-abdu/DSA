class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
    constructor(size = 7) {
        this.hashTable = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.hashTable.length;
        }

        return hash;
    }

    set(key, value) {
        let index = this._hash(key)
        while (this.hashTable[index] && this.hashTable[index].key !== key) {
            index = (index + 1) % this.hashTable.length
        }

        if (this.hashTable[index] && this.hashTable[index].key === key) {
            this.hashTable[index].value = value
        } else {
            this.hashTable[index] =new Node(key , value)
        }

        return this
    }

    get(key) {
        let index = this._hash(key)
        while (this.hashTable[index]) {
            if (this.hashTable[index].key === key) {
                return this.hashTable[index].value
            }

            index = (index + 1) % this.hashTable.length
        }

        return undefined
    }

 

}
