import PropTypes from 'prop-types';
import { PRODUCTS } from 'constants/products';
import ColorButtons from 'components/ColorButtons';
import BackIcon from 'assets/BackIcon';
import Link from 'next/link';
import useCart from 'contexts/CartContext';
import QuantityStepper from 'components/QuantityStepper';

export async function getServerSideProps(context) {
  const { id } = context.query;

  const product = PRODUCTS.find((p) => p.id === parseInt(id));

  return {
    props: {
      id,
      product,
    },
  };
}

// id: 1,
//     name: 'Basic Tee',
//     href: '#',
//     imageSrc:
//       'https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/729274c1_6c0d.jpg',
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'Black',

const ProductDetails = ({ product }) => {
  const { addItemToCart } = useCart();

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className='max-w-[1232px] ml-auto mr-auto p-8 pt-4'>
      <Link href='/products'>
        <a className='btn btn-ghost mb-4'>
          <BackIcon /> Back
        </a>
      </Link>

      <div className='flex gap-6'>
        <div className='flex-1 '>
          <img src={product.imageSrc} alt='imageAlt' className='rounded-lg' />
        </div>

        <div className='flex-1'>
          <h1 className='font-bold text-3xl mb-2'>Everyday Ruck Snack</h1>
          <h3 className='text-3xl mb-8'>$140</h3>

          <p className='text-slate-600'>{product.description}</p>

          <div className='mt-8 mb-16 flex gap-12'>
            <div>
              <p className='text-slate-600 text-sm mb-1'>Color</p>
              <ColorButtons />
            </div>
            <div>
              <p className='text-slate-600 text-sm mb-1'>Quantity</p>
              <QuantityStepper />
            </div>
          </div>

          <button
            onClick={() => handleAddToCart()}
            className='btn btn-primary btn-block'
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.instanceOf(Object),
};

ProductDetails.defaultProps = {
  product: null,
};

// const ProductDetails = ({ product }) => {
//   return (
//     <div className='md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4'>
//       <div className='xl:w-2/6 lg:w-2/5 w-80 md:block hidden'>
//         <img
//           className='w-full'
//           alt='image of a girl posing'
//           src='https://i.ibb.co/QMdWfzX/component-image-one.png'
//         />
//         <img
//           className='mt-6 w-full'
//           alt='image of a girl posing'
//           src='https://i.ibb.co/qxkRXSq/component-image-two.png'
//         />
//       </div>
//       <div className='md:hidden'>
//         <img
//           className='w-full'
//           alt='image of a girl posing'
//           src='https://i.ibb.co/QMdWfzX/component-image-one.png'
//         />
//         <div className='flex items-center justify-between mt-3 space-x-4 md:space-x-0'>
//           <img
//             alt='image-tag-one'
//             className='md:w-48 md:h-48 w-full'
//             src='https://i.ibb.co/cYDrVGh/Rectangle-245.png'
//           />
//           <img
//             alt='image-tag-one'
//             className='md:w-48 md:h-48 w-full'
//             src='https://i.ibb.co/f17NXrW/Rectangle-244.png'
//           />
//           <img
//             alt='image-tag-one'
//             className='md:w-48 md:h-48 w-full'
//             src='https://i.ibb.co/cYDrVGh/Rectangle-245.png'
//           />
//           <img
//             alt='image-tag-one'
//             className='md:w-48 md:h-48 w-full'
//             src='https://i.ibb.co/f17NXrW/Rectangle-244.png'
//           />
//         </div>
//       </div>
//       <div className='xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6'>
//         <div className='border-b border-gray-200 pb-6'>
//           <p className='text-sm leading-none text-gray-600 dark:text-gray-300 '>
//             Balenciaga Fall Collection
//           </p>
//           <h1 className='lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2'>
//             Balenciaga Signature Sweatshirt
//           </h1>
//         </div>
//         <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
//           <p className='text-base leading-4 text-gray-800 dark:text-gray-300'>
//             Colours
//           </p>
//           <div className='flex items-center justify-center'>
//             <p className='text-sm leading-none text-gray-600 dark:text-gray-300'>
//               Smoke Blue with red accents
//             </p>
//             <div className='w-6 h-6 bg-gradient-to-b from-gray-900 to-indigo-500 ml-3 mr-4 cursor-pointer'></div>
//             <img
//               className='dark:hidden'
//               src='https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg2.svg'
//               alt='next'
//             />
//             <img
//               className='hidden dark:block'
//               src='https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg2dark.svg'
//               alt='next'
//             />
//           </div>
//         </div>
//         <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
//           <p className='text-base leading-4 text-gray-800 dark:text-gray-300'>
//             Size
//           </p>
//           <div className='flex items-center justify-center'>
//             <p className='text-sm leading-none text-gray-600 dark:text-gray-300 mr-3'>
//               38.2
//             </p>

