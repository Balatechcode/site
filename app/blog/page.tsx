import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const categories = [
    "All",
    "Digital Marketing",
    "Web Development",
    "App Development",
    "Design Tips",
    "Case Studies",
    "Industry Updates",
  ]

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Web Development Trends for 2024",
      excerpt:
        "Discover the latest trends shaping the future of web development, from AI integration to progressive web apps.",
      category: "Web Development",
      author: "Sarah Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 2,
      title: "How to Increase Your ROI with Google Ads",
      excerpt: "Learn proven strategies to optimize your Google Ads campaigns and maximize your return on investment.",
      category: "Digital Marketing",
      author: "Mike Rodriguez",
      date: "March 12, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 3,
      title: "Mobile App Design: Best Practices for 2024",
      excerpt: "Explore the latest mobile app design trends and best practices to create engaging user experiences.",
      category: "App Development",
      author: "Emily Davis",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 4,
      title: "Case Study: E-commerce Success Story",
      excerpt:
        "How we helped a fashion retailer increase their online sales by 400% through strategic digital marketing.",
      category: "Case Studies",
      author: "Alex Johnson",
      date: "March 8, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 5,
      title: "The Psychology of Color in Logo Design",
      excerpt: "Understanding how colors influence brand perception and customer behavior in logo design.",
      category: "Design Tips",
      author: "Lisa Wang",
      date: "March 5, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 6,
      title: "AI and Machine Learning in Digital Marketing",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing digital marketing strategies and customer engagement.",
      category: "Industry Updates",
      author: "David Kim",
      date: "March 3, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
  ]

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Our Blog</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Insights & Updates</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay updated with the latest trends, tips, and insights from the world of digital marketing and web
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input placeholder="Search articles..." className="pl-10 bg-white" />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-primary hover:bg-primary/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
              <p className="text-muted-foreground">Our latest and most popular content</p>
            </div>

            <Card className="overflow-hidden border-0 shadow-lg max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">Featured</Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="bg-primary hover:bg-primary/90">
                      Read More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground">Explore our recent posts and insights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Topics</h2>
            <p className="text-muted-foreground">Explore content by popular tags and topics</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "SEO",
              "React",
              "WordPress",
              "Social Media",
              "E-commerce",
              "Mobile Apps",
              "UI/UX",
              "JavaScript",
              "Google Ads",
              "Branding",
              "Analytics",
              "Conversion",
            ].map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-base py-2 px-4 hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter and never miss our latest articles and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Articles Sidebar */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Trending This Week</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.slice(0, 4).map((post, index) => (
                <Card key={post.id} className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="text-2xl font-bold text-primary/50 flex-shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2 text-xs">
                          {post.category}
                        </Badge>
                        <h3 className="font-semibold mb-2 line-clamp-2">{post.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
