var checkProps = require('./check');

function objectValidator(obj) {
    return typeof obj === 'object' && !(obj instanceof Array);
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

function complexValidator(props, propName) {
    var passed = false;
    
    if (objectValidator(props) && this.rules && objectValidator(this.rules)) {
        try {
            checkProps(props, true)(this.rules);
            passed = true;
        } catch (e) {
            console.warn('> Complex prop declarations errors for ' + propName + ':');
            console.warn(e.message);
            passed = false;
        }
    }

    return passed;
}

module.exports = {
    objectValidator: objectValidator,
    functionValidator: functionValidator,
    arrayValidator: arrayValidator,
    booleanValidator: booleanValidator,
    numberValidator: numberValidator,
    stringValidator: stringValidator,
    complexValidator: complexValidator,
};