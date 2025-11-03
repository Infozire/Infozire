import { Link } from "react-router-dom";

export default function AISolutions() {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <Link to="/" className="text-cyan-400 underline">
          ← Back to Services
        </Link>

        <h1 className="text-4xl font-bold text-cyan-400">Smarter Businesses, Powered by AI</h1>
        <p className="text-xl text-gray-300">
          Infozire AI helps businesses automate, predict, and personalize like never before.
        </p>

        <p className="text-gray-400">
          AI solutions can transform your operations by automating workflows, providing predictive analytics, and delivering personalized customer experiences. 
          Our AI experts design tailored solutions to fit your unique business challenges and goals.
        </p>

        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-300">What You Get:</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>AI Chatbots & Assistants</li>
            <li>Predictive Analytics</li>
            <li>Process Automation (RPA + AI)</li>
            <li>Recommendation Systems</li>
            <li>AI-Powered Marketing</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-300">Use Cases:</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>✔ Automating customer service with AI chatbots</li>
            <li>✔ Forecasting trends using predictive analytics</li>
            <li>✔ Recommender engines for e-commerce</li>
            <li>✔ Process automation with RPA and AI integration</li>
          </ul>
        </div>

        <button className="mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-black font-semibold">
          Talk to Our AI Team →
        </button>
      </div>
    </section>
  );
}
