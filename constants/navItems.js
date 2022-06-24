export const MENU_ITEMS = [
  {
    title: 'Products',
    slug: 'products',
    to: '/products',
  },
  {
    title: 'Backpacks',
    slug: 'products',
    to: '/products',
    children: [
      {
        title: 'Travel Backpacks',
        slug: 'products',
        to: '/products',
      },
      {
        title: 'Laptop Backpacks',
        slug: 'products',
        to: '/products',
      },
    ],
  },
  {
    title: 'Bags',
    slug: 'products',
    to: '/products',
    children: [
      {
        title: 'Briefcases',
        slug: 'products',
        to: '/products',
      },
      {
        title: 'Duffel Bags',
        slug: 'products',
        to: '/products',
      },
      {
        title: 'Crossbodies',
        slug: 'products',
        to: '/products',
      },
    ],
  },
];
