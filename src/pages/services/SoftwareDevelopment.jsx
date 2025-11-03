import { Link } from "react-router-dom";

export default function SoftwareDevelopment() {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <Link to="/" className="text-cyan-400 underline">
          ← Back to Services
        </Link>

        <h1 className="text-4xl font-bold text-cyan-400">Custom Software That Fits Your Business</h1>
        <p className="text-xl text-gray-300">
          Build smarter, faster, and scalable applications tailored to your unique needs.
        </p>

        <p className="text-gray-400">
          Every business is different. Off-the-shelf software can’t always solve complex challenges.
          At Infozire, we design and develop custom applications that fit seamlessly into your workflows,
          helping you automate tasks, save time, and focus on growth.
        </p>

        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-300">What You Get:</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Applications tailored to your industry and business needs</li>
            <li>Scalable design to grow as your company grows</li>
            <li>Integration with existing systems and tools</li>
            <li>Secure and future-ready technology stack</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-300">Use Cases:</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>✔ ERP for SMEs</li>
            <li>✔ Inventory & Billing Systems</li>
            <li>✔ CRM and Customer Portals</li>
            <li>✔ Custom Mobile Applications</li>
          </ul>
        </div>

        <button className="mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-black font-semibold">
          Start Building Smarter Software →
        </button>
      </div>
    </section>
  );
}
