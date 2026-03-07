class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
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

  // o(k + m)
  set(key, value) {
    let index = this._hash(key);
    if (!this.hashTable[index]) {
      this.hashTable[index] = new Node(key, value);
    } else {
      let node = this.hashTable[index];
      while (node.next) {
        if (node.key === key) {
          node.value = value;
          return this;
        }
        node = node.next;
      }

      if (node.key === key) {
        node.value = value;
      } else {
        node.next = new Node(key, value);
      }
    }

    return this;
  }
  get(key) {
    let index = this._hash(key);
    let node = this.hashTable[index];
    while (node) {
      if (node.key === key) {
        return node.value;
      }
      node = node.next;
    }
    return undefined;
  }

  remove(key) {
      let index = this._hash(key);
    
      let node = this.hashTable[index];
      let prev = null
    while (node) {
        if (node.key === key) {
            if (prev) {
              prev.next = node.next;
            } else {
             this.hashTable[index] = node.next;
  
          }
          node.next.null
          return true
      } 
        prev = node
       node = node.next;
    }
    return false;
  }
}