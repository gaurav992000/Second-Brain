import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

type PricingPlanProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
};

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  buttonText,
}) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg border ${
      isPopular ? 'border-blue-400 ring-2 ring-blue-200' : 'border-gray-200'
    } transition-all duration-300 hover:shadow-xl relative`}>
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 transform translate-x-[30%] translate-y-[40%] rotate-45">
            Popular
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Free' && <span className="text-gray-500 ml-1">/month</span>}
        </div>
        <p className="mt-2 text-gray-600 min-h-[50px]">{description}</p>
        
        <div className="mt-6">
          <Button 
            variant={isPopular ? 'primary' : 'outline'} 
            size="md"
            className="w-full"
          >
            {buttonText}
          </Button>
        </div>
      </div>
      
      <div className="border-t border-gray-100 p-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={`h-5 w-5 ${
                isPopular ? 'text-blue-600' : 'text-green-500'
              } mr-2 flex-shrink-0 mt-0.5`} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: "Free",
      description: "Perfect for getting started with basic note-taking.",
      features: [
        "Up to 100 notes",
        "Basic YouTube integration",
        "Basic Twitter integration",
        "Simple search functionality",
        "Mobile and desktop access",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: "$9.99",
      description: "Everything you need for advanced note organization.",
      features: [
        "Unlimited notes",
        "Full YouTube & Twitter integration",
        "AI-powered search",
        "Note sharing with permissions",
        "Custom templates",
        "Priority support",
      ],
      isPopular: true,
      buttonText: "Start Free Trial",
    },
    {
      name: "Teams",
      price: "$19.99",
      description: "Collaborative features for teams and organizations.",
      features: [
        "Everything in Pro",
        "Team workspaces",
        "Collaborative editing",
        "Admin controls",
        "Advanced permissions",
        "Usage analytics",
        "Dedicated account manager",
      ],
      buttonText: "Contact Sales",
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your needs. All plans include core features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;