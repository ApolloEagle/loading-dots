<div align="center">
  <p>
     <h1 align="center" style="color:red;">
       <a href="https://www.npmjs.com/package/@apolloeagle/loading-dots" target="_blank">
       @apolloeagle/loading-dots</a>
     </h1>
  </p>
  <img alt="npm" src="https://img.shields.io/npm/v/@apolloeagle/loading-dots">
  <img alt="npm" src="https://img.shields.io/npm/dt/@apolloeagle/loading-dots">
  <img alt="GitHub" src="https://img.shields.io/github/license/ApolloEagle/loading-dots">
</div>
<br />

<div align="center">
  <img src="https://github.com/ApolloEagle/loading-dots/blob/main/src/assets/dots.gif" height="100px" />
  <p>A component to display loading dots for React Native applications.</p>
  <p>Examples: <a href="https://codesandbox.io/s/interesting-dewdney-xkez8v">CodeSandbox.io</a></p>
  <p>Animations inspired by <a href="https://github.com/nzbin/three-dots" target="_blank">@nzbin/three-dots</a></p>
</div>

## Installation

```sh
npm i @apolloeagle/loading-dots
```

## Usage

```js
import React from "react";
import { View, StyleSheet } from "react-native";
import LoadingDots from "@apolloeagle/loading-dots"; // <---- Import package

const Page = () => {
  return (
    <View style={styles.container}>
      <LoadingDots /> {/* <---- Add component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

## Styling Options

A list of available props to pass into the `<LoadingProps />` component:

| Props     | Type   | Default | Units | Description                                                                                   |
| --------- | ------ | ----------------- | ----- | ----------------------------------------------------------------------------------- |
| animation | String | 'elastic'         | n/a   | Animation style. Available styles: `pulse`, `elastic`, `flashing`, `typing`, `ping` |
| dotNumber | Number | 3                 | n/a   | Number of dots displayed                                                            |
| color     | String | rgb(25,203,229)   | n/a   | Color of dots                                                                       |
| size      | Number | 20                | px    | Size of dots                                                                        |
| spacing   | Number | 7                 | px    | Space between dots                                                                  |
| delay     | Number | 250               | ms    | Time between dot rendering                                                          |
| duration  | Number | 400               | ms    | Time of animation                                                                   |
