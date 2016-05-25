var validators = require('./validators');

module.exports = {
    string: {
        type: 'string',
        name: '"string"',
        validator: validators.stringValidator,
        isRequired: false,
    },
    number: {
        type: 'number',
        name: '"number"',
        validator: validators.numberValidator,
        isRequired: false,
    },
    boolean: {
        type: 'boolean',
        name: '"boolean"',
        validator: validators.booleanValidator,
        isRequired: false,
    },
    object: {
        type: 'object',
        name: '"object"',
        validator: validators.objectValidator,
        isRequired: false,
    },
    array: {
        type: 'array',
        name: '"array"',
        validator: validators.arrayValidator,
        isRequired: false,
    },
    function: {
        type: 'function',
        name: '"function"',
        validator: validators.functionValidator,
        isRequired: false,
    },

    objectWith: function(rules) {
        return {
            type: 'complex',
            name: 'complex type "objectWith"',
            validator: validators.objectWithValidator,
            rules: rules,
            isRequired: false,
        };
    },

    arrayOf: function(rules) {
        return {
            type: 'complex',
            name: 'complex type "arrayOf"',
            validator: validators.arrayOfValidator,
            rules: rules,
            isRequired: false,
        };
    }
};