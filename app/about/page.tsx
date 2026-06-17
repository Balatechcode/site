import { Metadata } from "next"
import AboutClient from "@/components/AboutClient"

export const metadata: Metadata = {
  title: "About WebCrafty Solution -- Digital Agency Founded in Vapi, Gujarat (2019)",
  description:
    "Learn about WebCrafty Solution, a digital marketing and web development agency based in Vapi, Gujarat, founded in 2019. Meet our team of 50+ experts delivering results across 25+ countries.",
}

export default function AboutPage() {
  return <AboutClient />
}
