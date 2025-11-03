import { useState } from 'react';

const AIServices = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="py-24 md:py-32 border-t border-white/10">
            <h2 className="text-3xl font-semibold mb-8 text-white">🤖 AI Services – Infozire</h2>

            <div className="grid md:grid-cols-2 items-center gap-10">
                {/* Left Side: Content */}
                <div className="space-y-6 text-slate-300">
                    <h3 className="text-xl font-bold text-white">Smarter Businesses, Powered by AI</h3>
                    <p>
                        From automation to insights, Infozire AI solutions make your business faster, sharper, and future-ready.
                    </p>

                    {!expanded ? (
                        <>
                            <button
                                className="rounded-xl px-4 py-2 bg-orange-500 text-white font-medium"
                                onClick={() => setExpanded(true)}
                            >
                                Read More
                            </button>
                        </>
                    ) : (
                        <>
                            <h4 className="text-lg font-semibold text-white">Why AI for Business?</h4>
                            <p>
                                Artificial Intelligence is no longer optional. It is the foundation of modern business growth. At Infozire, we design AI-powered solutions that help businesses:
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Automate repetitive tasks</li>
                                <li>Understand customer behavior</li>
                                <li>Make data-driven decisions</li>
                                <li>Deliver personalized experiences</li>
                                <li>Stay competitive in a fast-changing market</li>
                            </ul>

                            <h4 className="text-lg font-semibold text-white mt-4">Our AI Solutions</h4>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>AI Chatbots & Virtual Assistants:</strong> Engage customers 24/7 (WhatsApp, Web, App integrations, Multilingual support).</li>
                                <li><strong>Business Process Automation (RPA + AI):</strong> Automate workflows (Reduce human error, save time).</li>
                                <li><strong>Predictive Analytics & Insights:</strong> Forecast sales and trends with real-time dashboards.</li>
                                <li><strong>Recommendation Engines:</strong> Personalized suggestions to boost conversions.</li>
                                <li><strong>AI for Marketing & Growth:</strong> Smart ad targeting, sentiment analysis, ROI adjustments.</li>
                            </ul>

                            <button
                                className="rounded-xl px-4 py-2 bg-white text-gray-900 font-medium mt-4"
                                onClick={() => setExpanded(false)}
                            >
                                Show Less
                            </button>

                            <a href="/ai-services" className="block mt-4 text-orange-500 underline">
                                Explore All AI Services
                            </a>
                        </>
                    )}
                </div>

                {/* Right Side: AI Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                    <img
                        src="https://i.pinimg.com/1200x/13/bc/3c/13bc3c6bad007d5b1c61a7fb84645265.jpg"
                        alt="AI Example"
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default AIServices;
