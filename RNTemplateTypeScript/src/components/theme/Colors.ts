export type IThemeName = "Default" | "Classic";

export interface IThemeColor {
  primary: string;
  secondary: string;
}

export type IThemeColors = { [name in IThemeName]: IThemeColor };

const Colors: IThemeColors = {
  Default: {
    primary: "#FF9300",
    secondary: "#fff4e5"
  },
  Classic: {
    primary: "#00A5FF",
    secondary: "#e3f7ff"
  }
};

export default Colors;
