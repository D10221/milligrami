### React [Milligram](http://milligram.io/) wrapper, with types

*doesnt include 'milligram.css'*

from consumer

    '@import '~milligram/dist/milligram.css';
or directly into "index.html"

    <link src-"somewhere/milligram.css"/>


Usage: 

    import { Button } from "milligrami"
    
    const App = () => (
        <div>
            <Button> OK </Button>
            <Button outline> Outline </Button>
            <Button clear> Clear </Button>
        </div>
    );


Notes:
- props are passed down to (in this case) the <code><button\/\></code> Tag   
only the <code>className</code> is appended with the respective Milligram css-class
    

### Building   

    $npm run build

"+only 1 target, typescript/es6, commonjs modules."


### Testing

    $npm run test


### Mini demo with electron (prebuilt)

    $npm run start 

### Compatibillity 
``as in 2017's of 'it works on my computer'` ... should work in Chrome`