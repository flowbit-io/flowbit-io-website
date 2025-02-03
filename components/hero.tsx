import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import Image from "next/image"

const companies = [
  { name: "Ollama", logo: "/icons/companies/ollama.png" },
  { name: "Github", logo: "/icons/companies/github.svg" },
  { name: "Gitlab", logo: "/icons/companies/gitlab.svg" },
  { name: "Google", logo: "/icons/companies/google.svg" },
  // Add more companies here...
]

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primary-foreground opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <Container>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Build in a weekend
                <br />
                <span className="text-primary">Scale to millions</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                Start your project with a powerful database, authentication, instant APIs, Edge Functions, Realtime
                subscriptions, Storage, and Vector embeddings.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg">Start your project</Button>
                <Button size="lg" variant="outline">
                  Request a demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-8 mb-16">
        <p className="text-center text-base font-medium text-muted-foreground mb-8">
          Trusted by leading developer teams
        </p>
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {companies.map((company) => (
              <div key={company.name} className="relative h-12 w-auto transition duration-300 hover:opacity-100">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  height={48}
                  width={180}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}

