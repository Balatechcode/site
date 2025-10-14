"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Search,
  Code,
  Rocket,
  HeadphonesIcon,
  Users,
  Award,
  TrendingUp,
  Zap,
  Shield,
  Globe,
} from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import aboutUs from "@/public/aboutus.json"
import Lottie from "react-lottie-player"

export default function AboutPage() {
  const expertise = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites and web applications using modern technologies",
      technologies: ["React", "Next.js", "WordPress", "Shopify", "PHP", "Laravel"],
      projects: "200+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      projects: "150+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive traffic and conversions",
      technologies: ["Google Ads", "Meta Ads", "SEO", "Analytics", "Email Marketing"],
      projects: "300+",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design that creates exceptional digital experiences",
      technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
      projects: "250+",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Software Development",
      description: "Custom software solutions for business process automation",
      technologies: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"],
      projects: "100+",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Video Production",
      description: "Professional video content for marketing and brand storytelling",
      technologies: ["Premiere Pro", "After Effects", "Final Cut", "DaVinci Resolve"],
      projects: "180+",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const whatWeDo = [
    {
      title: "Strategy & Consultation",
      description:
        "We analyze your business needs and create comprehensive digital strategies that align with your goals.",
      features: ["Business Analysis", "Digital Strategy Planning", "Technology Consulting", "Market Research"],
    },
    {
      title: "Design & Development",
      description:
        "Our team creates beautiful, functional solutions using the latest technologies and design principles.",
      features: ["Custom Development", "Responsive Design", "User Experience Design", "Quality Assurance"],
    },
    {
      title: "Marketing & Growth",
      description: "We help you reach your target audience and grow your business through strategic digital marketing.",
      features: ["SEO Optimization", "Paid Advertising", "Social Media Marketing", "Content Strategy"],
    },
    {
      title: "Support & Maintenance",
      description: "We provide ongoing support to ensure your digital assets continue to perform at their best.",
      features: ["24/7 Technical Support", "Regular Updates", "Performance Monitoring", "Security Maintenance"],
    },
  ]

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Industry Recognition",
      description: "Winner of multiple web design and digital marketing awards",
      stats: "15+ Awards",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client Satisfaction",
      description: "Consistently high client satisfaction ratings and testimonials",
      stats: "98% Satisfaction",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Business Growth",
      description: "Helped clients achieve significant growth in revenue and reach",
      stats: "300% Avg Growth",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Serving clients across multiple countries and industries",
      stats: "25+ Countries",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="py-20 bg-gradient-to-br from-primary/10 to-accent/5"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">About WebCrafty Solution</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Crafting Digital Excellence Since 2019</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a passionate team of developers, designers, and digital marketers dedicated to transforming
              businesses through innovative technology solutions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2019, WebCrafty Solution began as a small team of tech enthusiasts with a big vision: to
                  help businesses thrive in the digital age. What started as a web development studio has evolved into a
                  full-service digital agency.
                </p>
                <p>
                  Today, we've successfully delivered over 500 projects for clients ranging from startups to enterprise
                  companies. Our multidisciplinary approach combines technical expertise with creative innovation to
                  deliver solutions that not only look great but drive real business results.
                </p>
                <p>
                  We believe that every business deserves a strong digital presence, and we're here to make that happen
                  through cutting-edge technology and strategic thinking.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            ><Lottie
                  loop
                  animationData={aboutUs}
                  play
                  style={{ width: "auto", height: "auto" }}
                />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Expertise */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in cutting-edge technologies and proven methodologies to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="h-full border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div
                      className={`bg-gradient-to-r ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.technologies.slice(0, 3).map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {item.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{item.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{item.projects}</span>
                      <span className="text-sm text-muted-foreground">Projects Completed</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* What We Do For You */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Do For You</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach ensures your digital transformation is successful from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whatWeDo.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-primary/5 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-3"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognition and results that speak to our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center"
              >
                <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-primary">{achievement.icon}</div>
                    </motion.div>
                    <div className="text-3xl font-bold text-primary mb-2">{achievement.stats}</div>
                    <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision, Values */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Our Mission",
                description:
                  "To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting competitive advantages in the digital marketplace.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Eye className="h-8 w-8" />,
                title: "Our Vision",
                description:
                  "To be the leading digital transformation partner, recognized for our innovation, quality, and commitment to helping businesses achieve their full potential online.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Our Values",
                description:
                  "Excellence, integrity, innovation, and client success. We believe in building long-term partnerships based on trust, transparency, and delivering exceptional results.",
                color: "from-green-500 to-emerald-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="text-center bg-white/80 backdrop-blur-sm border-0 h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div
                      className={`bg-gradient-to-r ${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Team */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Talented professionals passionate about creating digital excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300",
                bio: "10+ years in digital strategy and business development",
                expertise: "Strategy & Leadership",
              },
              {
                name: "Sarah Chen",
                role: "Lead Developer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Full-stack expert specializing in MERN and PHP",
                expertise: "Web Development",
              },
              {
                name: "Mike Rodriguez",
                role: "Creative Director",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Award-winning designer with 8+ years experience",
                expertise: "UI/UX Design",
              },
              {
                name: "Emily Davis",
                role: "Marketing Manager",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Digital marketing strategist and analytics expert",
                expertise: "Digital Marketing",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <Badge variant="outline" className="mb-3 text-xs">
                      {member.expertise}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Work Process */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Work Process</h2>
            <p className="text-xl text-muted-foreground">A proven methodology that delivers exceptional results</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your business goals and requirements",
                icon: <Search className="h-8 w-8" />,
              },
              {
                step: "02",
                title: "Strategy",
                description: "Developing a comprehensive project roadmap",
                icon: <Lightbulb className="h-8 w-8" />,
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution with cutting-edge technology",
                icon: <Code className="h-8 w-8" />,
              },
              {
                step: "04",
                title: "Launch",
                description: "Deploying and going live with thorough testing",
                icon: <Rocket className="h-8 w-8" />,
              },
              {
                step: "05",
                title: "Support",
                description: "Ongoing maintenance and optimization",
                icon: <HeadphonesIcon className="h-8 w-8" />,
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{process.icon}</div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{process.step}</div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-primary to-accent"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help transform your digital presence and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 magnetic-button"
                >
                  Start Your Project
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary magnetic-button"
                >
                  Schedule a Call
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}
