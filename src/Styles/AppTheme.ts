const AppTheme = {
  colors: {
    primaryColor: "Blue",
    secondaryColor: "Red",
    primaryTextColor: "white",
    secondaryTextColor: "Blue",
  },
  borders: {
    primaryBorder: "1px solid red",
    secodaryBorder: "1px solid green",
  },
  borderRadius: {
    buttonRadius: "5px",
  },
};

export type ThemeType = typeof AppTheme;

export default AppTheme;
