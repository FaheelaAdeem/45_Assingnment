"use strict";
function storecarinfo(manufacture, modelName, ...extraOption) {
    const carinfo = Object.assign({ manufacture,
        modelName }, Object.assign({}, ...extraOption));
    return carinfo;
}
;
let answer = storecarinfo('Honda', 'civic', { colour: 'black' }, { features: ['Navigation', 'power window'] });
console.log(answer);
