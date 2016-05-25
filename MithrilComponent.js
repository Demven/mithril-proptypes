var checkProps = require('./check');

var MithrilComponent = function MithrilComponent(props, propTypes) {
    checkProps(props)(propTypes);

    var self = this;

    this.controller = function () {
        return {
            onunload: self.onUnload || function () {}
        };
    };
};

module.exports = MithrilComponent;