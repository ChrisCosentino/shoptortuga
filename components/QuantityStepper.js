import { useState } from 'react';
import PlusIcon from 'assets/PlusIcon';
import MinusIcon from 'assets/MinusIcon';

const QuantityStepper = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='flex items-center justify-between md:w-32 w-4/5 p-2 qty-btn rounded-xl border border-black'>
      <button
        disabled={quantity <= 1}
        className='cursor-pointer disabled:text-slate-500 disabled:cursor-not-allowed'
        onClick={
          quantity > 1
            ? () => setQuantity(quantity - 1)
            : () => setQuantity(quantity)
        }
      >
        <MinusIcon />
      </button>
      {/* <MinusIcon
        onClick={
          quantity > 0
            ? () => setQuantity(quantity - 1)
            : () => setQuantity(quantity)
        }
        className='cursor-pointer'
      /> */}
      <span className='font-bold titles select-none'>
        {quantity >= 0 ? quantity : 0}
      </span>
      <button
        className='cursor-pointer'
        onClick={() => setQuantity(quantity + 1)}
      >
        <PlusIcon />
      </button>
      {/* <PlusIcon
        onClick={() => setQuantity(quantity + 1)}
        className='cursor-pointer'
      /> */}
    </div>
  );
};

export default QuantityStepper;
