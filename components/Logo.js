import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <a className='btn btn-ghost normal-case text-xl'>
        <h1 className='italic font-bold'>Tortuga</h1>
      </a>
    </Link>
  );
};

export default Logo;
