import React from 'react';
import { useNavigate } from "react-router-dom";

const AIServicesPage = () => {
      const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-6 text-orange-500">Industries We Serve with AI</h1>

            <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
                <ul className="space-y-4 text-lg">
                    <li><strong>Retail & E-Commerce:</strong> Personalized shopping, chatbots, AI-driven promotions</li>
                    <li><strong>Education:</strong> Adaptive learning systems, student performance tracking</li>
                    <li><strong>Healthcare:</strong> Predictive analytics, appointment bots, AI medical record insights</li>
                    <li><strong>Finance:</strong> Fraud detection, risk analysis, automated reporting</li>
                    <li><strong>Hospitality:</strong> Virtual concierge, smart booking systems</li>
                </ul>
<img 
  src="https://i.pinimg.com/1200x/13/bc/3c/13bc3c6bad007d5b1c61a7fb84645265.jpg" 
  alt="AI Example" 
  className="w-full h-auto object-cover rounded-lg shadow-md"
/>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Why Choose Infozire AI?</h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-slate-300 mb-12">
                <li>✅ Custom-Built – AI solutions designed for your exact business needs</li>
                <li>✅ Affordable & Scalable – Enterprise-grade AI at a price for SMEs and startups</li>
                <li>✅ Reliable Leadership – Guided by CEO Praburam, balancing innovation with real-world challenges</li>
                <li>✅ End-to-End Service – From consultation to deployment and support</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Future-Ready with Infozire AI</h2>
            <p className="text-lg text-slate-300 mb-8">
                Our AI isn’t just about technology—it’s about making businesses self-reliant, efficient, and competitive.
                Whether you’re a small shop or a growing enterprise, Infozire AI solutions give you the edge to thrive.
            </p>

            <button
      onClick={() => navigate("/services/ai-automation")}
      className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
    >
      🚀 Explore AI Solutions with Infozire
    </button>
        </div>
    );
};

export default AIServicesPage;
