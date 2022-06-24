import { useState } from 'react';

const useDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, toggleDrawer];
};

export default useDrawer;
