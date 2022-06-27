import Link from 'next/link';
import BackIcon from 'assets/BackIcon';

const BackBtn = () => {
  return (
    <Link href='/products'>
      <a className='btn btn-ghost mb-4 outer-btn'>
        <span className='inner-icon'>
          <BackIcon />
        </span>{' '}
        Back
      </a>
    </Link>
  );
};

export default BackBtn;
