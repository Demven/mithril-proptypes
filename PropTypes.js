var validators = require('./validators');

module.exports = {
    string: {
        type: 'string',
        validator: validators.stringValidator,
        isRequired: false,
    },
    number: {
        type: 'number',
        validator: validators.numberValidator,
        isRequired: false,
    },
    boolean: {
        type: 'boolean',
        validator: validators.booleanValidator,
        isRequired: false,
    },
    object: {
        type: 'object',
        validator: validators.objectValidator,
        isRequired: false,
    },
    array: {
        type: 'array',
        validator: validators.arrayValidator,
        isRequired: false,
    },
    function: {
        type: 'function',
        validator: validators.functionValidator,
        isRequired: false,
    },
};