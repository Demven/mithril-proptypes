function replaceWithDefaults(props, defaultProps) {
    for (var defaultPropName in defaultProps) {
        if (defaultProps.hasOwnProperty(defaultPropName)) {
            var defaultProp = defaultProps[defaultPropName];
            var propToReplaceValue = props[defaultPropName];

            if (propToReplaceValue === undefined) {
                props[defaultPropName] = defaultProp;
            }
        }
    }
}

module.exports = replaceWithDefaults;