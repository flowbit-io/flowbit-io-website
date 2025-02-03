import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

export function CustomerStories() {
  return (
    <section className="py-24 overflow-hidden">
      <Container>
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Customer Stories</div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl mx-auto">
              Infrastructure to innovate
              <br />
              and scale with ease.
            </h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              See how YourStartup empowers companies of all sizes to accelerate their growth and streamline their work.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="default" size="lg">
                View all stories
              </Button>
              <Button variant="outline" size="lg">
                View Events
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
              <div className="flex gap-6 flex-nowrap">
                {stories.map((story) => (
                  <Card
                    key={story.company}
                    className="overflow-hidden flex-shrink-0 w-[400px] hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] bg-muted p-8">
                        <img
                          src={story.logo || "/placeholder.svg"}
                          alt={story.company}
                          className="h-8 object-contain"
                        />
                      </div>
                      <div className="p-8">
                        <p className="text-lg">{story.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  )
}

const stories = [
  {
    company: "Company 1",
    logo: "/placeholder.svg?height=32&width=120",
    description: "Bootstrapped founder builds an AI app and scales to $1M in 5 months.",
  },
  {
    company: "Company 2",
    logo: "/placeholder.svg?height=32&width=120",
    description: "Scaling securely: one million users in 7 months protected with authentication.",
  },
  {
    company: "Company 3",
    logo: "/placeholder.svg?height=32&width=120",
    description: "From prototype to production: launching a global SaaS platform in weeks.",
  },
  {
    company: "Company 4",
    logo: "/placeholder.svg?height=32&width=120",
    description: "Startup leverages edge functions to reduce latency by 50% globally.",
  },
  {
    company: "Company 5",
    logo: "/placeholder.svg?height=32&width=120",
    description: "E-commerce site handles Black Friday surge with zero downtime.",
  },
  {
    company: "Company 6",
    logo: "/placeholder.svg?height=32&width=120",
    description: "Mobile app achieves real-time sync across devices for millions of users.",
  },
]

