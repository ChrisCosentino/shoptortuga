const createStripeSession = (req, res) => {
  const { item } = req.body;

  const redirectUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://stripe-checkout-next-js-demo.vercel.app';

  const transformedItem = {
    price_data: {
      currency: 'usd',
      product_data: {},
    },
  };
};

export default createStripeSession;
