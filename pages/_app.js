import { CartProvider } from 'contexts/CartContext';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import SEO from 'components/SEO';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
      </CartProvider>

      <Footer />
    </>
  );
}

export default MyApp;
