import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Hriday Goyal</h1>
        <p className="text-lg">Aspiring Data Scientist | STEM Enthusiast | Class 11 Student</p>
        <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1rem', marginTop: '1rem' }}>
        <a href="https://github.com/hriday-goyal" target="_blank" className="text-blue-500 underline">GitHub</a>
        <a href="mailto:goyalhriday23@gmail.com" className="text-blue-500 underline">Email</a>
       </div>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold">AI-Powered Ozone Generator</h3>
            <p className="mt-2">A machine learning-based web app to predict ozone output and classify air purification safety. Built with Streamlit and Python.</p>
            <a href="https://ozone-ai-ml-ozoneapphriday.streamlit.app" target="_blank" className="text-blue-600 mt-2 block">Live Demo</a>
          </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
           <a href="https://cricket-performance-predictor-mc4a2kbjp6a5xvjrml3tuc.streamlit.app" target="_blank" className="text-blue-600 underline">Live Demo</a>
           <a href="https://github.com/hriday-goyal/cricket-performance-predictor" target="_blank" className="text-blue-600 underline">GitHub Repo</a>
          </div>


          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold">Titanic Survival Predictor</h3>
            <p className="mt-2">A Kaggle competition project using logistic regression to predict survival chances of Titanic passengers.</p>
            <a href="https://github.com/hriday-goyal/Titanic-Survival-Predictor" target="_blank" className="text-blue-600">GitHub Repo</a>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Research</h2>
        <p>Published a research paper on AI-enabled Ozone Generator Prototype in the IRJMETS journal, focusing on air purification using ML.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Leadership & Extracurriculars</h2>
        <ul className="list-disc list-inside">
          <li>Junior Head Boy – Led school-wide events and cultural programs</li>
          <li>Founded STEM Club and STEM Community for peer coding education</li>
          <li>Volunteer teacher at NGO, focused on STEM education</li>
          <li>Captain – U-16 Cricket and U-19 Basketball Teams</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Programming: Python, C++, HTML/CSS</li>
          <li>Tools: Streamlit, Google Colab, Jupyter, GitHub, Canva, Figma</li>
          <li>Soft Skills: Public Speaking, Leadership, Time Management</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500">
        © 2025 Hriday Goyal. All rights reserved.
      </footer>
    </div>
  );
}
