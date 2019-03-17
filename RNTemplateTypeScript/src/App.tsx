import * as React from "react";

import AppNavigator from "./AppNav";

export default class App extends React.Component<{}> {
  public render() {
    return (
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    );
  }
}
