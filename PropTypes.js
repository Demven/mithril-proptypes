import {
    stringValidator,
    numberValidator,
    booleanValidator,
    objectValidator,
    arrayValidator,
    functionValidator,
} from './validators';

export default PropTypes = {
    string: {
        type: 'string',
        validator: stringValidator,
        isRequired: false,
    },
    number: {
        type: 'number',
        validator: numberValidator,
        isRequired: false,
    },
    boolean: {
        type: 'boolean',
        validator: booleanValidator,
        isRequired: false,
    },
    object: {
        type: 'object',
        validator: objectValidator,
        isRequired: false,
    },
    array: {
        type: 'array',
        validator: arrayValidator,
        isRequired: false,
    },
    function: {
        type: 'function',
        validator: functionValidator,
        isRequired: false,
    },
};