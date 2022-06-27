import Hero from 'components/Hero';
import Features from 'components/Features';
import SupportCTA from 'components/SupportCTA';
import Marquee from 'components/Marquee';

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}

const Home = () => {
  return (
    <>
      <div className='container m-auto'>
        <Hero />
        <Marquee />
        <Features />
        <SupportCTA />
      </div>
    </>
  );
};

export default Home;
