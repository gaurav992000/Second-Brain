import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { opensignin, useSignin, SignIn } from './Signin';
import { memo } from 'react';

export const Landingpage = memo(function Landingpage() {
  const { isopen } = useSignin();
  
  return (
    <div>
      {isopen && (
        <div className="w-screen h-screen bg-gray-500 bg-opacity-55 fixed top-0 left-0 flex justify-center items-center">
          <SignIn />
        </div>
      )}
      <div className="min-h-screen bg-white">
        <Navbar/>
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
}); 
