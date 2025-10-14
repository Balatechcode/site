"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const categories = ["All", "Web Development", "Mobile Apps", "E-commerce", "UI/UX Design", "Digital Marketing"]

  const projects = [
    {
      id: 1,
      title: "Fashion Forward E-commerce",
      category: "E-commerce",
      description: "A premium Shopify store with custom theme, advanced filtering, and integrated marketing tools.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Shopify", "React", "Node.js", "Stripe"],
      liveUrl: "https://fashionforward.example.com",
      githubUrl: "https://github.com/example/fashion-forward",
      results: "400% increase in online sales within 6 months",
      client: "Fashion Forward Inc.",
      year: "2024",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 2,
      title: "FitLife Wellness App",
      category: "Mobile Apps",
      description:
        "A comprehensive fitness tracking application with personalized workout plans and nutrition tracking.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      liveUrl: "https://apps.apple.com/fitlife",
      githubUrl: "https://github.com/example/fitlife",
      results: "50K+ downloads in first 3 months, 4.8/5 rating",
      client: "FitLife Wellness",
      year: "2024",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 3,
      title: "TechVision Corporate Website",
      category: "Web Development",
      description: "A modern WordPress website with custom post types, interactive elements, and multilingual support.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["WordPress", "PHP", "JavaScript", "GSAP"],
      liveUrl: "https://techvision.example.com",
      githubUrl: "https://github.com/example/techvision",
      results: "250% increase in lead generation",
      client: "TechVision Inc.",
      year: "2023",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 4,
      title: "EcoLife Brand Identity",
      category: "UI/UX Design",
      description: "Complete brand redesign including logo, color palette, typography, and application guidelines.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      liveUrl: "https://ecolife.example.com",
      results: "Brand recognition increased by 150%",
      client: "EcoLife Solutions",
      year: "2023",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 5,
      title: "LocalEats Marketing Campaign",
      category: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategy including local SEO, Google Ads, and social media management.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Google Ads", "Facebook Ads", "SEMrush", "Analytics"],
      liveUrl: "https://localeats.example.com",
      results: "300% increase in website traffic, 250% increase in reservations",
      client: "LocalEats Restaurant",
      year: "2024",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 6,
      title: "HealthPlus Patient Portal",
      category: "Web Development",
      description: "Secure web application for appointment scheduling, medical records, and provider communication.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      liveUrl: "https://healthplus.example.com",
      githubUrl: "https://github.com/example/healthplus",
      results: "Patient satisfaction increased by 60%",
      client: "HealthPlus Medical",
      year: "2023",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
  ]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

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
        className="py-20 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/5"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Our Portfolio</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Work Speaks for Itself</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of successful projects and see how we've helped businesses transform their digital
              presence.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Filter Categories */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-12 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden group">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <Button size="sm" variant="secondary" asChild>
                                <Link href={project.liveUrl} target="_blank">
                                  <ExternalLink className="h-4 w-4 mr-1" />
                                  Live
                                </Link>
                              </Button>
                            </motion.div>
                          )}
                          {project.githubUrl && (
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <Button size="sm" variant="secondary" asChild>
                                <Link href={project.githubUrl} target="_blank">
                                  <Github className="h-4 w-4 mr-1" />
                                  Code
                                </Link>
                              </Button>
                            </motion.div>
                          )}
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button size="sm" variant="secondary">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium text-primary">{project.results}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {selectedProject.category}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <p className="text-muted-foreground">
                      {selectedProject.client} • {selectedProject.year}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {selectedProject.liveUrl && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild>
                          <Link href={selectedProject.liveUrl} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Site
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                    {selectedProject.githubUrl && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" asChild>
                          <Link href={selectedProject.githubUrl} target="_blank">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, idx: number) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Results</h3>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="font-medium text-primary">{selectedProject.results}</p>
                    </div>
                  </div>

                  {selectedProject.gallery && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Project Gallery</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {selectedProject.gallery.map((image: string, idx: number) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="relative h-32 rounded-lg overflow-hidden cursor-pointer"
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${selectedProject.title} gallery ${idx + 1}`}
                              width={200}
                              height={150}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that showcase the success of our projects
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "200+", label: "Happy Clients" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Awards Won" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create something amazing together. Contact us to discuss your project requirements.
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
                  View All Services
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}
