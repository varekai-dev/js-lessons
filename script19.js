'use strict';

const log = function (a, b, ...rest) {
  console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis) {
  basis = basis || 3;
  console.log(number * basis);
}

calcOrDouble(3, 2);
