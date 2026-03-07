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

  // time complex o(k +m)
  set(key, value) {
    let index = this_hash(key); // o(k) length of the key
    if (!this.hashTable[index]) this.hashTable[index] = [];

    for (let i = 0; i < this.hashTable[index].length; i++) {
      // o(m)number of items in this index
      if (this.hashTable[index][i][0] === key) {
        this.hashTable[index][i][1] = value;
        return this;
      }
    }

    this.hashTable[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this_hash(key);
    if (!this.hashTable[index]) {
      for (let i = 0; i < this.hashTable[index].length; i++) {
        if (this.hashTable[index][i][0] === key) {
          return this.hashTable[index][i][1];
        }
      }
    }

    return undefined;
  }
  remove(key) {
    let index = this_hash(key);
    if (!this.hashTable[index]) {
      for (let i = 0; i < this.hashTable[index].length; i++) {
        if (this.hashTable[index][i][0] === key) {
            this.hashTable[index].splice(i, 1)
            if (this.hashTable[index].length === 0) {
                this.hashTable[index] = undefined
            }
            return true
        }
      }
    }

    return false;
  }
}