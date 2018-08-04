let hash = require('string-hash');

class FHashTable {

    constructor() {
        this.list = [];
    }
    
    get(x) {
        let i = hash(x);
        if (!this.list[i]) {
            return undefined;
        }
        let result;
        this.list[i].forEach(pairs => {
            if (pairs[0] === x) {
                result = pairs[1];
            }
        })
        return result;
    }
    
    set(x, y) {
        let index= hash(x);
        if (!this.list[index]) {
            this.list[index] = [];
          }
        this.list[index].push([x, y]);
    }
}