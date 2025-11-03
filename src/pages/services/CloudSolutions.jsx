import { Link } from "react-router-dom";

export default function CloudSolutions() {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <Link to="/" className="text-cyan-400 underline">
          ← Back to Services
        </Link>

        <h1 className="text-4xl font-bold text-green-400">Scale Without Limits with Cloud</h1>
        <p className="text-xl text-gray-300">
          Secure, flexible, and built for the future of work.
        </p>

        <p className="text-gray-400">
          The world is moving to the cloud—and so should your business. Infozire helps organizations
          adopt secure, scalable, and reliable cloud solutions that provide freedom, flexibility, and efficiency.
          Whether it’s migrating your systems or building cloud-native applications, we ensure your business is always connected, always ready.
        </p>

        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-green-300">What You Get:</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Cloud migration and deployment services</li>
            <li>Multi-tenant & single-tenant SaaS architecture</li>
            <li>Data security and backup solutions</li>
            <li>Pay-as-you-grow flexibility</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-green-300">Use Cases:</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>✔ SaaS Platforms</li>
            <li>✔ Cloud Hosting for Apps</li>
            <li>✔ Remote Collaboration Systems</li>
            <li>✔ Secure Data Storage Solutions</li>
          </ul>
        </div>

        <button className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-black font-semibold">
          Move Your Business to the Cloud →
        </button>
      </div>
    </section>
  );
}
