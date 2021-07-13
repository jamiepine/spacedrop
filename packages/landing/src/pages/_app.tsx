import { AppProps } from 'next/app';

import 'semantic-ui-css/semantic.min.css';

// import 'semantic-ui-css/themes/default/assets/fonts';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default MyApp;
