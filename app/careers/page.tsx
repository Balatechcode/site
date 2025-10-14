"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Upload, Clock, MapPin, DollarSign, Briefcase, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "react-hot-toast"
import { submitJobApplication } from "./actions"
import Lottie from "react-lottie-player"
import carrerhero from "@/public/carrerhero.json"

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [isApplicationOpen, setIsApplicationOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "$80K - $120K",
      description:
        "We're looking for an experienced Full Stack Developer proficient in MERN stack to join our development team. You'll be responsible for designing and implementing web applications, collaborating with cross-functional teams, and mentoring junior developers.",
      requirements: [
        "5+ years of experience in full stack development",
        "Proficiency in React, Node.js, Express, and MongoDB",
        "Experience with RESTful APIs and GraphQL",
        "Strong problem-solving skills and attention to detail",
        "Excellent communication and teamwork abilities",
      ],
    },
    {
      id: 2,
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "$70K - $90K",
      description:
        "Join our creative team as a UI/UX Designer to create beautiful, intuitive interfaces for web and mobile applications. You'll work closely with clients and developers to transform ideas into user-friendly designs that meet business objectives.",
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency in Figma, Adobe XD, or similar design tools",
        "Strong portfolio demonstrating user-centered design approach",
        "Experience with design systems and component libraries",
        "Knowledge of accessibility standards and best practices",
      ],
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      type: "Full-time",
      location: "Remote / On-site",
      salary: "$60K - $80K",
      description:
        "We're seeking a Digital Marketing Specialist to develop and implement effective marketing strategies across various digital channels. You'll be responsible for campaign management, analytics, and optimizing marketing efforts to drive growth.",
      requirements: [
        "3+ years of experience in digital marketing",
        "Proficiency in Google Ads, Meta Ads, and analytics tools",
        "Experience with SEO, content marketing, and email campaigns",
        "Data-driven approach to marketing strategy",
        "Strong analytical and communication skills",
      ],
    },
  ]

  const benefits = [
    {
      title: "Competitive Salary",
      description: "We offer industry-competitive compensation packages",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible scheduling",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Career Growth",
      description: "Clear paths for advancement and professional development",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision insurance",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      title: "Learning Budget",
      description: "Annual budget for courses, books, and conferences",
      icon: <Upload className="h-6 w-6" />,
    },
    {
      title: "Team Events",
      description: "Regular team building activities and social events",
      icon: <MapPin className="h-6 w-6" />,
    },
  ]

  const handleApplyClick = (position: any) => {
    setSelectedJob(position)
    setIsApplicationOpen(true)
  }

  const handleSubmitApplication = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await submitJobApplication(formData)
      if (result.success) {
        toast.success("Application submitted successfully! We'll be in touch soon.")
        setIsApplicationOpen(false)
        setSelectedJob(null)
      } else {
        toast.error(result.error || "Failed to submit application. Please try again.")
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
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
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="py-20 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/5"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Badge className="bg-primary/20 text-primary border-primary/30">Join Our Team</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold">Grow Your Career With Us</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join our team of passionate professionals and work on exciting projects that make a difference. We value
                creativity, innovation, and continuous learning.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 magnetic-button">
                  View Open Positions
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
           <Lottie
                  loop
                  animationData={carrerhero}
                  play
                  style={{ width: "auto", height: "auto" }}
                />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Company Culture */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Company Culture</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              At WebCrafty Solution, we foster a culture of innovation, collaboration, and growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We encourage creative thinking and embrace new technologies to deliver cutting-edge solutions.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and open communication to achieve exceptional results.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Growth",
                description:
                  "We invest in our team's professional development and provide opportunities for career advancement.",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="cursor-pointer"
              >
                <Card className="border-0 bg-white/50 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-40 overflow-hidden">
                    <Image
                      src={value.image || "/placeholder.svg"}
                      alt={value.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a range of benefits to support your professional and personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      className="text-primary mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Open Positions */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our current job openings and find your next career opportunity
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01 }}
              >
                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {position.type}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {position.location}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {position.salary}
                          </Badge>
                        </div>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          className="mt-4 md:mt-0 bg-primary hover:bg-primary/90 magnetic-button"
                          onClick={() => handleApplyClick(position)}
                        >
                          Apply Now
                        </Button>
                      </motion.div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-muted-foreground">{position.description}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-2"
                              initial={{ x: -20, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Application Modal */}
      <AnimatePresence>
        {isApplicationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsApplicationOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Apply for {selectedJob?.title}</h2>
                    <p className="text-muted-foreground">Fill out the form below to submit your application</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsApplicationOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>

              <form action={handleSubmitApplication} className="p-6 space-y-6">
                <input type="hidden" name="jobId" value={selectedJob?.id} />
                <input type="hidden" name="jobTitle" value={selectedJob?.title} />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input name="fullName" placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input name="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <Input name="phone" placeholder="Your phone number" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
                    <Input name="linkedin" placeholder="https://linkedin.com/in/yourprofile" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Portfolio/Website</label>
                  <Input name="portfolio" placeholder="https://yourportfolio.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Cover Letter *</label>
                  <Textarea
                    name="coverLetter"
                    placeholder="Tell us about yourself and why you're interested in this position..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Resume/CV *</label>
                  <div className="border-2 border-dashed border-border rounded-md p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Upload your resume (PDF, DOC, DOCX - Max 5MB)</p>
                    <input type="file" name="resume" accept=".pdf,.doc,.docx" required className="w-full" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Documents</label>
                  <div className="border-2 border-dashed border-border rounded-md p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload additional documents (Portfolio, Certificates, etc.)
                    </p>
                    <input
                      type="file"
                      name="additionalDocs"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      multiple
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="button" variant="outline" size="lg" onClick={() => setIsApplicationOpen(false)}>
                      Cancel
                    </Button>
                  </motion.div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Team Says</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our employees about their experience working at WebCrafty Solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Working at WebCrafty has been an incredible journey. The collaborative environment and opportunities for growth have helped me develop both professionally and personally.",
                name: "Michael Chen",
                position: "Senior Developer",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "I love the culture of innovation here. We're encouraged to explore new technologies and approaches, which keeps the work exciting and allows us to deliver cutting-edge solutions.",
                name: "Sarah Johnson",
                position: "UI/UX Designer",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "The supportive team and flexible work arrangements have made WebCrafty an ideal place to grow my career while maintaining work-life balance.",
                name: "David Rodriguez",
                position: "Digital Marketing Specialist",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <p className="italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                      </motion.div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 opacity-90">
              Take the next step in your career and become part of our growing team of professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 magnetic-button"
                >
                  Apply Now
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary magnetic-button"
                >
                  Learn More About Us
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}
