import RightArrowIcon from 'assets/RightArrowIcon';

const Hero = () => {
  return (
    <div className='relative w-full'>
      {/* <nav className='fixed z-10 w-full border-b bg-white md:absolute md:bg-transparent'>
        <div className='container m-auto px-2 md:px-12 lg:px-7'>
          <div className='flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0'>
            <div className='w-full px-6 flex justify-between lg:w-max md:px-0'>
              <a href='#' aria-label='logo'>
                <img
                  src='images/logo.svg'
                  className='w-36'
                  alt='tailus logo'
                  width='144'
                  height='68'
                />
              </a>

              <button
                aria-label='humburger'
                id='hamburger'
                className='relative w-10 h-10 -mr-2 lg:hidden'
              >
                <div
                  aria-hidden='true'
                  id='line'
                  className='inset-0 w-6 h-0.5 m-auto rounded bg-gray-500 transtion duration-300'
                ></div>
                <div
                  aria-hidden='true'
                  id='line2'
                  className='inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-gray-500 transtion duration-300'
                ></div>
              </button>
            </div>

            <div className='hidden w-full lg:flex flex-wrap justify-between items-center space-y-12 p-6 rounded-xl bg-white md:w-8/12 md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12'>
              <div className='block w-full'>
                <ul className='space-y-12 tracking-wide font-medium md:flex md:space-y-0'>
                  <li>
                    <a href='#' className='block md:px-3'>
                      <div
                        className='relative text-cyan-800
              before:absolute before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800'
                      >
                        <span>Nike</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block md:px-3 group'>
                      <div
                        className='relative text-gray-600
                                                  before:absolute before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 before:transition before:scale-x-0 group-hover:before:scale-x-100'
                      >
                        <span className='transition group-hover:text-cyan-700'>
                          Adiddas
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block md:px-3 group'>
                      <div
                        className='relative text-gray-600
                                                  before:absolute before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 before:transition before:scale-x-0 group-hover:before:scale-x-100'
                      >
                        <span className='transition group-hover:text-cyan-700'>
                          Cart
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className='w-full md:w-max'>
                <button
                  type='button'
                  title='Start buying'
                  className='w-full py-3 px-6 text-center rounded-full transition bg-gray-900 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max'
                >
                  <span className='block text-white text-sm'>Shop now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <div className=''>
        <div className='container m-auto px-6 pt-24  md:px-12  lg:pt-[4.8rem] lg:px-7'>
          <div className='flex items-center flex-wrap gap-12 px-2 md:px-0'>
            <div className='lg:w-6/12 lg:-ml-7'>
              <div className='relative'>
                <img
                  src='https://images.unsplash.com/photo-1561810051-503ed3ef1089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80'
                  alt='heroImg'
                  loading='lazy'
                  width='640'
                  height='640'
                />
                {/* <div className='absolute bottom-2 right-2 bg-white'>
                  <div className='flex p-1'>
                    <button aria-label='button-left' className='p-3 border-r'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        className='rotate-180'
                        fill='currentColor'
                        className='bi bi-chevron-right'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                        />
                      </svg>
                    </button>
                    <button aria-label='button-right' className='p-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-chevron-right'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                        />
                      </svg>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>

            <div className='relative lg:w-6/12 lg:-ml-20'>
              <h1 className='font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl'>
                A Look for every <span className='text-primary'>mood</span>.
              </h1>
              <div className='mt-16 space-y-8 lg:ml-32'>
                <p className='text-gray-700'>
                  Premium travel gear at affordable prices.
                </p>
                <div className='flex space-x-4 '>
                  <a className='btn bg-primary flex gap-2'>
                    Shop Now
                    <RightArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// const Hero = ({}) => {
//   return (
//     <div className='relative bg-white overflow-hidden'>
//       <div className='max-w-7xl mx-auto'>
//         <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
//           <svg
//             className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
//             fill='currentColor'
//             viewBox='0 0 100 100'
//             preserveAspectRatio='none'
//             ariaHidden='true'
//           >
//             <polygon points='50,0 100,0 50,100 0,100' />
//           </svg>

//           <div>
//             <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
//               <nav
//                 className='relative flex items-center justify-between sm:h-10 lg:justify-start'
//                 ariaLabel='Global'
//               >
//                 <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
//                   <div className='flex items-center justify-between w-full md:w-auto'>
//                     <a href='#'>
//                       <span className='sr-only'>Workflow</span>
//                       <img
//                         alt='Workflow'
//                         className='h-8 w-auto sm:h-10'
//                         src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
//                       />
//                     </a>
//                     <div className='-mr-2 flex items-center md:hidden'>
//                       <button
//                         type='button'
//                         className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
//                         ariaExpanded='false'
//                       >
//                         <span className='sr-only'>Open main menu</span>

//                         <svg
//                           className='h-6 w-6'
//                           xmlns='http://www.w3.org/2000/svg'
//                           fill='none'
//                           viewBox='0 0 24 24'
//                           strokeWidth='2'
//                           stroke='currentColor'
//                         >
//                           <path
//                             strokeLinecap='round'
//                             strokeLinejoin='round'
//                             d='M4 6h16M4 12h16M4 18h16'
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
//                   <a
//                     href='#'
//                     className='font-medium text-gray-500 hover:text-gray-900'
//                   >
//                     Product
//                   </a>

//                   <a
//                     href='#'
//                     className='font-medium text-gray-500 hover:text-gray-900'
//                   >
//                     Features
//                   </a>

//                   <a
//                     href='#'
//                     className='font-medium text-gray-500 hover:text-gray-900'
//                   >
//                     Marketplace
//                   </a>

//                   <a
//                     href='#'
//                     className='font-medium text-gray-500 hover:text-gray-900'
//                   >
//                     Company
//                   </a>

//                   <a
//                     href='#'
//                     className='font-medium text-indigo-600 hover:text-indigo-500'
//                   >
//                     Log in
//                   </a>
//                 </div>
//               </nav>
//             </div>

//             <div className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
//               <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
//                 <div className='px-5 pt-4 flex items-center justify-between'>
//                   <div>
//                     <img
//                       className='h-8 w-auto'
//                       src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
//                       alt=''
//                     />
//                   </div>
//                   <div className='-mr-2'>
//                     <button
//                       type='button'
//                       className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
//                     >
//                       <span className='sr-only'>Close main menu</span>

//                       <svg
//                         className='h-6 w-6'
//                         xmlns='http://www.w3.org/2000/svg'
//                         fill='none'
//                         viewBox='0 0 24 24'
//                         strokeWidth='2'
//                         stroke='currentColor'
//                       >
//                         <path
//                           strokeLinecap='round'
//                           strokeLinejoin='round'
//                           d='M6 18L18 6M6 6l12 12'
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <div className='px-2 pt-2 pb-3 space-y-1'>
//                   <a
//                     href='#'
//                     className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
//                   >
//                     Product
//                   </a>

//                   <a
//                     href='#'
//                     className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
//                   >
//                     Features
//                   </a>

//                   <a
//                     href='#'
//                     className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
//                   >
//                     Marketplace
//                   </a>

//                   <a
//                     href='#'
//                     className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
//                   >
//                     Company
//                   </a>
//                 </div>
//                 <a
//                   href='#'
//                   className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
//                 >
//                   {' '}
//                   Log in{' '}
//                 </a>
//               </div>
//             </div>
//           </div>

//           <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
//             <div className='sm:text-center lg:text-left'>
//               <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
//                 <span className='block xl:inline'>Data to enrich your</span>
//                 <span className='block text-indigo-600 xl:inline'>
//                   online business
//                 </span>
//               </h1>
//               <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
//                 Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
//                 lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
//                 fugiat aliqua.
//               </p>
//               <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
//                 <div className='rounded-md shadow'>
//                   <a
//                     href='#'
//                     className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
//                   >
//                     {' '}
//                     Get started{' '}
//                   </a>
//                 </div>
//                 <div className='mt-3 sm:mt-0 sm:ml-3'>
//                   <a
//                     href='#'
//                     className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
//                   >
//                     {' '}
//                     Live demo{' '}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//       <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
//         <img
//           className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
//           src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
//           alt=''
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;
