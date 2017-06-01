### logic free, just a React [Milligram](http://milligram.io/) wrapper  

*doesnt include 'milligram.css'*

If from webpack build, ...from consumer 

    '@import '~milligram/dist/milligram.css';
or directly into "index.html"

    <link src-"somewhere/milligrame.css"/>


consume as 
import { [ElementName] }  from "milligrami/lib/[element-name]"

### Building   
Webpack'ed:  <code>npm run pack</code>  

Built:  <code>npm run build </code>