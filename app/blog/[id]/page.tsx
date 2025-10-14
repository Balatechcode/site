"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar,
  Clock,
  Share2,
  Heart,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { toast } from "react-hot-toast"
import { notFound } from "next/navigation"

// Blog data - in a real app, this would come from a database
const blogPosts = {
  1: {
    id: 1,
    title: "10 Essential Web Development Trends for 2024",
    slug: "web-development-trends-2024",
    excerpt:
      "Discover the latest trends shaping the future of web development, from AI integration to progressive web apps.",
    content: `
      <p>The web development landscape is constantly evolving, and 2024 brings exciting new trends that are reshaping how we build and interact with websites. As a leading digital agency, we've identified the top 10 trends that will dominate the industry this year.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing how developers write code. Tools like GitHub Copilot and ChatGPT are becoming essential for faster, more efficient development. AI assists in:</p>
      <ul>
        <li>Code generation and completion</li>
        <li>Bug detection and fixing</li>
        <li>Automated testing</li>
        <li>Performance optimization</li>
      </ul>

      <h2>2. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and mobile applications. They offer:</p>
      <ul>
        <li>Offline functionality</li>
        <li>Push notifications</li>
        <li>App-like user experience</li>
        <li>Improved performance</li>
      </ul>

      <h2>3. Serverless Architecture</h2>
      <p>Serverless computing is gaining momentum, allowing developers to focus on code rather than infrastructure management. Benefits include:</p>
      <ul>
        <li>Reduced operational costs</li>
        <li>Automatic scaling</li>
        <li>Faster deployment</li>
        <li>Improved developer productivity</li>
      </ul>

      <h2>4. WebAssembly (WASM)</h2>
      <p>WebAssembly enables high-performance applications in the browser, opening new possibilities for web development.</p>

      <h2>5. Micro-Frontends</h2>
      <p>Breaking down large frontend applications into smaller, manageable pieces improves maintainability and team collaboration.</p>

      <h2>Conclusion</h2>
      <p>These trends represent the future of web development. At WebCrafty Solution, we stay ahead of these trends to deliver cutting-edge solutions for our clients. Ready to modernize your web presence? Contact us today!</p>
    `,
    category: "Web Development",
    author: "Sarah Chen",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorBio: "Senior Full Stack Developer with 8+ years of experience in modern web technologies.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Web Development", "AI", "PWA", "Serverless", "WebAssembly"],
    likes: 124,
    comments: 18,
    shares: 32,
  },
  2: {
    id: 2,
    title: "How to Increase Your ROI with Google Ads",
    slug: "increase-roi-google-ads",
    excerpt: "Learn proven strategies to optimize your Google Ads campaigns and maximize your return on investment.",
    content: `
      <p>Google Ads can be a powerful tool for driving traffic and conversions, but many businesses struggle to achieve a positive return on investment. In this comprehensive guide, we'll share proven strategies to optimize your campaigns and maximize ROI.</p>

      <h2>Understanding ROI in Google Ads</h2>
      <p>Return on Investment (ROI) in Google Ads is calculated as:</p>
      <blockquote>ROI = (Revenue - Cost) / Cost × 100</blockquote>
      <p>A positive ROI means your campaigns are profitable, while a negative ROI indicates you're spending more than you're earning.</p>

      <h2>1. Keyword Research and Selection</h2>
      <p>The foundation of successful Google Ads campaigns lies in thorough keyword research:</p>
      <ul>
        <li>Use Google Keyword Planner for search volume data</li>
        <li>Focus on long-tail keywords for better conversion rates</li>
        <li>Analyze competitor keywords</li>
        <li>Consider search intent behind keywords</li>
      </ul>

      <h2>2. Ad Copy Optimization</h2>
      <p>Compelling ad copy is crucial for improving click-through rates and conversions:</p>
      <ul>
        <li>Include your target keyword in headlines</li>
        <li>Highlight unique selling propositions</li>
        <li>Use strong calls-to-action</li>
        <li>Test multiple ad variations</li>
      </ul>

      <h2>3. Landing Page Optimization</h2>
      <p>Your landing page experience directly impacts Quality Score and conversion rates:</p>
      <ul>
        <li>Ensure message match between ads and landing pages</li>
        <li>Optimize page loading speed</li>
        <li>Use clear and compelling headlines</li>
        <li>Implement trust signals and testimonials</li>
      </ul>

      <h2>4. Bid Management Strategies</h2>
      <p>Smart bidding can significantly improve campaign performance:</p>
      <ul>
        <li>Use Target CPA for conversion-focused campaigns</li>
        <li>Implement Target ROAS for revenue optimization</li>
        <li>Consider Enhanced CPC for manual control</li>
        <li>Monitor and adjust bids regularly</li>
      </ul>

      <h2>5. Conversion Tracking</h2>
      <p>Accurate conversion tracking is essential for measuring ROI:</p>
      <ul>
        <li>Set up Google Analytics goals</li>
        <li>Implement conversion tracking codes</li>
        <li>Track both online and offline conversions</li>
        <li>Use attribution models to understand customer journey</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Improving Google Ads ROI requires continuous optimization and testing. By implementing these strategies, you can significantly improve your campaign performance and achieve better returns on your advertising investment.</p>
    `,
    category: "Digital Marketing",
    author: "Mike Rodriguez",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorBio: "Digital Marketing Specialist with expertise in PPC advertising and conversion optimization.",
    date: "March 12, 2024",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Google Ads", "PPC", "ROI", "Digital Marketing", "Conversion"],
    likes: 89,
    comments: 12,
    shares: 24,
  },
  3: {
    id: 3,
    title: "Mobile App Design: Best Practices for 2024",
    slug: "mobile-app-design-best-practices-2024",
    excerpt: "Explore the latest mobile app design trends and best practices to create engaging user experiences.",
    content: `
      <p>Mobile app design continues to evolve rapidly, with new trends and technologies emerging every year. In 2024, creating exceptional user experiences requires understanding both aesthetic trends and functional best practices.</p>

      <h2>1. Minimalist Design Approach</h2>
      <p>Less is more in 2024. Clean, minimalist designs help users focus on what matters most:</p>
      <ul>
        <li>Use plenty of white space</li>
        <li>Limit color palettes to 2-3 primary colors</li>
        <li>Focus on essential features</li>
        <li>Eliminate unnecessary elements</li>
      </ul>

      <h2>2. Dark Mode Implementation</h2>
      <p>Dark mode is no longer optional. It provides:</p>
      <ul>
        <li>Reduced eye strain in low-light conditions</li>
        <li>Better battery life on OLED screens</li>
        <li>Modern, sleek appearance</li>
        <li>Improved accessibility</li>
      </ul>

      <h2>3. Gesture-Based Navigation</h2>
      <p>Modern users expect intuitive gesture controls:</p>
      <ul>
        <li>Swipe gestures for navigation</li>
        <li>Pull-to-refresh functionality</li>
        <li>Pinch-to-zoom capabilities</li>
        <li>Long-press for contextual menus</li>
      </ul>

      <h2>4. Microinteractions</h2>
      <p>Small animations and feedback enhance user experience:</p>
      <ul>
        <li>Button press animations</li>
        <li>Loading state indicators</li>
        <li>Success/error feedback</li>
        <li>Smooth transitions between screens</li>
      </ul>

      <h2>5. Accessibility First</h2>
      <p>Designing for accessibility benefits all users:</p>
      <ul>
        <li>High contrast color schemes</li>
        <li>Large, tappable targets</li>
        <li>Screen reader compatibility</li>
        <li>Voice control support</li>
      </ul>

      <h2>6. Performance Optimization</h2>
      <p>Fast, responsive apps are crucial for user retention:</p>
      <ul>
        <li>Optimize image sizes and formats</li>
        <li>Implement lazy loading</li>
        <li>Minimize app size</li>
        <li>Reduce loading times</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Great mobile app design in 2024 balances aesthetics with functionality. By following these best practices, you can create apps that not only look great but also provide exceptional user experiences that drive engagement and retention.</p>
    `,
    category: "App Development",
    author: "Emily Davis",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorBio: "UI/UX Designer specializing in mobile app design and user experience optimization.",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Mobile Design", "UI/UX", "App Development", "User Experience"],
    likes: 156,
    comments: 23,
    shares: 41,
  },
}

