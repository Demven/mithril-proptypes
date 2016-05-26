var checkProps = require('./check');
var replaceWithDefaults = require('./defaults');

var MithrilComponent = function MithrilComponent(props, propTypes, defaultProps) {
    this.props = props;

    if (this.props && propTypes) {
        checkProps(this.props)(propTypes);
    }

    if (defaultProps) {
        replaceWithDefaults(this.props, defaultProps);
    }

    var self = this;

    this.controller = function () {
        return {
            onunload: self.onUnload || function () {}
        };
    };
};

module.exports = MithrilComponent;