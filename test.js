var checkProps = require('./index').checkProps;
var PropTypes = require('./index').PropTypes;

var props = {
    pNumber: 1,
    pString: '2',
    pBoolean: true,
    pObj: { some: 1 },
    pFun: function(){},
    pArr: [1, 2, 3]
};

var rules = {
    pNumber: PropTypes.object,
    pString: PropTypes.boolean,
    pBoolean: PropTypes.boolean,
    pObj: PropTypes,
    pFun: PropTypes.function,
};

console.log('test', rules['pNumber']);

checkProps(props)(rules);