class _Node {
    constructor(key, value, next) {
      this.key = key;
      this.value = value;
      this.next = next;
    }
  }
  
  class SeparateMap {
    constructor(initialCapacity=8) {
      this.length = 0;
      this._hashTable = [];
      this._capacity = initialCapacity;
      this._deleted = 0;
    }
    
    get(key) {//change
      const index = this._findSlot(key);
      if (this._hashTable[index] === undefined) {
        throw new Error('Key error');
      }
      return this._hashTable[index].value;
    }
    
    set(key, value){//change
      const loadRatio = (this.length + this._deleted + 1) / this._capacity;
      if (loadRatio > SeparateMap.MAX_LOAD_RATIO) {
        this._resize(this._capacity * SeparateMap.SIZE_RATIO);
      }
    
      const slot = this._findSlot(key);
    
      if(!this._hashTable[slot]){
        this._hashTable[slot]=new _Node (key, value, null);
        this.length++;
      }
      else{
        let node = this._hashTable[slot];
        while(node !== null && node.key !==key){
          node= node.next;
        }
        if(node.key===key){
          node.value= value;
          node.next= new _Node (key, value, null);
          this.length++;
        }
      }
  
      this._hashTable[slot] = {
        key,
        value,
        DELETED: false
      }; 
    }
    
    delete(key) {//change
      const index = this._findSlot(key);
      const slot = this._hashTable[index];
      if (slot === undefined) {
        throw new Error('Key error');
      }
      slot.DELETED = true;
      this.length--;
      this._deleted++;
    }
    
  
    _findSlot(key) {
      const hash = SeparateMap._hashString(key);
      const index = hash % this._capacity;
      // let slot = this._hashTable[index];
      // const node = new _Node(key);
       
      // if(slot === undefined){
      //   slot= node;
      //   return slot;
      // }else{
      //   return slot; 
      // }
      return index;
    }
    
  
    _resize(size) {//change
      const oldSlots = this._hashTable;
      this._capacity = size;
      this.length = 0;
      this._hashTable = [];
    
      for (const slot of oldSlots) {
        if (slot !== undefined) {
          this.set(slot.key, slot.value);
        }
      }
    }
    
    static _hashString(string) {
      let hash = 5381;
      for (let i = 0; i < string.length; i++) {
        hash = (hash << 5) + hash + string.charCodeAt(i);
        hash = hash & hash;
      }
      return hash >>> 0;
    }
    
  }
    
  module.exports = SeparateMap;