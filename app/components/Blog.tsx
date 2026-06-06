"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const blogPosts = [
    {
      title: "How to Start Your Crypto Journey: Zero to Hero Guide",
      excerpt:
        "Complete beginner's guide to cryptocurrency - learn the basics, set up your first wallet, and start your crypto journey safely and securely.",
      date: "2025-07-01",
      readTime: "12 min read",
      category: "Crypto Education",
      image: "https://i.ibb.co/NgfFvyxk/Chat-GPT-Image-Jul-3-2025-12-19-50-AM.png",
      tags: ["Cryptocurrency", "Beginner Guide", "Blockchain"],
      link: "https://cryptobasicguide.blogspot.com/2025/07/how-to-start-your-crypto-journey-zero-to-hero-guide.html",
    },
    {
      title: "Top 15 NFT Airdrops in 2025 You Shouldn't Miss",
      excerpt:
        "Discover the most promising NFT airdrops of 2025. Get free NFTs and tokens from upcoming projects with huge potential returns.",
      date: "2025-06-15",
      readTime: "8 min read",
      category: "NFT & Airdrops",
      image: "https://i.ibb.co/NgfFvyxk/Chat-GPT-Image-Jul-3-2025-12-19-50-AM.png",
      tags: ["NFT", "Airdrops", "Free Crypto"],
      link: "https://cryptobasicguide.blogspot.com/2025/06/Top-15-NFT-Airdrops-in-2025-You-Shouldnt-Miss.html",
    },
    {
      title: "100% Legit Crypto Airdrops - No KYC, No Investment Needed",
      excerpt:
        "Find legitimate cryptocurrency airdrops that require no KYC verification or investment. Start earning free crypto tokens today.",
      date: "2025-06-10",
      readTime: "10 min read",
      category: "Crypto Airdrops",
      image: "https://i.ibb.co/NgfFvyxk/Chat-GPT-Image-Jul-3-2025-12-19-50-AM.png",
      tags: ["Airdrops", "Free Crypto", "No KYC"],
      link: "https://cryptobasicguide.blogspot.com/2025/06/100-legit-crypto-airdrops-no-kyc-no-investment-needed.html",
    },
    {
      title: "Top 3 Meme Coins to Watch in 2025",
      excerpt:
        "Analysis of the most promising meme coins for 2025. Discover which meme cryptocurrencies have the potential for massive gains.",
      date: "2025-06-05",
      readTime: "6 min read",
      category: "Meme Coins",
      image: "https://i.ibb.co/NgfFvyxk/Chat-GPT-Image-Jul-3-2025-12-19-50-AM.png",
      tags: ["Meme Coins", "Investment", "2025 Predictions"],
      link: "https://cryptobasicguide.blogspot.com/2025/06/top-3-meme-coins-to-watch-in-2025.html",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gray-800/30 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-green-400">Blog Posts</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Sharing knowledge and insights about technology, programming, and digital trends
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-gray-800/50 rounded-xl overflow-hidden border border-green-500/20 hover:border-green-500/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500/90 text-white text-sm rounded-full">{post.category}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2 py-1 bg-gray-700/50 text-green-400 rounded text-xs border border-green-500/30"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  Read More
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Want to read more? Visit my blog for the complete collection of articles and tutorials.
          </p>
          <motion.a
            href="https://cryptobasicguide.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold flex items-center gap-2 transition-all text-center px-28 mx-96"
          >
            Visit Blog
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
