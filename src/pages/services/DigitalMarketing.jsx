import { Link } from "react-router-dom";

export default function DigitalMarketing() {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <Link to="/" className="text-cyan-400 underline">
          ← Back to Services
        </Link>

        <h1 className="text-4xl font-bold text-orange-400">Marketing That Converts, Not Just Reaches</h1>
        <p className="text-xl text-gray-300">
          Data-driven campaigns for visibility, engagement, and growth.
        </p>

        <p className="text-gray-400">
          Your business deserves more than likes—it deserves measurable growth.
          At Infozire, our digital marketing strategies combine creativity, data,
          and technology to make sure your brand reaches the right audience and delivers results.
        </p>

        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-orange-300">What You Get:</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>SEO & content optimization</li>
            <li>Paid ads (Google, Meta, LinkedIn)</li>
            <li>Social media growth campaigns</li>
            <li>Branding & creative design support</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-orange-300">Use Cases:</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>✔ Lead generation for SMEs</li>
            <li>✔ E-commerce growth campaigns</li>
            <li>✔ Brand awareness strategies</li>
            <li>✔ Performance tracking & reporting</li>
          </ul>
        </div>

        <button className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-black font-semibold">
          Boost Your Business with Infozire Marketing →
        </button>
      </div>
    </section>
  );
}
