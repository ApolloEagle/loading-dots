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
  <table>
    <tr>
      <th>Pulse</th>
      <th>Elastic</th>
      <th>Flashing</th>
      <th>Typing</th>
    </tr>
    <tr>
      <td valign="top"><img src="https://github.com/ApolloEagle/loading-dots/blob/main/src/assets/pulse.gif" height="50px" /></td>
      <td valign="top"><img src="https://github.com/ApolloEagle/loading-dots/blob/main/src/assets/elastic.gif" height="50px" /></td>
      <td valign="top"><img src="https://github.com/ApolloEagle/loading-dots/blob/main/src/assets/flashing.gif" height="50px" /></td>
      <td valign="top"><img src="https://github.com/ApolloEagle/loading-dots/blob/main/src/assets/typing.gif" height="50px" /></td>
    </tr>
  </table>
  <p>A component to display loading dots for React Native applications.</p>
  <p>Stylings inspired by <a href="https://github.com/nzbin/three-dots" target="_blank">@nzbin/three-dots</a></p>
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

| Props   | Type   | Default | Description                                                                 |
| ------- | ------ | ------- | --------------------------------------------------------------------------- |
| style   | String | 'pulse' | Animation style. Available styles: `pulse`, `elastic`, `flashing`, `typing` |
| dots    | Number | 3       | Number of dots displayed                                                    |
| color   | String | 'black' | Color of dots                                                               |
| size    | Number | 10      | Size of dots                                                                |
| spacing | Number | 2       | Space between dots                                                          |
