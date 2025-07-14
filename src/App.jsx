import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6">Hriday Goyal</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">📘 Blog</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold">How I Built My AI-Powered Ozone Generator</h3>
            <p>A behind-the-scenes look at combining hardware and ML to build a Streamlit-powered air purification app.</p>
            <a href="/blog/ozone-generator" className="text-blue-500 underline">Read more</a>
          </div>
          <div>
            <h3 className="text-xl font-bold">Cricket Meets Code: Predicting Player Performance with Python</h3>
            <p>Why I built a cricket performance predictor, and how I trained the ML model.</p>
            <a href="/blog/cricket-performance" className="text-blue-500 underline">Read more</a>
          </div>
          <div>
            <h3 className="text-xl font-bold">My Research Journey: From Idea to Publication</h3>
            <p>How I published my first research paper as a high school student.</p>
            <a href="/blog/research-journey" className="text-blue-500 underline">Read more</a>
          </div>
        </div>
      </section>
    </div>
  );
}
