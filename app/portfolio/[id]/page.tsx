"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Calendar,
  Users,
  Target,
  TrendingUp,
  ChevronRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "react-hot-toast"
import { notFound } from "next/navigation"

// Case study data - in a real app, this would come from a database
const caseStudies = {
  1: {
    id: 1,
    title: "Fashion Forward E-commerce",
    slug: "fashion-forward-ecommerce",
    category: "E-commerce",
    client: "Fashion Forward Inc.",
    year: "2024",
    duration: "3 months",
    teamSize: "5 specialists",
    description:
      "A premium Shopify store with custom theme, advanced filtering, and integrated marketing tools that transformed the client's online presence and boosted sales significantly.",
    challenge:
      "Fashion Forward was struggling with an outdated e-commerce platform that had poor mobile responsiveness, slow loading times, and limited product filtering capabilities. Their conversion rates were low, and customers frequently abandoned carts due to a complicated checkout process.",
    solution:
      "We developed a custom Shopify theme that prioritized user experience, with a focus on mobile-first design and performance optimization. We implemented advanced product filtering, personalized recommendations, and a streamlined checkout process. Additionally, we integrated marketing tools for email campaigns, social media, and analytics.",
    results: [
      "400% increase in online sales within 6 months",
      "65% improvement in mobile conversion rates",
      "35% reduction in cart abandonment",
      "250% increase in average order value",
      "Seamless integration with inventory management system",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "React", "Node.js", "Klaviyo", "Google Analytics"],
    services: ["E-commerce Development", "UI/UX Design", "Custom Theme Development", "Marketing Integration"],
    testimonial: {
      quote:
        "WebCrafty Solution transformed our online store completely. The new design is not only beautiful but also highly functional. Our sales have quadrupled, and customers love the shopping experience. The team was professional, responsive, and delivered beyond our expectations.",
      author: "Sarah Johnson",
      position: "Marketing Director, Fashion Forward Inc.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    mainImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://fashionforward.example.com",
    nextProject: 2,
    prevProject: 6,
  },
  2: {
    id: 2,
    title: "FitLife Wellness App",
    slug: "fitlife-wellness-app",
    category: "Mobile Apps",
    client: "FitLife Wellness",
    year: "2024",
    duration: "5 months",
    teamSize: "7 specialists",
    description:
      "A comprehensive fitness tracking application with personalized workout plans, nutrition tracking, and social features that revolutionized the client's digital presence.",
    challenge:
      "FitLife Wellness wanted to expand their reach beyond physical locations and provide their members with a digital solution for tracking workouts, nutrition, and progress. They needed a mobile app that would engage users, provide personalized fitness plans, and build a community around their brand.",
    solution:
      "We developed a cross-platform mobile application using React Native that seamlessly integrated with their existing systems. The app features personalized workout plans, nutrition tracking, progress visualization, social sharing, and community challenges. We implemented gamification elements to increase user engagement and retention.",
    results: [
      "50K+ downloads in first 3 months",
      "4.8/5 average rating on app stores",
      "78% user retention rate after 30 days",
      "35% increase in gym membership sign-ups",
      "25% increase in overall revenue",
    ],
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "Redux", "AWS", "Apple HealthKit", "Google Fit"],
    services: ["Mobile App Development", "UI/UX Design", "Backend Development", "API Integration"],
    testimonial: {
      quote:
        "The team at WebCrafty Solution delivered an exceptional mobile app that exceeded our expectations. Their attention to detail, technical expertise, and understanding of user experience resulted in an app our customers love. The app has become a central part of our business strategy and has significantly increased our customer engagement.",
      author: "Michael Chen",
      position: "CEO, FitLife Wellness",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    mainImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://apps.apple.com/fitlife",
    nextProject: 3,
    prevProject: 1,
  },
  3: {
    id: 3,
    title: "TechVision Corporate Website",
    slug: "techvision-corporate-website",
    category: "Web Development",
    client: "TechVision Inc.",
    year: "2023",
    duration: "2 months",
    teamSize: "4 specialists",
    description:
      "A modern WordPress website with custom post types, interactive elements, and multilingual support that significantly improved the client's online presence and lead generation.",
    challenge:
      "TechVision's outdated website wasn't reflecting their position as an industry leader in technology solutions. They needed a modern, responsive website that would showcase their services, provide valuable resources to potential clients, and generate quality leads. Additionally, they required multilingual support to serve their international customer base.",
    solution:
      "We developed a custom WordPress website with a modern design that highlighted their services and expertise. We implemented custom post types for case studies, team members, and resources. Interactive elements such as animated statistics, service filters, and a dynamic team showcase were added to enhance user engagement. The site was built with multilingual support and optimized for search engines.",
    results: [
      "250% increase in lead generation",
      "65% improvement in average session duration",
      "40% reduction in bounce rate",
      "First page rankings for key industry terms",
      "Seamless content management for the marketing team",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "GSAP", "MySQL", "WPML", "Yoast SEO"],
    services: ["Web Design", "WordPress Development", "SEO Optimization", "Multilingual Implementation"],
    testimonial: {
      quote:
        "WebCrafty Solution delivered a website that perfectly represents our brand and has significantly improved our online presence. The site is not only visually impressive but also highly functional and easy to manage. Since launch, we've seen a dramatic increase in quality leads and positive feedback from our clients.",
      author: "David Rodriguez",
      position: "Marketing Manager, TechVision Inc.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    mainImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://techvision.example.com",
    nextProject: 4,
    prevProject: 2,
  },
  4: {
    id: 4,
    title: "EcoLife Brand Identity",
    slug: "ecolife-brand-identity",
    category: "UI/UX Design",
    client: "EcoLife Solutions",
    year: "2023",
    duration: "3 months",
    teamSize: "3 specialists",
    description:
      "Complete brand redesign including logo, color palette, typography, and application guidelines that revitalized the client's market presence and improved brand recognition.",
    challenge:
      "EcoLife Solutions, a sustainable products company, had an inconsistent brand identity that didn't effectively communicate their values or appeal to their target audience. They needed a complete brand overhaul that would position them as a premium eco-friendly brand while maintaining their approachable image.",
    solution:
      "We conducted extensive market research and competitor analysis to develop a comprehensive brand strategy. We created a new visual identity including logo, color palette, typography, and custom iconography that reflected their sustainable ethos. We developed detailed brand guidelines and templates for various applications, ensuring consistency across all touchpoints.",
    results: [
      "Brand recognition increased by 150% in market surveys",
      "85% positive feedback from existing customers",
      "40% increase in social media engagement",
      "30% improvement in conversion rates on rebranded materials",
      "Successful implementation across all digital and physical touchpoints",
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "InDesign", "After Effects"],
    services: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines"],
    testimonial: {
      quote:
        "The brand identity created by WebCrafty Solution perfectly captures our company's values and vision. The thoughtful design system has transformed how we present ourselves to the world and has resonated strongly with our customers. The team's strategic approach and creative execution exceeded our expectations.",
      author: "Emma Wilson",
      position: "Founder, EcoLife Solutions",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    mainImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://ecolife.example.com",
    nextProject: 5,
    prevProject: 3,
  },
  5: {
    id: 5,
    title: "LocalEats Marketing Campaign",
    slug: "localeats-marketing-campaign",
    category: "Digital Marketing",
    client: "LocalEats Restaurant",
    year: "2024",
    duration: "6 months",
    teamSize: "4 specialists",
    description:
      "Comprehensive digital marketing strategy including local SEO, Google Ads, and social media management that dramatically increased the client's online visibility and customer base.",
    challenge:
      "LocalEats, a family-owned restaurant, was struggling to attract customers in a competitive market. They had minimal online presence, poor local search visibility, and no cohesive marketing strategy. They needed a comprehensive digital marketing approach to increase awareness and drive foot traffic to their location.",
    solution:
      "We developed a multi-channel digital marketing strategy focused on local customers. This included optimizing their Google My Business profile, implementing local SEO strategies, creating targeted Google Ads campaigns, and establishing an engaging social media presence. We also developed a content calendar featuring food photography, behind-the-scenes content, and customer testimonials.",
    results: [
      "300% increase in website traffic",
      "250% increase in reservations",
      "First page rankings for key local search terms",
      "45% increase in foot traffic",
      "180% ROI on advertising spend",
    ],
    technologies: ["Google Ads", "Facebook Ads", "SEMrush", "Google Analytics", "Hootsuite", "Canva"],
    services: ["Local SEO", "PPC Advertising", "Social Media Management", "Content Strategy"],
    testimonial: {
      quote:
        "Working with WebCrafty Solution transformed our business. Their digital marketing expertise helped us reach new customers we never would have connected with otherwise. Our restaurant is busier than ever, and we're seeing a significant return on our marketing investment. Their team was responsive, knowledgeable, and genuinely invested in our success.",
      author: "Robert Garcia",
      position: "Owner, LocalEats Restaurant",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    mainImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://localeats.example.com",
    nextProject: 6,
    prevProject: 4,
  },
  6: {
    id: 6,
    title: "HealthPlus Patient Portal",
    slug: "healthplus-patient-portal",
    category: "Web Development",
    client: "HealthPlus Medical",
    year: "2023",
    duration: "4 months",
    teamSize: "6 specialists",
    description:
      "Secure web application for appointment scheduling, medical records, and provider communication that streamlined the client's operations and improved patient satisfaction.",
    challenge:
      "HealthPlus Medical needed a secure, user-friendly patient portal to streamline their administrative processes and improve patient communication. Their existing system was outdated, difficult to use, and didn't integrate well with their other systems. They required a solution that would enhance patient experience while ensuring compliance with healthcare regulations.",
    solution:
      "We developed a custom web application with secure authentication and role-based access control. The portal features appointment scheduling, medical records access, secure messaging with providers, prescription refill requests, and bill payment functionality. We ensured HIPAA compliance throughout the development process and implemented robust security measures to protect sensitive patient data.",
    results: [
      "Patient satisfaction increased by 60%",
      "Administrative costs reduced by 40%",
      "85% of patients actively using the portal",
      "50% reduction in phone calls for appointment scheduling",
      "30% improvement in bill payment timeliness",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Express", "JWT", "Socket.io"],
    services: ["Web Application Development", "UI/UX Design", "Database Design", "Security Implementation"],
    testimonial: {
      quote:
        "The patient portal developed by WebCrafty Solution has revolutionized how we interact with our patients. The system is intuitive for both patients and staff, and has significantly reduced our administrative burden. The team's attention to security and compliance was exceptional, giving us confidence in the solution. Our patients love the convenience, and our staff appreciates the streamlined workflows.",
      author: "Dr. Jennifer Lee",
      position: "Medical Director, HealthPlus Medical",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    mainImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    liveUrl: "https://healthplus.example.com",
    nextProject: 1,
    prevProject: 5,
  },
}

export default function CaseStudyDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showShareMenu, setShowShareMenu] = useState(false)

  const caseStudyId = Number.parseInt(params.id)
  const caseStudy = caseStudies[caseStudyId as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = caseStudy.title

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
            <Link href="/portfolio" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>

            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">{caseStudy.category}</Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{caseStudy.title}</h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{caseStudy.description}</p>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Client: {caseStudy.client}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Year: {caseStudy.year}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Duration: {caseStudy.duration}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Team: {caseStudy.teamSize}</Badge>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {caseStudy.liveUrl && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-primary hover:bg-primary/90" asChild>
                    <Link href={caseStudy.liveUrl} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Project
                    </Link>
                  </Button>
                </motion.div>
              )}

              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 px-4 py-2 rounded-md border bg-white border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
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
            className="max-w-5xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={caseStudy.mainImage || "/placeholder.svg"}
                alt={caseStudy.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2"
              >
                {/* Challenge */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Results</h2>
                  <div className="space-y-3">
                    {caseStudy.results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{result}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudy.gallery.map((image, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="cursor-pointer overflow-hidden rounded-lg shadow-md"
                        onClick={() => setSelectedImage(image)}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${caseStudy.title} gallery ${idx + 1}`}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mb-12 bg-gradient-to-r from-primary/10 to-accent/5 p-6 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={caseStudy.testimonial.avatar || "/placeholder.svg"}
                        alt={caseStudy.testimonial.author}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="italic text-muted-foreground mb-4">"{caseStudy.testimonial.quote}"</p>
                      <div>
                        <div className="font-semibold">{caseStudy.testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{caseStudy.testimonial.position}</div>
                      </div>
                    </div>
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
                {/* Project Details */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Year</div>
                          <div className="font-medium">{caseStudy.year}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Team Size</div>
                          <div className="font-medium">{caseStudy.teamSize}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Target className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Duration</div>
                          <div className="font-medium">{caseStudy.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Category</div>
                          <div className="font-medium">{caseStudy.category}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Services Provided */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Services Provided</h3>
                    <div className="space-y-2">
                      {caseStudy.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Technologies Used */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <Link
                href={`/portfolio/${caseStudy.prevProject}`}
                className="flex items-center gap-2 text-primary hover:text-primary/80"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous Project
              </Link>
              <Link
                href={`/portfolio/${caseStudy.nextProject}`}
                className="flex items-center gap-2 text-primary hover:text-primary/80"
              >
                Next Project
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create something amazing together. Contact us to discuss your project requirements.
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
                  View All Services
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
