import React from 'react';
import { Star } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
  rating: number;
};

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatarUrl,
  rating,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all duration-300 hover:shadow-md">
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`} 
          />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-gray-700 mb-6 leading-relaxed">"{quote}"</p>
      
      {/* Author */}
      <div className="flex items-center">
        <img
          src={avatarUrl}
          alt={author}
          className="h-10 w-10 rounded-full mr-3 object-cover"
        />
        <div>
          <h4 className="font-medium text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "SecondBrain has transformed how I organize information. The ability to save YouTube videos and Twitter threads directly into my notes is a game-changer.",
      author: "Sarah Johnson",
      role: "Content Creator",
      avatarUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
    },
    {
      quote: "The AI search is incredible. I can find anything in my notes even when I don't remember the exact keywords. It's like having a research assistant.",
      author: "Michael Chen",
      role: "PhD Student",
      avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
    },
    {
      quote: "As a team leader, SecondBrain has improved our knowledge sharing dramatically. We all stay on the same page and build on each other's ideas.",
      author: "Alex Rivera",
      role: "Product Manager",
      avatarUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by Knowledge Workers
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of users who organize their thinking with SecondBrain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatarUrl={testimonial.avatarUrl}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
          <div className="flex items-center">
            <div className="text-4xl font-bold text-blue-600">10k+</div>
            <div className="ml-3 text-gray-700">Active Users</div>
          </div>
          <div className="flex items-center">
            <div className="text-4xl font-bold text-blue-600">4.8</div>
            <div className="ml-3 text-gray-700">App Store Rating</div>
          </div>
          <div className="flex items-center">
            <div className="text-4xl font-bold text-blue-600">98%</div>
            <div className="ml-3 text-gray-700">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;