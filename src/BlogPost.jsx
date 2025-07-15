import React from 'react';
import { useParams } from 'react-router-dom';

const blogData = {
  'ozone-generator': {
    title: 'How I Built My AI-Powered Ozone Generator',
    content: 'This is a full blog post about how I combined hardware, ML, and Streamlit...'
  },
  'cricket-performance': {
    title: 'Cricket Meets Code: Predicting Player Performance with Python',
    content: 'I love cricket. I love ML. Here’s how I combined both into one project...'
  },
  'research-journey': {
    title: 'My Research Journey: From Idea to Publication',
    content: 'Publishing a paper in high school was a dream. Here’s how I did it...'
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogData[slug];

  if (!post) {
    return <div className="p-6">404: Blog post not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </div>
  );
}
