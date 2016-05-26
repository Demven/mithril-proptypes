var checkProps = require('./check');
var replaceWithDefaults = require('./defaults');

var MithrilComponent = function MithrilComponent(props, propTypes, defaultProps) {
    this.props = props;

    checkProps(this.props)(propTypes);
    replaceWithDefaults(this.props, defaultProps);

    var self = this;

    this.controller = function () {
        return {
            onunload: self.onUnload || function () {}
        };
    };
};

module.exports = MithrilComponent;