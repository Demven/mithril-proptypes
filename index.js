var PropTypes = require('./PropTypes');

function getType(prop) {
    var type = typeof prop;
    if (type === 'object' && prop instanceof Array) {
        type = 'array';
    }
    return type;
}

function checkProps(props) {
    return function (rules) {
        for (var propName in props) {
            if (props.hasOwnProperty(propName)) {
                var prop = props[propName];
                var rule = rules[propName];

                if(rule){
                    if (rule.validator) {
                        if (!rule.validator(prop)) {
                            console.warn('Wrong prop type for "' + propName + '" ("' + getType(prop) + '" instead of declared "' + rule.type + '")');
                        }
                    } else {
                        console.warn('No chosen prop type for prop with name "' + propName + '"');
                    }
                } else {
                    console.warn('There is no prop type specified for prop with name "' + propName + '"');
                }
            }
        }
    }
}

module.exports = {
    PropTypes: PropTypes,
    checkProps: checkProps
};