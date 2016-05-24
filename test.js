var checkProps = require('./index').checkProps;
var PropTypes = require('./index').PropTypes;

var props = {
    pNumber: 1,
    pString: '2',
    pBoolean: true,
    pObj: { some: 1 },
    pFun: function(){},
    pArr: [1, 2, 3],
    pComplex: {
        first: 13,
        second: 'second',
        third: true
    }
};

var rules = {
    pNumber: PropTypes.number,
    pString: PropTypes.string,
    pBoolean: PropTypes.boolean,
    pObj: PropTypes.object,
    pFun: PropTypes.function,
    pArr: PropTypes.array,
    pComplex: PropTypes.complex({
        first: PropTypes.string,
        second: PropTypes.number,
        third: PropTypes.array,
    })
};

checkProps(props)(rules);