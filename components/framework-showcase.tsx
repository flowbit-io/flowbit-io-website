import { Container } from "@/components/ui/container"

const frameworks = [
  {
    name: "Python",
    icon: "/icons/frameworks/python-color.svg",
    color: "#000000",
  },
  {
    name: "Django",
    icon: "/icons/frameworks/django.svg",
    color: "#092E20",
  },
  {
    name: "Next.js",
    icon: "/icons/frameworks/nextjs-color.svg",
    color: "#000000",
  },
  {
    name: "React",
    icon: "/icons/frameworks/react-color.svg",
    color: "#61DAFB",
  },
  {
    name: "Vue",
    icon: "/icons/frameworks/vue-color.svg",
    color: "#4FC08D",
  },
  {
    name: "Angular",
    icon: "/icons/frameworks/angular.svg",
    color: "#DD0031",
  },
  {
    name: "Laravel",
    icon: "/icons/frameworks/laravel.svg",
    color: "#FF2D20",
  },
  // {
  //   name: "Express",
  //   icon: "/icons/frameworks/express.svg",
  //   color: "#000000",
  // },
  // {
  //   name: "Spring Boot",
  //   icon: "/icons/frameworks/spring.svg",
  //   color: "#6DB33F",
  // },
  // {
  //   name: "Flutter",
  //   icon: "/icons/frameworks/flutter.svg",
  //   color: "#02569B",
  // },
  {
    name: "Svelte",
    icon: "/icons/frameworks/sveltekit-color.svg",
    color: "#CC0000",
  },
  {
    name: "Ruby on Rails",
    icon: "/icons/frameworks/rails.svg",
    color: "#CC0000",
  },
]

export function FrameworkShowcase() {
  return (
    <Container className="py-24">
      <div className="text-center space-y-8">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Use YourStartup with <span className="text-muted-foreground">any framework</span>
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-3xl mx-auto">
          {frameworks.map((framework) => (
            <div key={framework.name} className="relative size-12 grayscale hover:grayscale-0 transition-all">
              <img
                src={framework.icon || "/placeholder.svg"}
                alt={framework.name}
                className="object-contain size-full"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

