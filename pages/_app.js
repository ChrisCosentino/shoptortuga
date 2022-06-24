import { CartProvider } from 'contexts/CartContext';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
      </CartProvider>

      <Footer />
    </>
  );
}

export default MyApp;
