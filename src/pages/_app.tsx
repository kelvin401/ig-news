import { AppProps } from 'next/app';
import { Header } from '../components/Header'
import { Provider as NextAuthProvidedr } from 'next-auth/client';

import '../styles/global.scss';


function MyApp({ Component, pageProps }: AppProps ){
  return (
    <NextAuthProvidedr session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvidedr>
  )
}

export default MyApp
