var checkProps = require('./index').checkProps;
var PropTypes = require('./index').PropTypes;

var props = {
    pString: '2',
    pBoolean: true,
    pObj: { some: 1 },
    pFun: function(){},
    pArr: [1, 2, 3],
    pComplex: {
        first: 13,
        second: 'second',
        third: true
    },
    pArrayComplex: [
        {
            id: 1,
            gender: 'male',
            married: false
        },
        {
            id: '2',
            gender: 'female',
            married: true
        },
        {
            id: 3,
            gender: 'male',
            married: false
        }
    ],
};

var rules = {
    pNumber: PropTypes.number.isRequired,
    pString: PropTypes.number,
    pBoolean: PropTypes.boolean,
    pObj: PropTypes.function,
    pFun: PropTypes.function,
    pArr: PropTypes.array,
    pComplex: PropTypes.objectWith({
        first: PropTypes.number,
        second: PropTypes.string,
        third: PropTypes.boolean,
    }),
    pArrayComplex: PropTypes.arrayOf({
        id: PropTypes.number,
        gender: PropTypes.string,
        married: PropTypes.boolean,
    }),
    pAnotherArrayComplex: PropTypes.arrayOf({
        name: PropTypes.string
    }).isRequired
};

checkProps(props)(rules);