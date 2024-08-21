import React from 'react';

const blogPosts = [
  {
    title: "Building Gains Into Housing Stocks And How To Trade The Sector",
    date: "20 June 2024",
    author: "Sam Mehta",
    image: "src/assets/images/Rectangle 3218.jpg", 
    description: "Lorem Ipsum is simply dummy text of the printing industry Lorem Ipsum been industry standard dummy text since book."
  },
  {
    title: "92% Of Millennial Homebuyers Say Inflation Has Impacted Their Plans",
    date: "20 June 2024",
    author: "Jenny Perera",
    image: "src/assets/images/Rectangle 3219.jpg", 
    description: "Lorem Ipsum is simply dummy text of the printing industry Lorem Ipsum been industry standard dummy text since book."
  },
  {
    title: "We Are Hiring 'Moderately,' Says Compass CEO",
    date: "30 June 2024",
    author: "Siddesh Joshi",
    image: "src/assets/images/Rectangle 3220.png", 
    description: "Lorem Ipsum is simply dummy text of the printing industry Lorem Ipsum been industry standard dummy text since book."
  }
];

const BlogPostCard = ({ post }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img className="w-full h-48 object-cover rounded-t-lg" src={post.image} alt={post.title} />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{post.date} | By {post.author}</p>
      <p className="text-gray-800 mb-4">
        {post.description.length > 100 ? `${post.description.substring(0, 100)}...` : post.description}
      </p>
      <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
        Read More
      </button>
    </div>
  </div>
);

const BlogPosts = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => (
        <BlogPostCard key={index} post={post} />
      ))}
    </div>
  </div>
);

export default BlogPosts;
