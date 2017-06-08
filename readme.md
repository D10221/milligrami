### React [Milligram](http://milligram.io/) wrapper, with types

*doesnt include 'milligram.css'*

from consumer

    '@import '~milligram/dist/milligram.css';
or directly into "index.html"

    <link src-"somewhere/milligram.css"/>


Usage: 
### @see: [Milligrami-demo](https://github.com/D10221/milligrami-demo)

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

        <Button  type="submit" outline/>
        // will also apply .button.submit css rule
    

### Building   

    $npm run build # builds debug/development
    $npm run build:lib # builds es6 targeted library
    $npm run build:bundle # builds webpacke'd umd bundle 


### Testing

    $npm run test


### Compatibillity 
``as in 2017's of 'it works on my computer'` ... should work in Chrome`