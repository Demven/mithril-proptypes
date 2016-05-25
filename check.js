function getType(prop) {
    var type = typeof prop;
    if (type === 'object' && prop instanceof Array) {
        type = 'array';
    }
    return type;
}

function checkRequiredProps(props, rules) {
    var passed = true;

    for (var ruleName in rules) {
        if (rules.hasOwnProperty(ruleName)) {
            var rule = rules[ruleName];
            var prop = props[ruleName];

            if (rule._required && prop === undefined) {
                passed = false;

                console.error('PropTypes warning: data for the required prop ' + ruleName + ' is absent!');
            }
        }
    }

    return passed;
}

module.exports = function checkProps(props, complexName) {
    return function (rules) {
        var hasErrors = false;
        var msgs = [];

        for (var propName in props) {
            if (props.hasOwnProperty(propName)) {
                var prop = props[propName];
                var rule = rules[propName];

                if(rule){
                    if (rule._validator) {
                        if (!rule._validator(prop, propName)) {
                            if (rule._type !== 'complex') {
                                hasErrors = true;
                                var validatorMsg = 'PropTypes warning: Wrong prop type for "' + propName + '": "' + getType(prop) + '" instead of declared ' + rule._name;

                                if (complexName) {
                                    // for complex type = accumulate all errors in an array
                                    msgs.push(validatorMsg);
                                } else {
                                    console.warn(validatorMsg);
                                }
                            }
                        }
                    } else {
                        hasErrors = true;

                        var noTypeMsg = 'PropTypes warning: No chosen prop type for prop with name "' + propName + '"';

                        if (complexName) {
                            // for complex type = accumulate all errors in an array
                            msgs.push(noTypeMsg);
                        } else {
                            console.warn(noTypeMsg);
                        }

                    }
                } else {
                    hasErrors = true;

                    var noRuleMsg = 'PropTypes warning: There is no prop rule specified for prop with name "' + propName + '"';

                    if (complexName) {
                        // for complex type = accumulate all errors in an array
                        msgs.push(noRuleMsg);
                    } else {
                        console.warn(noRuleMsg);
                    }
                }
            }
        }

        if (complexName && hasErrors) {
            console.warn('> PropTypes warning: Complex prop declarations errors for ' + complexName + ':');
            console.warn(msgs.join('\n'));
        }

        checkRequiredProps(props, rules);

        return !hasErrors;
    }
};