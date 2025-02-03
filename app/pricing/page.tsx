import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingHeader } from "@/components/pricing/pricing-header"
import { PricingTiers } from "@/components/pricing/pricing-tiers"
import { PricingTable } from "@/components/pricing/pricing-table"
import { PricingFAQ } from "@/components/pricing/pricing-faq"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PricingHeader />
      <PricingTiers />
      <PricingTable />
      <PricingFAQ />
      <Footer />
    </div>
  )
}

