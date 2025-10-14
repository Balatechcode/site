import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Smartphone, Palette, Code, TrendingUp, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "app-development",
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: <Smartphone className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=600",
      features: [
        "iOS & Android Native Apps",
        "Cross-Platform Development",
        "Flutter & React Native",
        "UI/UX Design",
        "App Store Optimization",
        "Maintenance & Support",
      ],
    },
    {
      id: "website-development",
      title: "Website Development",
      description: "Custom websites and e-commerce platforms tailored to your business needs.",
      icon: <Globe className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=600",
      features: [
        "WordPress Development",
        "Shopify E-commerce",
        "Custom PHP Solutions",
        "MERN Stack Applications",
        "SEO Optimization",
        "Responsive Design",
      ],
    },
    {
      id: "graphics-designing",
      title: "Graphics Designing",
      description: "Eye-catching visual designs that strengthen your brand identity and messaging.",
      icon: <Palette className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=600",
      features: [
        "Logo Design",
        "Brand Identity",
        "Social Media Graphics",
        "Banner & Poster Design",
        "Thumbnails & Covers",
        "Print Materials",
      ],
    },
    {
      id: "software-development",
      title: "Software Development",
      description: "Custom software solutions to streamline your business operations and processes.",
      icon: <Code className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=600",
      features: [
        "Custom ERP Solutions",
        "CRM Development",
        "Web Applications",
        "PHP & Laravel",
        "MERN Stack",
        "API Development",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive traffic, engagement, and conversions.",
      icon: <TrendingUp className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=600",
      features: [
        "Social Media Marketing",
        "Google & Meta Ads",
        "YouTube Advertising",
        "Google My Business",
        "Content Strategy",
        "Analytics & Reporting",
      ],
    },
    {
      id: "video-editing",
      title: "Video Editing",
      description: "Professional video content that captivates your audience and tells your story.",
      icon: <Video className="h-8 w-8" />,
      image: "/placeholder.svg?height=300&width=600",
      features: [
        "Promo Videos",
        "Social Media Reels",
        "YouTube Content",
        "Ad Campaigns",
        "Motion Graphics",
        "Video Optimization",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Our Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Comprehensive Digital Solutions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From concept to execution, we provide end-to-end digital services to help your business thrive in the
              digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <div className="text-white mb-2">{service.icon}</div>
                      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link href={`/services/${service.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
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

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Service Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure quality and success for every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We start by understanding your business goals and requirements",
              },
              {
                step: "02",
                title: "Proposal",
                description: "We create a detailed plan with timeline and deliverables",
              },
              {
                step: "03",
                title: "Execution",
                description: "Our team works diligently to bring your vision to life",
              },
              {
                step: "04",
                title: "Support",
                description: "We provide ongoing support and optimization after launch",
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground">See what our clients have to say about our services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "WebCrafty Solution transformed our online presence with a stunning website and effective digital marketing strategy. Our leads have increased by 200% since working with them.",
                name: "Robert Chen",
                company: "TechVision Inc.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "The mobile app developed by WebCrafty has been a game-changer for our business. The team was professional, responsive, and delivered exactly what we needed.",
                name: "Lisa Johnson",
                company: "HealthPlus",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
