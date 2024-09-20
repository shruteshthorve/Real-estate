import React from 'react';

const testimonials = [
  {
    name: "Kirti Agarwal",
    title: "Project Manager",
    image: "src/assets/images/Untitled (1).png",
    feedback: "I truly appreciate the professionalism and in-depth knowledge of the brokerage team. They not only helped me find the perfect home but also assisted with legal and financial aspects, making me feel confident and secure in my decision.",
    rating: 5
  },
  {
    name: "Kirti Agarwal",
    title: "Project Manager",
    image: "src/assets/images/Untitled.png", 
    feedback: "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <img className="w-16 h-16 rounded-full mr-4" src={testimonial.image} alt={testimonial.name} />
      <div>
        <div className="text-xl font-bold">{testimonial.name}</div>
        <div className="text-gray-600">{testimonial.title}</div>
      </div>
    </div>
    <p className="text-gray-800 mb-4">{testimonial.feedback}</p>
    <div className="flex">
      {[...Array(testimonial.rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.371-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.839-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.155 9.384c-.783-.57-.381-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  </div>
);

const Testimonials = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  </div>
);

export default Testimonials;
