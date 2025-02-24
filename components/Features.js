import RightArrowIcon from 'assets/RightArrowIcon';
import Link from 'next/link';

const FEATURES = [
  {
    imgSrc:
      'https://cdn3d.iconscout.com/3d/premium/thumb/school-backpack-4034004-3337516.png',
    title: 'Backpacks',
    description: 'Backpacks perfect for carrying laptops for school and work.',
    to: '/products',
  },
  {
    imgSrc:
      'https://cdn3d.iconscout.com/3d/premium/thumb/travelling-luggages-5338342-4467900.png',
    title: 'Luggages',
    description:
      'Store your clothes in minimalist, premium luggages at affordable prices.',
    to: '/products',
  },

  {
    imgSrc:
      'https://cdn3d.iconscout.com/3d/premium/thumb/phone-holding-4158689-3449619.png',
    title: 'Accessories',
    description:
      'Find essential items for travel like portable chargers and notebooks.',
    to: '/products',
  },
  {
    imgSrc:
      'https://cdn3d.iconscout.com/3d/premium/thumb/backpacker-travelling-in-plane-4437281-3688313.png',
    title: 'Shop all',
    description: 'Premium quality yet affordable start shopping now.',
    to: '/products',
  },
];

const Features = () => {
  return (
    <div className='py-16 px-6 space-y-8 text-gray-500 md:px-12'>
      <div>
        <span className='text-gray-600 text-lg font-semibold'>
          Main features
        </span>
        <h2 className='mt-4 text-2xl text-gray-900 font-bold md:text-4xl'>
          Explore the collection Minimalist, modern, affordable travel gear{' '}
          <br />
          suited for everyone.
          {/* A technology-first approach to payments{' '}
            <br className='lg:block' hidden /> and finance */}
        </h2>
      </div>
      <div className='mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4'>
        {FEATURES.map((feature) => (
          <Link href={feature.to} key={feature.title}>
            <div className='relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block hover:cursor-pointer'>
              <div className='relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90'>
                <div className='flex items-center'>
                  <img
                    src={feature.imgSrc}
                    className='w-16'
                    width='512'
                    height='512'
                    alt='burger illustration'
                  />
                  <h5 className='text-xl text-gray-800 font-medium transition group-hover:text-primary'>
                    {feature.title}
                  </h5>
                </div>

                <div className='space-y-2'>
                  <p className='text-sm text-gray-600'>{feature.description}</p>
                </div>
                <a
                  href='#'
                  className='flex justify-between items-center group-hover:text-primary'
                >
                  <span className='text-sm'>Shop now</span>
                  <span className='-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'>
                    <RightArrowIcon />
                  </span>
                </a>
              </div>
            </div>
          </Link>
        ))}
        {/* <div className='relative group bg-white transition hover:z-[1] hover:shadow-2xl'>
            <div className='relative p-8 space-y-8'>
              <img
                src='https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png'
                className='w-10'
                width='512'
                height='512'
                alt='burger illustration'
              />

              <div className='space-y-2'>
                <h5 className='text-xl text-gray-800 font-normal transition group-hover:text-primary'>
                  First feature
                </h5>
                <p className='text-sm text-gray-600'>
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href='#'
                className='flex justify-between items-center group-hover:text-yellow-600'
              >
                <span className='text-sm'>Read more</span>
                <span className='-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'>
                  <RightArrowIcon />
                </span>
              </a>
            </div>
          </div>
          <div className='relative group bg-white transition hover:z-[1] hover:shadow-2xl'>
            <div className='relative p-8 space-y-8'>
              <img
                src='https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png'
                className='w-10'
                width='512'
                height='512'
                alt='burger illustration'
              />

              <div className='space-y-2'>
                <h5 className='text-xl text-gray-800 font-medium transition group-hover:text-yellow-600'>
                  Second feature
                </h5>
                <p className='text-sm text-gray-600'>
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href='#'
                className='flex justify-between items-center group-hover:text-yellow-600'
              >
                <span className='text-sm'>Read more</span>
                <span className='-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'>
                  <RightArrowIcon />
                </span>
              </a>
            </div>
          </div>
          <div className='relative group bg-white transition hover:z-[1] hover:shadow-2xl'>
            <div className='relative p-8 space-y-8'>
              <img
                src='https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png'
                className='w-10'
                width='512'
                height='512'
                alt='burger illustration'
              />

              <div className='space-y-2'>
                <h5 className='text-xl text-gray-800 font-medium transition group-hover:text-yellow-600'>
                  Third feature
                </h5>
                <p className='text-sm text-gray-600'>
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href='#'
                className='flex justify-between items-center group-hover:text-yellow-600'
              >
                <span className='text-sm'>Read more</span>
                <span className='-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'>
                  &RightArrow;
                </span>
              </a>
            </div>
          </div>
          <div className='relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block'>
            <div className='relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90'>
              <img
                src='https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png'
                className='w-10'
                width='512'
                height='512'
                alt='burger illustration'
              />

              <div className='space-y-2'>
                <h5 className='text-xl text-gray-800 font-medium transition group-hover:text-yellow-600'>
                  More features
                </h5>
                <p className='text-sm text-gray-600'>
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href='#'
                className='flex justify-between items-center group-hover:text-yellow-600'
              >
                <span className='text-sm'>Read more</span>
                <span className='-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0'>
                  &RightArrow;
                </span>
              </a>
            </div>
          </div>
         */}
      </div>
    </div>
    // </div>
  );
};

export default Features;
