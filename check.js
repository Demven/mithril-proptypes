function getType(prop) {
    var type = typeof prop;
    if (type === 'object' && prop instanceof Array) {
        type = 'array';
    }
    return type;
}

function throwError(msg) {
    throw new Error(msg);
}

module.exports = function checkProps(props, isComplex) {
    var errorMethod = isComplex ? throwError : console.warn;
    return function (rules) {
        for (var propName in props) {
            if (props.hasOwnProperty(propName)) {
                var prop = props[propName];
                var rule = rules[propName];

                if(rule){
                    if (rule.validator) {
                        if (!rule.validator(prop, propName)) {
                            if (rule.type !== 'complex') {
                                // for complex types the validator itself will notify about errors
                                errorMethod('Wrong prop type for "' + propName + '" ("' + getType(prop) + '" instead of declared "' + rule.type + '")');
                            }
                        }
                    } else {
                        errorMethod('No chosen prop type for prop with name "' + propName + '"', propName)();
                    }
                } else {
                    errorMethod('There is no prop type specified for prop with name "' + propName + '"', propName)();
                }
            }
        }
    }
};