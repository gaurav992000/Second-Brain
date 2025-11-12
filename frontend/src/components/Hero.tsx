import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Your Second Brain for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Better Thinking</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            Capture ideas, integrate content from YouTube and Twitter, and find anything 
            with powerful AI search. The ultimate note-taking experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              See How It Works
            </Button>
          </div>
          
          {/* App Preview Image */}
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-20 transform -rotate-1"></div>
            <div className="relative shadow-2xl rounded-xl overflow-hidden border border-gray-200">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="SecondBrain App Interface"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full py-2 px-6 shadow-lg">
              <p className="text-sm font-medium text-gray-700">
                Trusted by over 10,000+ knowledge workers and teams
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;