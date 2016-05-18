function getType(prop) {
    let type = typeof prop;
    if (type === 'object' && prop instanceof Array) {
        type = 'array';
    }
    return type;
}

export default function checkProps(props) {
    return (rules) => {
        for (const propName in props) {
            if (props.hasOwnProperty(propName)) {
                console.info('----');
                console.info('propName', propName);

                const prop = props[propName];
                const rule = rules[propName];

                console.info('rule', rule );

                if(rule){
                    if (rule.validator) {
                        if (!rule.validator(prop)) {
                            console.warn('Wrong prop type for "' + propName + '" ("' + getType(prop) + '" instead of declared "' + rule.type + '")');
                        }
                    } else {
                        console.warn('No chosen prop type for prop with name "' + propName + '"');
                    }
                } else {
                    console.warn('No props declaration for prop with name "' + propName + '"');
                }
            }
        }
    }
}