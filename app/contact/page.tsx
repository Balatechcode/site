import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Contact Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch With Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a question or ready to start your project? Reach out to us and we'll get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-md transition-all text-center">
              <CardContent className="p-8">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">For general inquiries and support</p>
                <a href="mailto:info@webcraftysolution.com" className="text-primary hover:underline font-medium">
                  Support@gmail.in
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-md transition-all text-center">
              <CardContent className="p-8">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our team</p>
                <a href="tel:+918154954408" className="text-primary hover:underline font-medium">
                  +91 81549 54408
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/50 backdrop-blur-sm hover:shadow-md transition-all text-center">
              <CardContent className="p-8">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-4">Our office location</p>
                <address className="not-italic text-primary">123 Business Ave, Suite 100</address>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input placeholder="Your full name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input type="email" placeholder="your@email.com" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <Input placeholder="Your phone number" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Subject</label>
                        <Input placeholder="What is this regarding?" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea placeholder="Tell us about your project or inquiry..." rows={5} required />
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Business Hours */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Find Us</h2>
                <div className="aspect-video w-full bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Google Map Embed would go here */}
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392.90353915967285!2d72.88848167138023!3d20.467268296924917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0db007a463b25%3A0xa986bd5c663f3661!2sJalaram%20Khaman%20House%20(JKH)!5e0!3m2!1sen!2sin!4v1755195029104!5m2!1sen!2sin"  loading="lazy" className="w-full h-full"></iframe>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <Card className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {[
                        { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                        { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                        { day: "Sunday", hours: "Closed" },
                      ].map((schedule, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">{schedule.day}:</span> {schedule.hours}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=61572896502937", label: "Facebook" },
                    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/webcrafty_/", label: "Instagram" },
                    // { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
                    // { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
                    { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/@ZeroToCoderi", label: "YouTube" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="bg-primary/20 p-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does it take to complete a project?",
                answer:
                  "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you offer ongoing support and maintenance?",
                answer:
                  "Yes, we offer various support packages to ensure your website or application continues to perform optimally. This includes updates, security monitoring, and technical support.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "Our pricing is project-based and depends on the specific requirements and complexity. We provide detailed quotes after understanding your needs during our free consultation.",
              },
              {
                question: "Can you work with our existing team?",
                answer:
                  "We're experienced in collaborative environments and can work alongside your in-house team, providing specialized expertise while integrating with your existing workflows.",
              },
              {
                question: "Do you provide hosting and domain services?",
                answer:
                  "While we don't directly provide hosting, we can recommend reliable hosting providers and assist with setup. We also help with domain registration and DNS configuration as needed.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your ideas and create something amazing together. Get in touch today for a free
              consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Schedule a Call
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
