import React from 'react';
import { useParams } from 'react-router-dom';

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

I also structured this project in a way that it could eventually be paired with real sensor data from a physical ozone generator — something I hope to prototype next.

---

### 🧠 Building the Model

I started by collecting and cleaning historical ozone datasets that included features like:
- Temperature
- Humidity
- Wind Speed
- Pressure
- Particulate Matter (PM 2.5/PM10)

I trained a **linear regression model** to predict ozone concentration based on these inputs. Once I had a reliable predictor, I added a **classification layer** — if the predicted output crossed a safety threshold, it flagged the air as unsafe.

Here’s a basic summary of the architecture:

1. Input features from environment (manual or sensor)
2. Preprocessing and feature scaling
3. Regression model predicts ozone output
4. Classification model determines safety status
5. Output is visualized in a simple dashboard

---

### 🖥️ Making It Accessible with Streamlit

I wanted my project to be more than code. I wanted **anyone** — even someone without technical skills — to use it.

That’s why I built a frontend using **Streamlit**. The app takes user input (like temperature and humidity), runs the model behind the scenes, and displays:
- Predicted ozone concentration
- A clear label: ✅ Safe or ❌ Unsafe

It’s hosted online so anyone can try it without installing anything.

🔗 [Try the demo](https://ozone-ai-ml-ozoneapphriday.streamlit.app)

---

### 📖 Getting Published

What began as a weekend project evolved into something much more meaningful. I turned this into a research paper and submitted it to the **IRJMETS journal**, where it was successfully published.

The experience taught me not just about coding and modeling, but about:
- Structuring formal research
- Referencing prior work
- Writing in an academic tone
- Preparing for peer review

---

### 🚀 Challenges I Faced

There were lots of bugs and dead ends:
- Data wasn’t always clean or standardized
- Early models gave wildly inaccurate predictions
- Streamlit UI crashed under weird edge cases

But every challenge taught me something — especially about debugging, patience, and the art of simplifying complex systems for non-tech users.

---

### 🌍 What’s Next?

In future versions, I hope to:
- Connect real-time IoT sensors for live data feeds
- Improve accuracy with ensemble models or neural networks
- Add a dashboard for long-term ozone tracking

This project showed me how powerful technology can be when it’s made for real people. And it reminded me that meaningful innovation starts with asking, “What problem can I solve right now?”
    `
  },

  // You can expand these later
  'cricket-performance': {
    title: 'Cricket Meets Code: Predicting Player Performance with Python',
    content: 'Coming soon...'
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
      <div className="text-lg whitespace-pre-line">
        {post.content}
      </div>
    </div>
  );
}
