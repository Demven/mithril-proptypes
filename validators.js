export function objectValidator(obj) {
    return typeof obj === 'object';
}

export function functionValidator(obj) {
    return typeof obj === 'function';
}

export function arrayValidator(arr) {
    return arr instanceof Array;
}

export function booleanValidator(num) {
    return typeof num === 'boolean';
}

export function numberValidator(num) {
    return typeof num === 'number';
}

export function stringValidator(str) {
    return typeof str === 'string';
}