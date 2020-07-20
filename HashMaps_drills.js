  
const Hashmap = require('./hashmap');
const SeparateMap = require('./separateMap');

function removeDuplicates(str){
  const newStr = new Hashmap;
  let final='';
  for(let i = 0; i < str.length; i++){
    newStr.set(str.charAt(i),str.charAt(i));
  }

  for(let i = 0; i < str.length; i++){
    if(true===newStr.has(str.charAt(i))){
      final += newStr.get(str.charAt(i));
      newStr.delete(str.charAt(i));
    }
  }
  return final;
}

function permutation(str){
  const map = new Hashmap;
  let count = 0;

  for(let i=0; i <str.length; i++){
    if(map.has(str[i])===true){
      map.set(str[i], map.get(str[i])+1);
    }else{
      map.set(str[i], 1);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) % 2 === 1){
      count ++;
    }
  }
  return (count < 2)? true : false;
}

function grouping(arr){
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].split('').sort().join('');
    const group = map.get(current) || [];
    map.set(current,[...group, arr[i]]);
  }
  return Array.from(map.values());
}

function main(){
  Hashmap.MAX_LOAD_RATIO = 0.5;
  Hashmap.SIZE_RATIO = 3;

  const lotr = new Hashmap;
  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');

  console.log(lotr);
  //lenght 9 repeted key arent showing up only the last pair value appears
  console.log(lotr.get('Maiar'));
  console.log(lotr.get('Hobbit'));
  //only the last pair value is appearing
  //capacity: 24

  //2. WhatDoesThisDo
  //answer:creates 2 maps sets 2 key value pairs for each map but since all the keys are the same only the last value pair 
  // appears when both hash maps are called

  //3.  Demonstrate understanding of Hash maps

  //4. Remove duplicates
  console.log('//////////////4. Remove duplicates///////////////');
  console.log(removeDuplicates('google'));
  console.log(removeDuplicates('google all that you think can think of'));
  //5. Any permutation a palindrome
  console.log('//////////////5. Any permutation a palindrome///////////////');
  console.log(permutation('acecarr'));
  console.log(permutation('north'));
  console.log(permutation('jkhkj'));

  //6. Anagram grouping
  console.log('//////////////6. Anagram grouping///////////////');
  console.log(grouping(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));

  //7. Separate Chaining
  console.log('//////////////7. Separate Chaining///////////////');
  const lotr2 = new SeparateMap;
  lotr2.set('Hobbit', 'Bilbo');
  lotr2.set('Hobbit', 'Frodo');
  lotr2.set('Wizard', 'Gandalf');
  lotr2.set('Human', 'Aragorn');
  lotr2.set('Elf', 'Legolas');
  lotr2.set('Maiar', 'The Necromancer');
  lotr2.set('Maiar', 'Sauron');
  lotr2.set('RingBearer', 'Gollum');
  lotr2.set('LadyOfLight', 'Galadriel');
  lotr2.set('HalfElven', 'Arwen');
  lotr2.set('Ent', 'Treebeard');

  console.log(lotr2);
  //lenght 9 repeted key arent showing up only the last pair value appears
  console.log(lotr2.get('Maiar'));
  console.log(lotr2.get('Hobbit'));
  //only the last pair value is appearing
  //capacity: 24
}

const mainRun = main();