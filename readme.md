### JSX [Milligram](http://milligram.io/) wrapper

*doesnt include 'milligram.css'*

from consumer

    '@import '~milligram/dist/milligram.css';
    
or directly into "index.html"

    <link src-"somewhere/milligram.css"/>

Usage: 
```
import { Button } from "milligrami"

const App = () => (
    <div>
        <Button> OK </Button>
        <Button outline> Outline </Button>
        <Button clear> Clear </Button>
    </div>
);
```
Note: All elements are doing pretty much the same,   

- props are passed down to (in this case) the <code><button\/\></code> Tag   
only the <code>className</code> is appended with the respective Milligram css-class

        <Button  type="submit" outline className="extra-class"/>

should render 

    <button type-"submit" class="extra-class button button-outline">
        <!-- children ? -->
    <button>

    


### Compatibillity 
it works on my computer