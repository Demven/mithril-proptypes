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

function objectWithValidator(object, propName) {
    var passed = false;
    
    if (objectValidator(object) && this._rules && objectValidator(this._rules)) {
        passed = checkProps(object, propName)(this._rules);
    }

    return passed;
}

function arrayOfValidator(array, propName) {
    var passed = true,
        withoutError = false;

    if (arrayValidator(array) && this._rules && objectValidator(this._rules)) {
        var arrayItem,
            i = 0,
            len = array.length;

        if (len === 0) {
            passed = false;
            console.warn('PropTypes warning: array ' + propName + ' is empty');
        }

        for( ; i < len; i++) {
            arrayItem = array[i];

            if (!objectValidator(arrayItem)) {
                passed = false;
                console.warn('PropTypes warning: array ' + propName + ' contains non-object element!', arrayItem);
                break;
            }


            withoutError = checkProps(arrayItem, propName)(this._rules);

            if (!withoutError) {
                console.warn('Check array item with index = ' + i, arrayItem);
                passed = false;
            }
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
    objectWithValidator: objectWithValidator,
    arrayOfValidator: arrayOfValidator,
};