import { useState } from 'react';
import PropTypes from 'prop-types';

import ModernDrawer from 'react-modern-drawer';

import 'react-modern-drawer/dist/index.css';

const Drawer = ({
  isOpen,
  toggleDrawer,
  children,
  direction,
  size,
  toggleButton,
}) => {
  return (
    <>
      <button onClick={toggleDrawer}>{toggleButton}</button>
      <ModernDrawer
        open={isOpen}
        onClose={toggleDrawer}
        direction={direction}
        size={size}
        duration={250}
      >
        {children}
      </ModernDrawer>
    </>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
  size: PropTypes.number,
  toggleButton: PropTypes.node.isRequired,
};

Drawer.defaultProps = {
  direction: 'right',
  size: 300,
};

export default Drawer;
