# mithril-proptypes

Awesome lightweight library for data validation and type checking for Mithril.js inspired by React PropTypes.
You can you this library as a standalone dependency, because it doesn't have a binding with Mithril.js, though provides special tools to easy integration with Mitril.

<h2>Basic Usage</h2>
```js
import { PropTypes, checkProps } from 'mithril-proptypes';

const propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  done: PropTypes.boolean,
};

const props = {
  id: 1,
  name: 'Dmitry Salnikov',
  done: 'false'
};

checkProps(props)(propTypes);

// WARN >> PropTypes warning: Wrong prop type for "done": "string" instead of declared "boolean"

```

<h2>With ES6 classes</h2>
If you use es6 classes for mithril components, then you can do the check in the constructor for example:
```js
import { PropTypes, checkProps } from 'mithril-proptypes';

const propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  done: PropTypes.boolean,
};

class TodoItem {
  constructor(props) {
    checkProps(props)(propTypes);
    
    this.props = props;
  }
  
  view() {
    return (
      <div className="TodoItem">{this.props.name}</div>
    );
  }
}
```

<h2>MithrilComponent class</h2>
To simplify usage of such check in each mithril component you can extend from the MithrilComponent class provided by this library:
```js
import { MithrilComponent, PropTypes } from 'mithril-proptypes';

const propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  done: PropTypes.boolean,
};

class TodoItem extends MithrilComponent {
  constructor(props) {
    super(props, propTypes);
    
    this.props = props;
  }
  
  view() {
    return (
      <div className="TodoItem">{this.props.name}</div>
    );
  }
}
```
Now this check is doing by MithrilComponent.

<h2>Additional features of MithrilComponent</h2>
MithrilComponent class also adds useful lifecycle method onUnload() to your component.
This method will be called by mithril.js when this component is going to be removed from the DOM, so you can save some data for example. 
```js
import { MithrilComponent, PropTypes } from 'mithril-proptypes';

class App extends MithrilComponent {
  constructor(props) {
    super();
    
    this.props = props;
  }
  
  onUnload() {
    console.log('Component is going to be removed from the DOM');
  }
  
  view() {
    return <div className="App"></div>;
  }
}
```

<h2>Available Types</h2>
PropTypes:
* string
* number
* boolean
* function
* object
* array
* objectWith() - complex type
* arrayOf() - complex type

<h2>Complex Types</h2>
*objectWith* - is a type definition of each property of an object
*arrayOf* - is a type definition of each item of an array (each  property of object-item)
```js
var props = {
    someObject: {
        first: 13,
        second: 'second',
        third: true
    },
    someArray: [
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

var propTypes = {
    someObject: PropTypes.objectWith({
        first: PropTypes.number,
        second: PropTypes.string,
        third: PropTypes.boolean,
    }),
    someArray: PropTypes.arrayOf({
        id: PropTypes.number,
        gender: PropTypes.string,
        married: PropTypes.boolean,
    }).isRequired,
};

```

<h2>Required Props</h2>
Is some property is 'required' by the data doesn't contain this property - then check will print error.
To mark some prop as required you can add '.isRequired' to each prop type:
```js
var props = {};

var propTypes = {
    someProp: PropTypes.number.isRequired,
};

checkProps(props)(propTypes);
// ERROR >> PropTypes warning: data for the required prop someProp is absent!

```

<h2>Install</h2>

At first - <a href="https://nodejs.org/en/download/">download and install Node.js</a> if you need. It contains own package-manager - NPM.
Then run npm to install all necessary dependencies

```shell
npm install mithril-proptypes --save
```

<h2>Use with Node.js</h2>
```js
var checkProps = require('mithril-proptypes').checkProps;

// ...

checkProps(props)(proptypes);
```
