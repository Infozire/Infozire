import { motion } from "framer-motion";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Business",
      desc: "How artificial intelligence is reshaping industries, empowering organizations, and creating new opportunities.",
      image: "https://i.pinimg.com/1200x/85/76/ef/8576efb426cbc2014d49af4ef24d4884.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Cloud Infrastructure Trends 2025",
      desc: "Exploring the latest cloud-native solutions, serverless architecture, and scalable hosting strategies.",
      image: "https://i.pinimg.com/736x/ec/3e/62/ec3e62ca85afd4b8fdba8292b90780a3.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Digital Transformation Done Right",
      desc: "Steps businesses can take to align technology with long-term growth strategies and customer success.",
      image: "https://i.pinimg.com/1200x/90/56/d3/9056d37cff0fcead7492b2a4fb4b01cf.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Automation & Smart Workflows",
      desc: "Boosting efficiency and reducing manual work through intelligent automation and process optimization.",
      image: "https://i.pinimg.com/736x/ed/f3/b1/edf3b1bec8e639a7c086f80adb1ca990.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Innovation & Emerging Tech",
      desc: "Research and insights on AI-driven tools, blockchain, and next-gen business solutions.",
      image: "https://i.pinimg.com/1200x/66/04/71/660471ef9e21e17046e0a8e289b0aba6.jpg",
      link: "#",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Hero */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our <span className="text-orange-500">Blogs</span>
        </motion.h1>

        <motion.p
          className="text-center text-lg text-gray-300 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Insights, updates, and perspectives from the team at Infozire Solutions.
        </motion.p>

        {/* Featured Blog */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center mb-20"
        >
          <img
            src={blogs[0].image}
            alt={blogs[0].title}
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">{blogs[0].title}</h2>
            <p className="text-gray-300 mb-6">{blogs[0].desc}</p>
            <a
              href={blogs[0].link}
              className="inline-block px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-indigo-400 transition"
            >
              Read More →
            </a>
          </div>
        </motion.div>

        {/* Grid Blogs (2) */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {blogs.slice(1, 3).map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/70 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-300 mb-4">{blog.desc}</p>
                <a href={blog.link}               className="inline-block px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-indigo-400 transition"
>
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Remaining Blogs (List Style) */}
        <div className="space-y-12">
          {blogs.slice(3).map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-center bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-700/70 transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full md:w-1/3 h-48 object-cover rounded-xl"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-300 mb-4">{blog.desc}</p>
                <a href={blog.link} className="inline-block px-5 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-indigo-400 transition">
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
