import CartIcon from 'assets/CartIcon';
import DownArrowIcon from 'assets/DownArrowIcon';
import MenuIcon from 'assets/MenuIcon';
import RightArrowIcon from 'assets/RightArrowIcon';
import Logo from 'components/Logo';
import Link from 'next/link';
import Drawer from 'components/Drawer';
import useDrawer from 'hooks/useDrawer';
import { MENU_ITEMS } from 'constants/navItems';
import getStripe from 'libs/stripe';
import { fetchPostJSON } from 'libs/stripeHelpers';

const MobileMenu = () => {
  return (
    <div>
      <h1>Menu</h1>
    </div>
  );
};

const Navbar = () => {
  const [cartDrawerIsOpen, toggleCartDrawer] = useDrawer();
  const [mobileNavDrawerIsOpen, toggleMobileNavDrawer] = useDrawer();

  const handleCheckout = async () => {
    // const checkoutSession = await fetch('/api/checkout_sessions', {
    //   body: {
    //     amount: 21,
    //   },
    //   method: 'POST',
    // });
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

    console.warn(error.message);
  };

  return (
    <div className='navbar bg-base-100'>
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
            <MobileMenu />
          </Drawer>
          {/* <label tabindex='0' className='btn btn-ghost lg:hidden'>
            <MenuIcon />
          </label> */}
          {/* <ul
            tabindex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {MENU_ITEMS.map((item) => {
              if (!item.children) {
                return <li>{item.title}</li>;
              }

              return (
                <li tabindex='0'>
                  <Link href={item.to}>
                    <a className='justify-between'>
                      {item.title}
                      <RightArrowIcon />
                    </a>
                  </Link>
                  <ul className='p-2'>
                    {item.children.map((childItem) => (
                      <li>
                        <Link href={item.to}>
                          <a>{childItem.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul> */}
        </div>

        <Link href='/'>
          <a className='btn btn-ghost normal-case text-xl'>
            <Logo />
          </a>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          {MENU_ITEMS.map((item) => {
            if (!item.children) {
              return (
                <li key={item.slug}>
                  <Link href={item.to}>
                    <a>{item.title}</a>
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
        <Drawer
          isOpen={cartDrawerIsOpen}
          toggleDrawer={toggleCartDrawer}
          toggleButton={
            <a className='btn btn-ghost'>
              <CartIcon />
            </a>
          }
        >
          <h1>
            Cart
            <button onClick={() => handleCheckout()} className='btn'>
              Checkout
            </button>
          </h1>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
