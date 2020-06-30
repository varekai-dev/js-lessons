'use strict';

const persone = {
  name: 'Alex',
  tel: '+744444',
  parents: {
    mom: 'Olga',
    dad: 'Mike',
  },
};

// console.log(JSON.stringify(persone));

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);
