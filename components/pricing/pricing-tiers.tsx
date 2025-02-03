import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingTiers() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier) => (
          <Card key={tier.name} className={tier.featured ? "border-primary shadow-lg" : ""}>
            <CardHeader className="space-y-2">
              {tier.featured && (
                <span className="inline-block text-sm font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <p className="text-sm text-muted-foreground">{tier.description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <span className="text-4xl font-bold">${tier.price}</span>
                {tier.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>
              {tier.compute && (
                <div className="space-y-1">
                  <p className="text-sm">{tier.compute}</p>
                  <p className="text-sm text-muted-foreground">Need more compute?</p>
                </div>
              )}
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant={tier.featured ? "default" : "outline"} className="w-full">
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

const tiers = [
  {
    name: "FREE",
    price: "0",
    description: "Perfect for passion projects & simple websites.",
    buttonText: "Start for Free",
    features: [
      "Unlimited API requests",
      "50,000 monthly active users",
      "500 MB database size",
      "5 GB bandwidth",
      "1 GB file storage",
    ],
  },
  {
    name: "PRO",
    price: "25",
    featured: true,
    description: "For production applications with the power to scale.",
    buttonText: "Upgrade now",
    compute: "$10 in compute credits included",
    features: [
      "Everything in the Free Plan, plus:",
      "100,000 monthly active users",
      "8 GB disk size per project",
      "250 GB bandwidth",
      "100 GB file storage",
    ],
  },
  {
    name: "TEAM",
    price: "599",
    description: "Add features such as SSO, control over backups, and industry certifications.",
    buttonText: "Upgrade now",
    compute: "$10 in compute credits included",
    features: [
      "Everything in the Pro Plan, plus:",
      "SOC2",
      "HIPAA available as paid add-on",
      "Daily backups with 14 day retention",
      "Priority support & SLAs",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    description: "For large-scale applications running Internet scale workloads.",
    buttonText: "Contact Us",
    features: [
      "Designated Support manager",
      "Uptime SLAs",
      "On-premise support",
      "24x7x365 premium support",
      "Private Slack channel",
    ],
  },
]

