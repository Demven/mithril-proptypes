function replaceWithDefaults(props, defaultProps) {
    for (var propName in props) {
        if (props.hasOwnProperty(propName)) {
            var prop = props[propName];

            if (prop === undefined) {
                prop = defaultProps[propName];
            }
        }
    }
}

module.exports = replaceWithDefaults;