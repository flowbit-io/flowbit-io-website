import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturesGrid } from "@/components/features-grid"
import { FrameworkShowcase } from "@/components/framework-showcase"
import { CustomerStories } from "@/components/customer-stories"
import { Footer } from "@/components/footer"
import { SectionBreak } from "@/components/section-break"
import { StickyShowcase } from "@/components/sticky-showcase"

const showcaseItems = [
  {
    title: "Lightning-fast Database",
    description:
      "Built on PostgreSQL, our database offers unparalleled performance and reliability for your applications.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Secure Authentication",
    description:
      "Implement robust authentication with just a few lines of code. Support for multiple providers out of the box.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Real-time Updates",
    description: "Build reactive applications with our real-time subscriptions. Stay in sync across all devices.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SectionBreak
          title="Build faster, scale smarter"
          description="Experience the power of modern development with our cutting-edge platform."
          theme="light"
        />
        <FeaturesGrid />
        <SectionBreak
          title="Any framework, any platform"
          description="Use your favorite tools and frameworks to build amazing applications."
          theme="dark"
          align="left"
        />
        <FrameworkShowcase />
        <StickyShowcase items={showcaseItems} />
        <SectionBreak
          title="Trusted by innovators"
          description="See how companies are building the future with our platform."
          theme="light"
        />
        <CustomerStories />
      </main>
      <Footer />
    </div>
  )
}

