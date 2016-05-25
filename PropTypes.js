var validators = require('./validators');

module.exports = {
    string: {
        _type: 'string',
        _name: '"string"',
        _validator: validators.stringValidator,
        _required: false,
        isRequired: {
            _type: 'string',
            _name: '"string"',
            _validator: validators.stringValidator,
            _required: true,
        },
    },
    number: {
        _type: 'number',
        _name: '"number"',
        _validator: validators.numberValidator,
        _required: false,
        isRequired: {
            _type: 'number',
            _name: '"number"',
            _validator: validators.numberValidator,
            _required: true,
        },
    },
    boolean: {
        _type: 'boolean',
        _name: '"boolean"',
        _validator: validators.booleanValidator,
        _required: false,
        isRequired: {
            _type: 'boolean',
            _name: '"boolean"',
            _validator: validators.booleanValidator,
            _required: true,
        },
    },
    object: {
        _type: 'object',
        _name: '"object"',
        _validator: validators.objectValidator,
        _required: false,
        isRequired: {
            _type: 'object',
            _name: '"object"',
            _validator: validators.objectValidator,
            _required: true,
        },
    },
    array: {
        _type: 'array',
        _name: '"array"',
        _validator: validators.arrayValidator,
        _required: false,
        isRequired: {
            _type: 'array',
            _name: '"array"',
            _validator: validators.arrayValidator,
            _required: true,
        },
    },
    function: {
        _type: 'function',
        _name: '"function"',
        _validator: validators.functionValidator,
        _required: false,
        isRequired: {
            _type: 'function',
            _name: '"function"',
            _validator: validators.functionValidator,
            _required: true,
        },
    },

    objectWith: function(rules) {
        return {
            _type: 'complex',
            _name: 'complex type "objectWith"',
            _validator: validators.objectWithValidator,
            _rules: rules,
            _required: false,
            isRequired: {
                _type: 'complex',
                _name: 'complex type "objectWith"',
                _validator: validators.objectWithValidator,
                _rules: rules,
                _required: true,
            },
        };
    },

    arrayOf: function(rules) {
        return {
            _type: 'complex',
            _name: 'complex type "arrayOf"',
            _validator: validators.arrayOfValidator,
            _rules: rules,
            _required: false,
            isRequired: {
                _type: 'complex',
                _name: 'complex type "arrayOf"',
                _validator: validators.arrayOfValidator,
                _rules: rules,
                _required: true,
            },
        };
    }
};