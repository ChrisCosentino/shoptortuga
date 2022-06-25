import Link from 'next/link';

const Custom404 = () => {
  return (
    <section className='bg-primary py-[120px] relative z-10'>
      <div className='container'>
        <div className='flex -mx-4'>
          <div className='w-full px-4'>
            <div className='mx-auto max-w-[400px] text-center'>
              <h2
                className='
                  font-bold
                  text-white
                  mb-2
                  text-[50px]
                  sm:text-[80px]
                  md:text-[100px]
                  leading-none
                  '
              >
                404
              </h2>
              <h4 className='text-white font-semibold text-[22px] leading-tight mb-3'>
                Oops! That page can’t be found
              </h4>
              <p className='text-lg text-white mb-8'>
                The page you are looking for it maybe deleted
              </p>
              <a
                href='javascript:void(0)'
                className='
                  text-base
                  font-semibold
                  text-white
                  inline-block
                  text-center
                  border border-white
                  rounded-lg
                  px-8
                  py-3
                  hover:bg-white hover:text-primary
                  transition
                  '
              >
                Go To Home
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className='
      absolute
      -z-10
      w-full
      h-full
      top-0
      left-0
      flex
      justify-between
      items-center
      space-x-5
      md:space-x-8
      lg:space-x-14
      '
      >
        <div className='w-1/3 h-full bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]'></div>
        <div className='w-1/3 h-full flex'>
          <div
            className='
            w-1/2
            h-full
            bg-gradient-to-b
            from-[#FFFFFF14]
            to-[#C4C4C400]
            '
          ></div>
          <div
            className='
            w-1/2
            h-full
            bg-gradient-to-t
            from-[#FFFFFF14]
            to-[#C4C4C400]
            '
          ></div>
        </div>
        <div className='w-1/3 h-full bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]'></div>
      </div>
    </section>
    // <main className='h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]'>
    //   <h1 className='text-9xl font-extrabold text-white tracking-widest'>404</h1>
    //   <div class='bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute'>
    //     Page Not Found
    //   </div>
    //   <button class='mt-5'>
    //     <a class='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring'>
    //       <span class='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0'></span>

    //       <span class='relative block px-8 py-3 bg-[#1A2238] border border-current'>
    //         <Link href='/'>Go Home</Link>
    //       </span>
    //     </a>
    //   </button>
    // </main>
  );
};

export default Custom404;
