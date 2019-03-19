import * as React from "react";

import { ITheme, ThemeContext } from "./ThemeProvider";

export default function withTheme<P extends object>(C: React.ComponentType<P>) {
  return class ThemedComp extends React.PureComponent<P & ITheme> {
    public render() {
      const { props } = this;
      return (
        <ThemeContext.Consumer>
          {theme => <C {...{ theme }} {...props as P} />}
        </ThemeContext.Consumer>
      );
    }
  };
}
