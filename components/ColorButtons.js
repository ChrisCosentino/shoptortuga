import PropTypes from 'prop-types';

const ColorButtons = ({ colors }) => {
  console.log(colors);
  return (
    <>
      {colors?.map((color, index) => (
        <input
          key={`${color.name}-${index}`}
          type='radio'
          name={color.name}
          className={`radio checked:${color.colorCode} w-12 h-12`}
          checked
        />
      ))}
      {/* <input
        type='radio'
        name='radio-2'
        className='radio radio-primary'
        checked
      />
      <input type='radio' name='radio-2' className='radio radio-primary' /> */}
    </>
  );
};

ColorButtons.propTypes = {
  colors: PropTypes.instanceOf(Array),
};

ColorButtons.defaultProps = {
  colors: [
    { name: 'radio', colorCode: 'bg-blue-500' },
    { name: 'radio', colorCode: 'bg-red-500' },
  ],
};

export default ColorButtons;
