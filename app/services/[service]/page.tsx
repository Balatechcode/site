import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Globe, Smartphone, Palette, Code, TrendingUp, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Define service data
const servicesData = {
  "app-development": {
    title: "App Development",
    description:
      "We create native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
    icon: <Smartphone className="h-8 w-8" />,
    heroImage: "/placeholder.svg?height=400&width=800",
    features: [
      {
        title: "Native iOS & Android",
        description: "Custom applications built specifically for iOS and Android platforms",
      },
      {
        title: "Cross-Platform Development",
        description: "Efficient solutions that work seamlessly across multiple platforms",
      },
      {
        title: "Flutter & React Native",
        description: "Modern frameworks for fast, responsive, and beautiful applications",
      },
      {
        title: "UI/UX Design",
        description: "Intuitive interfaces and engaging user experiences",
      },
      {
        title: "App Store Optimization",
        description: "Strategic approaches to improve visibility and downloads",
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing updates and technical support for your application",
      },
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "AWS Amplify"],
    caseStudies: [
      {
        title: "FitLife Wellness App",
        description:
          "A fitness tracking application with personalized workout plans, nutrition tracking, and social features.",
        results: "50K+ downloads in first 3 months, 4.8/5 average rating",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "ShopSmart E-commerce App",
        description:
          "A comprehensive shopping application with AR product visualization, secure payments, and loyalty program.",
        results: "200% increase in mobile sales for the client",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  "website-development": {
    title: "Website Development",
    description:
      "We build custom websites and e-commerce platforms that are visually stunning, fully responsive, and optimized for performance and SEO.",
    icon: <Globe className="h-8 w-8" />,
    heroImage: "/placeholder.svg?height=400&width=800",
    features: [
      {
        title: "WordPress Development",
        description: "Custom themes and plugins for the world's most popular CMS",
      },
      {
        title: "Shopify E-commerce",
        description: "Powerful online stores with seamless payment processing",
      },
      {
        title: "Custom PHP Solutions",
        description: "Tailored web applications built with robust PHP frameworks",
      },
      {
        title: "MERN Stack Applications",
        description: "Modern web apps using MongoDB, Express, React, and Node.js",
      },
      {
        title: "SEO Optimization",
        description: "Built-in best practices to improve search engine rankings",
      },
      {
        title: "Responsive Design",
        description: "Websites that look and function perfectly on all devices",
      },
    ],
    technologies: ["WordPress", "Shopify", "PHP", "Laravel", "React", "Next.js", "MongoDB", "MySQL"],
    caseStudies: [
      {
        title: "Fashion Forward E-commerce",
        description: "A premium Shopify store with custom theme, product filtering, and integrated marketing tools.",
        results: "400% increase in online sales within 6 months",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "TechVision Corporate Website",
        description:
          "A modern WordPress website with custom post types, interactive elements, and multilingual support.",
        results: "250% increase in lead generation",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  "graphics-designing": {
    title: "Graphics Designing",
    description:
      "We create eye-catching visual designs that strengthen your brand identity and effectively communicate your message to your target audience.",
    icon: <Palette className="h-8 w-8" />,
    heroImage: "/placeholder.svg?height=400&width=800",
    features: [
      {
        title: "Logo Design",
        description: "Distinctive and memorable brand marks that represent your identity",
      },
      {
        title: "Brand Identity",
        description: "Comprehensive visual systems including colors, typography, and style guides",
      },
      {
        title: "Social Media Graphics",
        description: "Engaging visuals optimized for different social platforms",
      },
      {
        title: "Banner & Poster Design",
        description: "Eye-catching promotional materials for digital and print",
      },
      {
        title: "Thumbnails & Covers",
        description: "Attention-grabbing images for videos and publications",
      },
      {
        title: "Print Materials",
        description: "Business cards, brochures, packaging, and other physical collateral",
      },
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Canva Pro"],
    caseStudies: [
      {
        title: "EcoLife Brand Identity",
        description: "Complete brand redesign including logo, color palette, typography, and application guidelines.",
        results: "Brand recognition increased by 150% in market surveys",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "TechConf Event Materials",
        description:
          "Comprehensive design package including posters, social media graphics, badges, and presentation templates.",
        results: "Event registration increased by 75% compared to previous year",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  "software-development": {
    title: "Software Development",
    description:
      "We develop custom software solutions that streamline your business operations, improve efficiency, and provide valuable insights through data.",
    icon: <Code className="h-8 w-8" />,
    heroImage: "/placeholder.svg?height=400&width=800",
    features: [
      {
        title: "Custom ERP Solutions",
        description: "Integrated systems to manage all aspects of your business",
      },
      {
        title: "CRM Development",
        description: "Customer relationship management tools tailored to your workflow",
      },
      {
        title: "Web Applications",
        description: "Browser-based software with powerful functionality",
      },
      {
        title: "PHP & Laravel",
        description: "Robust applications built on industry-standard frameworks",
      },
      {
        title: "MERN Stack",
        description: "Modern applications with MongoDB, Express, React, and Node.js",
      },
      {
        title: "API Development",
        description: "Custom interfaces to connect your systems and services",
      },
    ],
    technologies: ["PHP", "Laravel", "Node.js", "React", "MongoDB", "MySQL", "PostgreSQL", "AWS", "Docker"],
    caseStudies: [
      {
        title: "SupplyChain Management System",
        description: "Custom ERP solution for inventory management, order processing, and supplier coordination.",
        results: "Operational efficiency improved by 35%, errors reduced by 80%",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "HealthPlus Patient Portal",
        description: "Secure web application for appointment scheduling, medical records, and provider communication.",
        results: "Patient satisfaction increased by 60%, administrative costs reduced by 40%",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description:
      "We develop and execute strategic marketing campaigns that drive traffic, engagement, and conversions across digital channels.",
    icon: <TrendingUp className="h-8 w-8" />,
    heroImage: "/placeholder.svg?height=400&width=800",
    features: [
      {
        title: "Social Media Marketing",
        description: "Strategic content and community management across platforms",
      },
      {
        title: "Google & Meta Ads",
        description: "Targeted advertising campaigns with optimized ROI",
      },
      {
        title: "YouTube Advertising",
        description: "Video marketing strategies to reach your audience",
      },
      {
        title: "Google My Business",
        description: "Local SEO optimization to improve visibility",
      },
      {
        title: "Content Strategy",
        description: "Valuable content that attracts and engages your audience",
      },
      {
        title: "Analytics & Reporting",
        description: "Data-driven insights to continuously improve performance",
      },
    ],
    technologies: [
      "Google Ads",
      "Meta Business Suite",
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
      "Mailchimp",
      "HubSpot",
    ],
    caseStudies: [
      {
        title: "LocalEats Restaurant Campaign",
        description:
          "Comprehensive digital marketing strategy including local SEO, Google Ads, and social media management.",
        results: "300% increase in website traffic, 250% increase in reservations",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "FashionTrend E-commerce Marketing",
        description: "Integrated campaign across Meta platforms, Google Shopping, and email marketing.",
        results: "ROAS of 450%, new customer acquisition up by 200%",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
  "video-editing": {
    title: "Video Editing",
    description:
      "We create professional video content that captivates your audience, tells your story, and drives engagement across platforms.",
    icon: <Video className="h-8 w-8" />,
    heroImage: "/placeholder.svg?height=400&width=800",
    features: [
      {
        title: "Promo Videos",
        description: "Compelling promotional content for products and services",
      },
      {
        title: "Social Media Reels",
        description: "Short-form videos optimized for engagement",
      },
      {
        title: "YouTube Content",
        description: "Professional videos designed for your channel growth",
      },
      {
        title: "Ad Campaigns",
        description: "High-converting video ads for digital platforms",
      },
      {
        title: "Motion Graphics",
        description: "Animated elements that enhance your visual storytelling",
      },
      {
        title: "Video Optimization",
        description: "SEO and platform-specific optimization for maximum reach",
      },
    ],
    technologies: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Final Cut Pro",
      "DaVinci Resolve",
      "Cinema 4D",
      "Audition",
    ],
    caseStudies: [
      {
        title: "TechGadget Product Launch",
        description: "Series of promotional videos, social media clips, and YouTube tutorials for new product line.",
        results: "5M+ views across platforms, 300% increase in product interest",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "FitLife YouTube Channel",
        description: "Ongoing production of workout tutorials, nutrition guides, and motivational content.",
        results: "Channel growth from 10K to 250K subscribers in 12 months",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  },
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const serviceId = params.service
  const serviceData = servicesData[serviceId as keyof typeof servicesData]

  // If service doesn't exist, return 404
  if (!serviceData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30">Our Services</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold">{serviceData.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{serviceData.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={serviceData.heroImage || "/placeholder.svg"}
                alt={serviceData.title}
                width={800}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive {serviceData.title.toLowerCase()} services tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.features.map((feature, index) => (
              <Card key={index} className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest tools and frameworks to deliver exceptional results
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {serviceData.technologies.map((tech, index) => (
              <Badge
                key={index}
                className="text-base py-2 px-4 bg-white shadow-sm border border-border hover:bg-primary/10 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've helped our clients achieve their goals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {serviceData.caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="font-medium text-primary">Results: {study.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we approach {serviceData.title.toLowerCase()} projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We learn about your goals, audience, and requirements",
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a detailed roadmap and project specifications",
              },
              {
                step: "03",
                title: "Development",
                description: "Our team brings your project to life with quality execution",
              },
              {
                step: "04",
                title: "Delivery & Support",
                description: "We launch your project and provide ongoing assistance",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about our {serviceData.title.toLowerCase()} services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: `How long does a typical ${serviceData.title.toLowerCase()} project take?`,
                answer:
                  "Project timelines vary based on complexity and requirements. Simple projects may take 2-4 weeks, while more complex ones can take 2-3 months. We'll provide a detailed timeline during the proposal phase.",
              },
              {
                question: `What is your pricing model for ${serviceData.title.toLowerCase()} services?`,
                answer:
                  "We offer flexible pricing options including project-based quotes, hourly rates, and retainer packages. Each solution is customized based on your specific needs and budget constraints.",
              },
              {
                question: `Do you provide support after the ${serviceData.title.toLowerCase()} project is completed?`,
                answer:
                  "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. Our team is available for updates, troubleshooting, and enhancements.",
              },
              {
                question: `Can you work with our existing team on ${serviceData.title.toLowerCase()} projects?`,
                answer:
                  "We're experienced in collaborative environments and can work alongside your in-house team, providing specialized expertise while integrating with your existing workflows.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your {serviceData.title.toLowerCase()} project and create a solution that meets your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Explore Related Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our other services that complement {serviceData.title.toLowerCase()}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(servicesData)
              .filter(([id]) => id !== serviceId)
              .slice(0, 3)
              .map(([id, service]) => (
                <Card key={id} className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">{service.description}</p>
                    <Link href={`/services/${id}`}>
                      <Button variant="outline" className="w-full">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
