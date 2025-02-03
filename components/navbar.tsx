import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-primary rounded-sm" />
              <span className="font-semibold">YourStartup</span>
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {products.map((product) => (
                        <li key={product.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={product.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{product.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {product.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/developers" legacyBehavior passHref>
                    <NavigationMenuLink className={cn("font-medium")}>Developers</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className={cn("font-medium")}>Pricing</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Sign in</Button>
            <Button>Start your project</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

const products = [
  {
    title: "Database",
    description: "Powerful Postgres database for your applications.",
    href: "/database",
  },
  {
    title: "Authentication",
    description: "User authentication and authorization made simple.",
    href: "/auth",
  },
  {
    title: "Edge Functions",
    description: "Deploy serverless functions globally.",
    href: "/edge-functions",
  },
  {
    title: "Realtime",
    description: "Build realtime applications with subscriptions.",
    href: "/realtime",
  },
]

