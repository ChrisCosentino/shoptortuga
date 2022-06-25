import Hero from 'components/Hero';
import Features from 'components/Features';
import SupportCTA from 'components/SupportCTA';

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <SupportCTA />
    </>
  );
};

export default Home;
