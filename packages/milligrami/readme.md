# Milligrami

Is a React [Milligram](http://milligram.io/) wrapper

## Install:

    # yarn add milligrami

OR

    # npm i milligrami

OR

    # <script
        src="https://unpkg.com/milligrami@0.3.1/lib/umd/miliigrami.min.js"
        ></script>

### Batteries not included

_doesnt include 'milligram.css'_

From consumer

    '@import '~milligram/dist/milligram.css';

or directly into "index.html"

    <link src-"somewhere/milligram.css"/>

Usage:

### @see: [Milligrami-demo](packages/milligrami-demo)

    import { Button } from "milligrami"

    const App = () => (
        <div>
            <Button> OK </Button>
            <Button outline> Outline </Button>
            <Button clear> Clear </Button>
        </div>
    );

Note:
All elements are doing pretty much the same,
On a simplistic approach

- props are passed down to (in this case) the <code><button\/\></code> Tag
  only the <code>className</code> is appended with the respective Milligram css-class

          <Button  type="submit" outline className="extra-class"/>

should render

    <button type-"submit" class="extra-class button button-outline">
        <!-- children ? -->
    <button>

### Building

    #cd packages/milligrami
    $npm run build

### Testing

    #cd packages/milligrami
    $npm run test

### Compatibillity

\`as in 2018's of "it works on my computer"`... should work in Chrome`
