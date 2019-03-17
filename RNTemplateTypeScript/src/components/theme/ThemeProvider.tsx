import * as React from "react";
import { IThemeColor } from "./Colors";
import styleGuide, { IPalette, IStyleGuide } from "./StyleGuide";

interface ISubPal {
  primary: string;
  secondary: string;
}

type ITheme = {
  palette: ISubPal & IPalette;
} & IStyleGuide;

interface IThemeProviderProps {
  children: JSX.Element;
}

interface IThemeProviderState {
  theme: ITheme;
}

const ThemeContext = React.createContext({});

class ThemeProvider extends React.Component<
  IThemeProviderProps,
  IThemeProviderState
> {
  public static instance: ThemeProvider | null = null;

  public static getInstance(): ThemeProvider {
    if (!ThemeProvider.instance) {
      throw new Error("ThemeProvider is not mounted yet.");
    }
    return ThemeProvider.instance;
  }

  public state = {
    theme: {
      palette: {
        primary: "#00A5FF",
        secondary: "#e3f7ff",
        ...styleGuide.palette
      },
      typography: { ...styleGuide.typography },
      spacing: { ...styleGuide.spacing },
      styles: { ...styleGuide.styles }
    }
  };

  public componentDidMount() {
    if (ThemeProvider.instance !== null) {
      throw new Error("Only one ThemeProvider is allowed to be used.");
    }
    ThemeProvider.instance = this;
  }

  public switchColors(colors: IThemeColor) {
    const { palette, typography, spacing, styles } = this.state.theme;
    palette.primary = colors.primary;
    palette.secondary = colors.secondary;
    this.setState({ theme: { palette, typography, spacing, styles } });
  }

  public rendr() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
