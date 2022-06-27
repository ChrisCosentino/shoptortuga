import { PRODUCTS } from 'constants/products';
import ProductItem from 'components/ProductItem';
import Head from 'next/head';

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}

const Products = () => {
  return (
    <>
      <Head>
        <title>Tortuga- Products</title>
      </Head>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
          Products
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {PRODUCTS.map((product) => (
            <ProductItem data={product} key={product.name} />
            //   <div>
            //     <div className='w-full h-full object-center object-cover lg:w-full lg:h-full'>

            //     </div>
            //   </div>
          ))}
        </div>
      </div>
    </>
  );
};

// const Products = () => {
//   return (
//     <>
//       <div className='bg-white'>
//         <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
//           <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
//             Products
//           </h2>

//           <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
//             {PRODUCTS.map((product) => (
//               <div key={product.id} className='group relative'>
//                 <div className='w-full  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none '>
//                   <div className='w-full h-full object-center object-cover lg:w-full lg:h-full'>
//                     <Image
//                       src={product.imageSrc}
//                       alt={product.imageAlt}
//                       priority
//                       layout='fill'
//                       objectFit='contain'
//                     />
//                   </div>
//                   {/* <Image
//                     src={product.imageSrc}
//                     alt={product.imageAlt}
//                     priority
//                     // height={96}
//                     // width={}
//                     // layout='fill'
//                     className='w-full min-h-96 object-center object-cover lg:w-full lg:h-full '
//                   /> */}
//                   {/* <img
//                     src={product.imageSrc}
//                     alt={product.imageAlt}
//                     className='w-full h-full object-center object-cover lg:w-full lg:h-full'
//                   /> */}
//                 </div>
//                 <div className='mt-4 flex justify-between'>
//                   <div>
//                     <h3 className='text-sm text-gray-700'>
//                       <a href={product.href}>
//                         <span aria-hidden='true' className='absolute inset-0' />
//                         {product.name}
//                       </a>
//                     </h3>
//                     <p className='mt-1 text-sm text-gray-500'>
//                       {product.color}
//                     </p>
//                   </div>
//                   <p className='text-sm font-medium text-gray-900'>
//                     {product.price}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default Products;
