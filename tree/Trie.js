class TrieNode {
    constructor() {
        this.children = {}
        this.endOfString = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let currunt = this.root
        for (let char of word) {
            if (!currunt.children[char]) {
                currunt.children[char] = new TrieNode()
            }
            currunt = currunt.children[char]
        }
        currunt.endOfString = true
    }

    search(word) {
        let currunt = this.root
        for (let char of word) {
            if (!currunt.children[char]) {
                return false
            }
            currunt = currunt.children[char];
        }
       return currunt.endOfString

    }

    _delete(curruntNode, word, curruntIndex) {
        if (curruntIndex === word.length) {
            if (curruntNode.endOfString) {
                curruntNode.endOfString = false
                return Object.keys(curruntNode.children).length === 0
            }
            return false
        }
        const char = word[curruntIndex]
        const nextNode = curruntNode.children[char]
        if (!nextNode) {
            return false
        }
        const shouldDeleteChildNode = this._delete(nextNode, word, curruntIndex + 1)
        
        if (shouldDeleteChildNode) {
            delete curruntNode.children[char]
            return Object.keys(curruntNode.children).length === 0 && !curruntNode.endOfString
        }

        return false
    }

    delete(word) {
        return this._delete(this.root, word, 0)
    }
}