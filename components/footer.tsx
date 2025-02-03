import Link from "next/link"
import { Github, Twitter, Youtube } from "lucide-react"
import { Container } from "@/components/ui/container"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-6 w-6 bg-primary rounded-sm" />
                <span className="font-semibold">YourStartup</span>
              </Link>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Github className="size-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="size-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Youtube className="size-5" />
                </Link>
              </div>
            </div>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-base font-semibold">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.title}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t py-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} YourStartup Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

const footerLinks = {
  Product: [
    { title: "Database", href: "#" },
    { title: "Auth", href: "#" },
    { title: "Storage", href: "#" },
    { title: "Functions", href: "#" },
    { title: "Pricing", href: "#" },
  ],
  Resources: [
    { title: "Support", href: "#" },
    { title: "System Status", href: "#" },
    { title: "Integrations", href: "#" },
    { title: "Security", href: "#" },
  ],
  Developers: [
    { title: "Documentation", href: "#" },
    { title: "API Reference", href: "#" },
    { title: "Contributing", href: "#" },
    { title: "Open Source", href: "#" },
  ],
  Company: [
    { title: "Blog", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Events", href: "#" },
    { title: "Contact", href: "#" },
  ],
}

