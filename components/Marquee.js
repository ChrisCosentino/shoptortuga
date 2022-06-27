import FastMarquee from 'react-fast-marquee';
import { PRODUCTS } from 'constants/products';

const Marquee = () => {
  return (
    <FastMarquee
      className='py-8'
      speed={60}
      pauseOnHover
      style={{ overflowY: 'none' }}
    >
      {PRODUCTS.map((product) => (
        <img
          src={product?.imageSrc}
          alt={product.imageAlt}
          style={{ height: 170 }}
          className='mx-3'
        />
      ))}
    </FastMarquee>
  );
};

export default Marquee;
