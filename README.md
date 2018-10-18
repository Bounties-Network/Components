# Bounties Network Components

React components library built for the [Bounty Explorer](explorer.bounties.network).
See a live preview at https://components.bounties.network.

## Installation

The components library is available as a npm package.

```
// with npm
npm install @bounties-network/components

// with yarn
yarn add @bounties-network/components
```

Additionally, the components stylesheet will need to be imported manually into your root
scss stylesheet.

```
// styles.scss
@import "~components/lib/static/css/main.css";
```

## Usage

Here is short example to get started:

```
import React from "react";
import ReactDOM from "react-dom";
import Text from "@bounties-network/components";

function App() {
  return (
    <Text color="red">
      Hello World
    </Text>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
```
