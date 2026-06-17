import { Metadata } from "next"
import PortfolioClient from "@/components/PortfolioClient"

export const metadata: Metadata = {
  title: "Our Work -- Digital Marketing & Web Development Portfolio | WebCrafty Solution",
  description:
    "Browse WebCrafty Solution's portfolio of successful web development, e-commerce, and digital marketing projects. 500+ projects delivered for clients across India and 25+ countries.",
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
