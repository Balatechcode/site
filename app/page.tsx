import { Metadata } from "next"
import HomeClient from "@/components/HomeClient"

export const metadata: Metadata = {
  title: "Digital Marketing & Web Development Agency in Vapi | WebCrafty",
  description:
    "WebCrafty Solution is a top-rated digital marketing and web development agency in Vapi, Gujarat. We offer SEO, PPC, social media, app & web development. Get a free quote today!",
}

export default function Page() {
  return <HomeClient />
}
