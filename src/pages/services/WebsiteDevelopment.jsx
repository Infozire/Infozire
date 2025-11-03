import { Link } from "react-router-dom";

export default function WebsiteDevelopment() {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <Link to="/" className="text-cyan-400 underline">
          ← Back to Services
        </Link>

        <h1 className="text-4xl font-bold text-pink-400">Websites That Work Beyond Design</h1>
        <p className="text-xl text-gray-300">
          Responsive. Fast. Optimized for growth.
        </p>

        <p className="text-gray-400">
          A website is more than your digital presence—it’s your business identity. Infozire builds modern,
          high-performance websites that don’t just look good but deliver measurable results.
          From small businesses to enterprises, we ensure your website is scalable, secure, and optimized for today’s digital audience.
        </p>

        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-pink-300">What You Get:</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Responsive designs for all devices</li>
            <li>Fast-loading, SEO-friendly websites</li>
            <li>Integration with CRM, payment gateways, and tools</li>
            <li>Tailored UI/UX for your brand identity</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-pink-300">Use Cases:</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>✔ Corporate Websites</li>
            <li>✔ E-commerce Platforms</li>
            <li>✔ Landing Pages & Microsites</li>
            <li>✔ Educational & Community Portals</li>
          </ul>
        </div>

        <button className="mt-4 px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg text-black font-semibold">
          Get Your Website Built by Infozire →
        </button>
      </div>
    </section>
  );
}
