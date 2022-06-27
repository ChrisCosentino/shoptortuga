import { useState } from 'react';
import CartIcon from 'assets/CartIcon';
import DownArrowIcon from 'assets/DownArrowIcon';
import MenuIcon from 'assets/MenuIcon';
import Logo from 'components/Logo';
import Link from 'next/link';
import Drawer from 'components/Drawer';
import useDrawer from 'hooks/useDrawer';
import { MENU_ITEMS } from 'constants/navItems';
import { fetchPostJSON } from 'libs/stripeHelpers';
import useCart from 'contexts/CartContext';
import Announcement from './Announcement';
import { useRouter } from 'next/router';

// import dynamic from 'next/dynamic';

// const getStripe = dynamic(() => import('libs/stripe'));

import getStripe from 'libs/stripe';

const MobileMenu = ({ toggleDrawer }) => {
  const { pathname } = useRouter();
  return (
    <div className='p-4'>
      <Logo />

      <div className='flex flex-col mt-6 gap-2'>
        {MENU_ITEMS.map((item) => {
          return (
            <Link href={item.to} key={item.to}>
              <a
                className={`p-2 hover:bg-slate-100 rounded-md ${
                  pathname.includes(item.to) ? 'bg-primary text-white' : ''
                }`}
                onClick={() => toggleDrawer()}
              >
                {item.title}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [cartDrawerIsOpen, toggleCartDrawer] = useDrawer();
  const [mobileNavDrawerIsOpen, toggleMobileNavDrawer] = useDrawer();
  const { cartCount, cartItems } = useCart();
  const { pathname } = useRouter();
  const [loadingStripe, setLoadingStripe] = useState(false);

  const handleCheckout = async () => {
    setLoadingStripe(true);

    const response = await fetchPostJSON('/api/checkout_sessions', {
      amount: 20,
    });

    if (response.status === 500) {
      console.error(checkoutSession.message);
      return;
    }

    console.log(response);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.id,
    });

    setLoadingStripe(false);

    console.warn(error.message);
  };

  return (
    <>
      <Announcement />
      <div className='navbar bg-base-100 border-b sticky top-0 z-50'>
        <div className='navbar-start'>
          <div className='lg:hidden'>
            <Drawer
              isOpen={mobileNavDrawerIsOpen}
              toggleDrawer={toggleMobileNavDrawer}
              direction='left'
              toggleButton={
                <a className='btn btn-ghost'>
                  <MenuIcon />
                </a>
              }
            >
              <MobileMenu toggleDrawer={toggleMobileNavDrawer} />
            </Drawer>
          </div>

          <Logo />
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0 gap-2 '>
            {MENU_ITEMS.map((item) => {
              if (!item.children) {
                return (
                  //       <li>
                  //         <a href='#' class='block md:px-3'>
                  //           <div
                  //             class='relative text-cyan-800
                  //   before:absolute before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800'
                  //           >
                  //             <span>Nike</span>
                  //           </div>
                  //         </a>
                  //       </li>
                  <li key={item.slug}>
                    <Link href={item.to}>
                      <a
                        className={`decoration-primary bg-transparent hover:bg-transparent underline-offset-4 hover:underline hover:decoration-4 ${
                          pathname.includes(item.to)
                            ? 'underline decoration-4'
                            : ''
                        }`}
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.slug}>
                  <Link href={item.to}>
                    <a>
                      {item.title}
                      <DownArrowIcon />
                    </a>
                  </Link>
                  <ul className='p-2'>
                    {item.children.map((childItem) => (
                      <li key={item.slug}>
                        <Link href={childItem.to}>
                          <a>{childItem.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='navbar-end'>
          <p>CAD</p>

          <Drawer
            isOpen={cartDrawerIsOpen}
            toggleDrawer={toggleCartDrawer}
            toggleButton={
              <a className='btn btn-ghost flex gap-1 font-normal text-slate-600'>
                <CartIcon /> {cartCount}
              </a>
            }
          >
            <div className='p-2'>
              <h1 className='text-lg font-bold'>Cart</h1>

              <div>
                {cartItems?.map((item) => (
                  <div key={item.name}>{item.name}</div>
                ))}
              </div>

              <button
                onClick={() => handleCheckout()}
                className={`btn btn-block bg-primary ${
                  loadingStripe ? 'loading' : ''
                }`}
              >
                Checkout
              </button>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Navbar;
