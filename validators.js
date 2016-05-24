function objectValidator(obj) {
    return typeof obj === 'object';
}

function functionValidator(obj) {
    return typeof obj === 'function';
}

function arrayValidator(arr) {
    return arr instanceof Array;
}

function booleanValidator(num) {
    return typeof num === 'boolean';
}

function numberValidator(num) {
    return typeof num === 'number';
}

function stringValidator(str) {
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