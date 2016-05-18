function objectValidator(obj) {
    console.log('objectValidator');
    return typeof obj === 'object';
}

function functionValidator(obj) {
    console.log('functionValidator');
    return typeof obj === 'function';
}

function arrayValidator(arr) {
    console.log('arrayValidator');
    return arr instanceof Array;
}

function booleanValidator(num) {
    console.log('booleanValidator');
    return typeof num === 'boolean';
}

function numberValidator(num) {
    console.log('numberValidator');
    return typeof num === 'number';
}

function stringValidator(str) {
    console.log('stringValidator');
    return typeof str === 'string';
}

module.exports = {
    objectValidator: objectValidator,
    functionValidator: functionValidator,
    arrayValidator: arrayValidator,
    booleanValidator: booleanValidator,
    numberValidator: numberValidator,
    stringValidator: stringValidator,
};