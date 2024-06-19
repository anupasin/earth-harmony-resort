// /pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';

// Home component using arrow function syntax
const Home = () => (
  <div>
    <Head>
      <title>Earth Harmony Resort</title>
      <meta name="description" content="An eco-friendly resort offering sustainable living experiences." />
    </Head>
    <Navbar />
    <Hero />
    <div className="container">
      <MainSection />
    </div>
    <Footer />
  </div>
);

export default Home;
