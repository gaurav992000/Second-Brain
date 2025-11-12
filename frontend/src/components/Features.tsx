import React from 'react';
import { Youtube, Twitter, Share2, Search, Brain, Tablet, Users, Compass } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-blue-100 group">
      <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-100 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Youtube className="h-6 w-6" />,
      title: "YouTube Integration",
      description: "Save video timestamps, transcripts, and your notes in one place for easy reference and learning."
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      title: "Twitter Content",
      description: "Capture tweets, threads, and insights directly into your notes with proper attribution and context."
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Seamless Sharing",
      description: "Share your notes with anyone through secure, customizable links with granular permission settings."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "AI-Powered Search",
      description: "Find anything in seconds with context-aware AI search that understands concepts, not just keywords."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Connected Thinking",
      description: "Discover connections between ideas automatically with our intelligent linking system."
    },
    {
      icon: <Tablet className="h-6 w-6" />,
      title: "Cross-Device Sync",
      description: "Access your notes from anywhere. Changes sync instantly across all your devices."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative Workspaces",
      description: "Work together with your team in real-time with collaborative editing and comments."
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Knowledge Discovery",
      description: "Uncover insights and patterns within your notes with AI-powered knowledge mapping."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Organize Your Thoughts
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to help you capture, connect, and retrieve information effortlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;