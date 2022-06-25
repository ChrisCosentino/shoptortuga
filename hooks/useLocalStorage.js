import { useState, useEffect } from 'react';

const initialize = (key, initialValue) => {
  try {
    const item = localStorage.getItem(key);
    if (item && item !== 'undefined') {
      return JSON.parse(item);
    }

    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  } catch (err) {
    console.log(error);
    return initialValue;
  }
};

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(initialize(key, initialValue));
  }, []);

  const setValue = (key, value) => {
    try {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
      // const valueToStore = value instanceof Function ? value(storedValue)
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.log(error);
    }
  };

  return [state, setValue, removeItem];
};

export default useLocalStorage;
