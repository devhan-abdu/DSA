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

  _hash1(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.hashTable.length;
    }

    return hash;
  }
  _hash2(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 29) % this.hashTable.length;
    }

    return (hash % (this.hashTable.length - 1)) + 1;
  }

  set(key, value) {
    let index = this._hash1(key);
    const hash2 = this._hash2(key);
    let i = 0;
    while (this.hashTable[index] && this.hashTable[index].key !== key) {
      i++;
      index = (this._hash1(key) + i * hash2) % this.hashTable.length;

      if (i > this.hashTable.length) {
        throw new Error("HashTable is full");
      }
    }

    if (!this.hashTable[index]) {
      this.hashTable[index] = new Node(key, value);
    } else {
      this.hashTable[index].value = value;
    }

    return this;
  }

  get(key) {
      let index = this._hash(key);
        const hash2 = this._hash2(key);
        let i = 0;
      
    while (this.hashTable[index]) {
      if (this.hashTable[index].key === key) {
        return this.hashTable[index].value;
      }
      i++;
      index = (this._hash1(key) + i * hash2) % this.hashTable.length;
    }

    return undefined;
  }
}