const relatedPosts = [
  {
    id: 4,
    title: "The Future of E-commerce Development",
    category: "Web Development",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Social Media Marketing Strategies",
    category: "Digital Marketing",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Building Scalable React Applications",
    category: "Web Development",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "8 min read",
  },
]

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [comment, setComment] = useState("")

  const postId = Number.parseInt(params.id)
  const post = blogPosts[postId as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    toast.success(isLiked ? "Removed from favorites" : "Added to favorites")
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = post.title

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank")
        break
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank")
        break
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank")
        break
      case "copy":
        navigator.clipboard.writeText(url)
        toast.success("Link copied to clipboard!")
        break
    }
    setShowShareMenu(false)
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      toast.success("Comment submitted successfully!")
      setComment("")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link> <br />

            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">{post.category}</Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Image
                  src={post.authorImage || "/placeholder.svg"}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                  isLiked
                    ? "bg-red-50 border-red-200 text-red-600"
                    : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                {post.likes + (isLiked ? 1 : 0)}
              </motion.button>

              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border bg-white border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </motion.button>

                {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 bg-white rounded-lg shadow-lg border p-2 z-10"
                  >
                    <button
                      onClick={() => handleShare("facebook")}
                      className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded"
                    >
                      <Facebook className="h-4 w-4 text-blue-600" />
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded"
                    >
                      <Twitter className="h-4 w-4 text-blue-400" />
                      Twitter
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded"
                    >
                      <Linkedin className="h-4 w-4 text-blue-700" />
                      LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 rounded"
                    >
                      <Copy className="h-4 w-4 text-gray-600" />
                      Copy Link
                    </button>
                  </motion.div>
                )}
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <MessageCircle className="h-4 w-4" />
                {post.comments} comments
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="w-full mx-auto">
            <div className="grid lg:grid-cols-4 gap-2">
              {/* Main Content */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <div
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-blockquote:border-primary prose-blockquote:text-primary"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-6 bg-muted/30 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
                      <p className="text-muted-foreground">{post.authorBio}</p>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Comments ({post.comments})</h3>

                  {/* Comment Form */}
                  <Card className="mb-8">
                    <CardContent className="p-6">
                      <form onSubmit={handleCommentSubmit} className="space-y-4">
                        <Textarea
                          placeholder="Share your thoughts..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          rows={4}
                        />
                        <Button type="submit" className="bg-primary hover:bg-primary/90">
                          Post Comment
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  {/* Sample Comments */}
                  <div className="space-y-6">
                    {[
                      {
                        name: "John Smith",
                        avatar: "/placeholder.svg?height=50&width=50",
                        time: "2 hours ago",
                        comment:
                          "Great article! These trends are exactly what we're seeing in our projects. Thanks for sharing your insights.",
                      },
                      {
                        name: "Maria Garcia",
                        avatar: "/placeholder.svg?height=50&width=50",
                        time: "5 hours ago",
                        comment:
                          "Very informative post. I especially found the section on AI-powered development tools interesting. We're just starting to explore these at our company.",
                      },
                    ].map((comment, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex gap-4 p-4 bg-white rounded-lg border"
                      >
                        <Image
                          src={comment.avatar || "/placeholder.svg"}
                          alt={comment.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold">{comment.name}</span>
                            <span className="text-sm text-muted-foreground">{comment.time}</span>
                          </div>
                          <p className="text-muted-foreground">{comment.comment}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-1"
              >
                {/* Related Posts */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost, index) => (
                        <Link key={index} href={`/blog/${relatedPost.id}`}>
                          <div className="flex gap-3 hover:bg-muted/50 p-2 rounded-lg transition-colors">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              width={60}
                              height={60}
                              className="rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-sm line-clamp-2 mb-1">{relatedPost.title}</h4>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Badge variant="outline" className="text-xs">
                                  {relatedPost.category}
                                </Badge>
                                <span>{relatedPost.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest articles and insights delivered to your inbox.
                    </p>
                    <form className="space-y-3">
                      <Input placeholder="Your email address" type="email" />
                      <Button className="w-full bg-primary hover:bg-primary/90">Subscribe</Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <Link href="/blog/2" className="flex items-center gap-2 text-primary hover:text-primary/80">
                <ArrowLeft className="h-4 w-4" />
                Previous Post
              </Link>
              <Link href="/blog/3" className="flex items-center gap-2 text-primary hover:text-primary/80">
                Next Post
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you implement these strategies for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Get Free Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  View Our Services
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
