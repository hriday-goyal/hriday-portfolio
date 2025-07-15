import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Enables tables, strikethroughs, etc.

const blogData = {
  'ozone-generator': {
    title: 'How I Built My AI-Powered Ozone Generator',
    content: `
### 🌱 The Origin of an Idea

Air pollution is one of the most pressing environmental challenges of our generation. Living in an urban environment, I have often seen the impact of poor air quality — from hazy skies to health warnings during peak pollution days. I began wondering: could machine learning help us understand and even improve air quality?

That’s when I decided to build an **AI-powered Ozone Generator predictor** — a system that combines hardware concepts with machine learning to forecast ozone output and classify whether the air purifier’s emission is safe for humans.

---

### 🔬 Understanding Ozone and the Problem

Ozone is both a blessing and a curse. While it protects us in the upper atmosphere, excessive ozone at ground level becomes a major pollutant, especially indoors. Many air purifiers claim to generate “clean ozone,” but not all ensure safe levels.

The challenge: How can we predict ozone output using environmental data and machine learning, and then classify the air as safe or unsafe?

---

### 💻 The Tech Stack I Used

To solve this, I used a combination of:
- **Python** for data preprocessing and model development
- **Pandas & Scikit-learn** for building the ML models
- **Streamlit** for a lightweight, responsive user interface
- **GitHub** for version control and code sharing

---

### 🧠 Building the Model

I trained a **linear regression model** to predict ozone concentration using inputs like temperature, humidity, wind speed, and air pressure. After getting solid predictions, I used a **classification layer** to determine whether the output was safe for humans based on an ozone threshold.

---

### 🖥️ Making It Accessible with Streamlit

To make it simple for anyone to use, I built a clean frontend using Streamlit. It takes input data, predicts ozone concentration, and shows if it's ✅ Safe or ❌ Unsafe — all instantly.

🔗 [Try the demo](https://ozone-ai-ml-ozoneapphriday.streamlit.app)

---

### 📖 Getting Published

This project became the foundation of my first research paper, published in **IRJMETS journal**. I learned how to formally document, cite, and present machine learning research professionally — a major milestone for me as a high school student.

---

### 🚀 Challenges I Faced

I faced multiple challenges:
- Messy and inconsistent environmental datasets
- Early models had poor accuracy
- Building a Streamlit interface that worked for all users

Every obstacle taught me more about debugging, clarity, and the importance of designing tools for real people.

---

### 🌍 What’s Next?

Future plans:
- Connect to real-time sensor hardware
- Use neural nets or ensemble models to boost accuracy
- Add long-term ozone monitoring dashboards

This project opened my eyes to how powerful code can be in solving urgent, real-world problems — especially environmental ones.
    `
  },

  'cricket-performance': {
  title: 'Cricket Meets Code: Predicting Player Performance with Python',
  content: `
### 🏏 Why I Combined Cricket with Machine Learning

As someone who grew up playing cricket and coding in parallel, I always wanted to bring my two worlds together. One day after a school tournament, I asked myself a question: _Could a machine predict how well a player will perform based on their stats?_

That curiosity led to one of my favorite projects — a **Cricket Player Performance Predictor** powered by Python and machine learning.

---

### 📊 The Dataset and Idea

I started by researching what features influence a player’s performance. I gathered match-level statistics for players — including:
- Batting average
- Strike rate
- Number of matches
- Wickets taken
- Recent form (runs or wickets in the last few games)
- Pitch type (flat, bouncy, spin-friendly)

The goal was simple: **predict the expected fantasy points** or performance score of a player in their next game.

---

### 🧠 Building the Model

I cleaned the dataset using **Pandas** and trained several models using **scikit-learn**, including:
- Linear Regression
- Random Forest
- Ridge Regression

After evaluating model accuracy with **RMSE and R² scores**, I found that Ridge Regression performed best for generalization. The model could take a player's stats and output a predicted score for upcoming matches.

This wasn’t just a number — it helped answer real fan questions like:
> "Should I pick this player in my fantasy team?"

---

### 🖥️ Streamlit Web App

I wanted the tool to be accessible to anyone who enjoys cricket. So I created a **simple UI in Streamlit** where users could enter:
- Player stats (average, matches played, strike rate)
- Match format (T20/ODI/Test)
- Conditions

And instantly get a performance prediction.

Try the demo here:  
🔗 [Live Streamlit App](https://cricket-performance-predictor-mc4a2kbjp6a5xvjrml3tuc.streamlit.app)

---

### 🔍 What I Learned

This project taught me that:
- Domain knowledge is just as important as code
- Regression models can make real-world predictions people care about
- Visualizing output makes it more useful than printing logs

More importantly, it taught me how to **combine passion with problem-solving** — which is exactly what computer science should be.

---

### 📦 Future Plans

Some improvements I want to explore:
- Include more live data via APIs (like CricAPI or ESPNcricinfo)
- Add model confidence intervals
- Build a leaderboard of top players predicted for upcoming matches

---

This was more than a project — it was proof that machine learning can enhance the way we understand sports. And for me, it was a dream come true to use Python to decode the game I love.

    `
},

  'research-journey': {
    title: 'My Research Journey: From Idea to Publication',
    content: 'Coming soon...'
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogData[slug];

  if (!post) {
    return <div className="p-6">404: Blog post not found</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose prose-lg">
        {post.content}
      </ReactMarkdown>
    </div>
  );
}
