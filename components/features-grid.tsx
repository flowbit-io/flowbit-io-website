import { Database, Lock, Zap, Radio, HardDrive, Cpu } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

export function FeaturesGrid() {
  return (
    <Container className="py-24">
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          <div className="flex gap-6 flex-nowrap">
            {features.map((feature) => (
              <Card
                key={feature.id} // Changed to use unique id
                className="flex-shrink-0 w-[300px] border rounded-xl hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mb-4 size-12 rounded-lg bg-primary/10 p-3 text-primary">
                    <feature.icon className="size-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg bg-muted/50" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

const features = [
  {
    id: "database", // Added unique id
    title: "Postgres Database",
    description: "Every project is a full Postgres database, the world's most trusted relational database.",
    icon: Database,
  },
  {
    id: "auth", // Added unique id
    title: "Authentication",
    description: "Add user sign ups and logins, securing your data with Row Level Security.",
    icon: Lock,
  },
  {
    id: "edge-functions-1", // Added unique id
    title: "Edge Functions",
    description: "Easily write custom code without deploying or scaling servers.",
    icon: Zap,
  },
  {
    id: "serverless-compute", // Changed title and added unique id
    title: "Serverless Compute", // Changed title to be unique
    description: "Deploy serverless functions globally for low-latency compute.",
    icon: Cpu, // Changed icon to be different
  },
  {
    id: "realtime", // Added unique id
    title: "Realtime Subscriptions",
    description: "Build reactive applications with live data updates.",
    icon: Radio,
  },
  {
    id: "storage", // Added unique id
    title: "File Storage",
    description: "Easily manage and serve user-generated content.",
    icon: HardDrive,
  },
]

