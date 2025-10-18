"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Smartphone,
  Palette,
  Globe,
  TrendingUp,
  Video,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Calendar,
  User,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SocialMediaInfluencer from '@/public/Social Media Influencer.json'
import about1 from '@/public/placeholder.svg';
import blog1 from '@/public/blog1.webp';
import blog2 from '@/public/blog2.jpg';
import blog3 from '@/public/blog3.jpg';
import csh1 from '@/public/csh1.png';
import Lottie from 'react-lottie-player'


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/5 py-20 lg:py-32" id="hero" data-section-id="hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/20 text-primary border-primary/30">🚀 Full-Service Digital Agency</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Empowering Brands with <span className="text-primary">Technology</span> &{" "}
                <span className="text-accent">Marketing</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We transform your digital presence with cutting-edge web development, powerful marketing strategies, and
                stunning design solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 magnetic-button">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="magnetic-button">
                  View Our Work
                  <Play className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="">
                <Lottie
                  loop
                  animationData={SocialMediaInfluencer}
                  play
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">About Us</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate team of digital experts dedicated to transforming businesses through innovative technology
              solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={about1}
                alt="Our Expert Web Team in Vapi-WebCrafty Solution"
                width={500}
                height={400}
                className=""
              />

            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Crafting Digital Excellence Since 2019</h3>
              <p className="text-muted-foreground">
                Founded in 2019, WebCrafty Solution began as a small team of tech enthusiasts with a big vision: to help
                businesses thrive in the digital age. What started as a web development studio has evolved into a
                full-service digital agency.
              </p>
              <p className="text-muted-foreground">
                Today, we've successfully delivered over 500 projects for clients ranging from startups to enterprise
                companies. Our multidisciplinary approach combines technical expertise with creative innovation to
                deliver solutions that not only look great but drive real business results.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">20+</span>
                  <span className="text-muted-foreground">Projects Delivered</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">200+</span>
                  <span className="text-muted-foreground">Happy Clients</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">50+</span>
                  <span className="text-muted-foreground">Team Members</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">25+</span>
                  <span className="text-muted-foreground">Countries Served</span>
                </div>
              </div>

              <Link href="/about">
                <Button className="mt-4 bg-primary hover:bg-primary/90 magnetic-button">
                  Learn More About Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we provide comprehensive digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Website Development",
                description: "WordPress, Shopify, PHP, MERN Stack solutions",
                features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "App Development",
                description: "Native & cross-platform mobile applications",
                features: ["iOS & Android", "React Native", "Flutter"],
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Digital Marketing",
                description: "Social media, Google Ads, Meta Ads campaigns",
                features: ["Social Media", "Google Ads", "Analytics"],
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Graphics Design",
                description: "Logos, banners, social media posts & more",
                features: ["Brand Identity", "Social Posts", "Print Design"],
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Software Development",
                description: "Custom ERP, CRM, and web applications",
                features: ["Custom Solutions", "API Integration", "Database Design"],
              },
              {
                icon: <Video className="h-8 w-8" />,
                title: "Video Editing",
                description: "Professional video content & social media reels",
                features: ["Promo Videos", "Social Reels", "YouTube Content"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm card-hover"
              >
                <CardContent className="p-6">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "200+", label: "Happy Clients" },
              { number: "50+", label: "Team Members" },
              { number: "5+", label: "Years Experience" },
            ].map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-primary">{metric.number}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Blog</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest Insights & Updates</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights from our experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Web Development Trends 2024",
                alt: "Web Development Trends 2024 – Daman",
                excerpt:
                  "Discover the latest trends shaping the future of web development, from AI integration to progressive web apps.",
                category: "Web Development",
                author: "Sarah Chen",
                date: "March 15, 2024",
                readTime: "5 min read",
                image: blog1,
              },
              {
                id: 2,
                title: "Increase ROI with Google Ads ",
                alt: "Web Development Trends 2024 – Daman",
                excerpt:
                  "Learn proven strategies to optimize your Google Ads campaigns and maximize your return on investment.",
                category: "Digital Marketing",
                author: "Mike Rodriguez",
                date: "March 12, 2024",
                readTime: "7 min read",
                image: blog2,
              },
              {
                id: 3,
                title: "Mobile App Design – 2024 Best Practices",
                alt: "Mobile App Design in Udvada – 2024 Best Practices",
                excerpt:
                  "Explore the latest mobile app design trends and best practices to create engaging user experiences.",
                category: "App Development",
                author: "Emily Davis",
                date: "March 10, 2024",
                readTime: "6 min read",
                image: blog3,
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.alt}
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
                      <Button variant="ghost" size="sm" className="text-primary ">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button className="bg-primary hover:bg-primary/90 magnetic-button">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Don't just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechStart Inc.",
                rating: 5,
                text: "WebCrafty Solution transformed our online presence completely. Their team delivered beyond our expectations!",
              },
              {
                name: "Michael Chen",
                company: "E-commerce Plus",
                rating: 5,
                text: "Outstanding work on our Shopify store. Sales increased by 300% within the first month of launch.",
              },
              {
                name: "Emily Rodriguez",
                company: "Creative Agency",
                rating: 5,
                text: "Professional, creative, and reliable. They handle all our digital marketing needs perfectly.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 card-hover">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Case Studies Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Portfolio</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-xl text-muted-foreground">Real results for real businesses</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                id: 1,
                title: "Fashion Forward E-commerce in Vapi",
                alt:"",
                client: "Fashion Forward Inc.",
                result: "400% increase in online sales",
                image: csh1,
                tags: ["Shopify", "Digital Marketing", "SEO"],
              },
              {
                id: 2,
                title: "FitLife Wellness App",
                alt:"",
                client: "FitLife Wellness",
                result: "50K+ app downloads in 3 months",
                image: "/placeholder.svg?height=300&width=400",
                tags: ["React Native", "UI/UX", "App Store"],
              },
            ].map((study, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-2">{study.client}</p>
                  <p className="text-primary font-semibold mb-4">{study.result}</p>
                  <Link href={`/portfolio/${study.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      View Case Study
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button className="bg-primary hover:bg-primary/90 magnetic-button">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Build Your Digital Presence</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to transform your business? Get a free consultation and project quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 magnetic-button">
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary magnetic-button"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Start Your Project Today</h2>
              <p className="text-muted-foreground">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input placeholder="Your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Needed</label>
                    <select className="w-full p-3 border rounded-md bg-background">
                      <option>Select a service</option>
                      <option>Website Development</option>
                      <option>App Development</option>
                      <option>Digital Marketing</option>
                      <option>Graphics Design</option>
                      <option>Software Development</option>
                      <option>Video Editing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details</label>
                    <Textarea placeholder="Tell us about your project requirements..." rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 magnetic-button" size="lg">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
