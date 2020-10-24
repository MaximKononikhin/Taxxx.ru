import { wrapper } from '../Store/reducer';
import '../styles/globals.scss'



const MyApp = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp);