//             <img
//               className='dark:hidden'
//               src='https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg2.svg'
//               alt='next'
//             />
//             <img
//               className='hidden dark:block'
//               src='https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg2dark.svg'
//               alt='next'
//             />
//           </div>
//         </div>
//         <button className='dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none'>
//           <img
//             className='mr-3 dark:hidden'
//             src='https://tuk-cdn.s3.amazonaws.com/can-uploader/svg1.svg'
//             alt='location'
//           />
//           <img
//             className='mr-3 hidden dark:block'
//             src='https://tuk-cdn.s3.amazonaws.com/can-uploader/svg1dark.svg'
//             alt='location'
//           />
//           Check availability in store
//         </button>
//         <div>
//           <p className='xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7'>
//             It is a long established fact that a reader will be distracted by
//             thereadable content of a page when looking at its layout. The point
//             of usingLorem Ipsum is that it has a more-or-less normal
//             distribution of letters.
//           </p>
//           <p className='text-base leading-4 mt-7 text-gray-600 dark:text-gray-300'>
//             Product Code: 8BN321AF2IF0NYA
//           </p>
//           <p className='text-base leading-4 mt-4 text-gray-600 dark:text-gray-300'>
//             Length: 13.2 inches
//           </p>
//           <p className='text-base leading-4 mt-4 text-gray-600 dark:text-gray-300'>
//             Height: 10 inches
//           </p>
//           <p className='text-base leading-4 mt-4 text-gray-600 dark:text-gray-300'>
//             Depth: 5.1 inches
//           </p>
//           <p className='md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4'>
//             Composition: 100% calf leather, inside: 100% lamb leather
//           </p>
//         </div>
//         <div>
//           <div className='border-t border-b py-4 mt-7 border-gray-200'>
//             <div
//               data-menu
//               className='flex justify-between items-center cursor-pointer'
//             >
//               <p className='text-base leading-4 text-gray-800 dark:text-gray-300'>
//                 Shipping and returns
//               </p>
//               <button
//                 className='cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded'
//                 role='button'
//                 aria-label='show or hide'
//               >
//                 <img
//                   className='transform dark:hidden'
//                   src='https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg'
//                   alt='dropdown'
//                 />
//                 <img
//                   className='transform hidden dark:block'
//                   src='https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4dark.svg'
//                   alt='dropdown'
//                 />
//               </button>
//             </div>
//             <div
//               className='hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300'
//               id='sect'
//             >
//               You will be responsible for paying for your own shipping costs for
//               returning your item. Shipping costs are nonrefundable
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className='border-b py-4 border-gray-200'>
//             <div
//               data-menu
//               className='flex justify-between items-center cursor-pointer'
//             >
//               <p className='text-base leading-4 text-gray-800 dark:text-gray-300'>
//                 Contact us
//               </p>
//               <button
//                 className='cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded'
//                 role='button'
//                 aria-label='show or hide'
//               >
//                 <img
//                   className='transform dark:hidden'
//                   src='https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg'
//                   alt='dropdown'
//                 />
//                 <img
//                   className='transform hidden dark:block'
//                   src='https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4dark.svg'
//                   alt='dropdown'
//                 />
//               </button>
//             </div>
//             <div
//               className='hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300'
//               id='sect'
//             >
//               If you have any questions on how to return your item to us,
//               contact us.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default ProductDetails;
