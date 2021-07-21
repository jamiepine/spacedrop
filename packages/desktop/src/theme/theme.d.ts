// import original module declarations
import 'styled-components';
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    primaryFaint: string;
    background: string;
    sidebar: string;
    text: string;
    button: string;
    buttonFaint: string;
    border: string;
    borderFaint: string;
    borderDark: string;
    textFaint: string;
    textOuter: string;
  }
}
