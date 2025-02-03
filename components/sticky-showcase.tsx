"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Container } from "@/components/ui/container"

interface ShowcaseItem {
  title: string
  description: string
  image: string
}

export function StickyShowcase({ items }: { items: ShowcaseItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const sections = sectionRefs.current

    if (container && sections.length) {
      // Create a timeline for smooth transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${(sections.length + 0.5) * 100}%`, // Add extra space for last section
          pin: true,
          scrub: 1.5, // Increased scrub time for smoother transitions
          markers: false, // Set to true for debugging
          anticipatePin: 1, // Improves pin performance
        },
      })

      // Animate each section
      sections.forEach((section, i) => {
        if (!section) return

        // Set initial states
        gsap.set(section, {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          opacity: i === 0 ? 1 : 0,
          zIndex: sections.length - i,
        })

        if (i > 0) {
          // Add pause points between sections
          tl.addLabel(`section${i}`, `+=${i}`)
            .to(
              sections[i - 1],
              {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
              },
              `section${i}`,
            )
            .to(
              section,
              {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
              },
              `section${i}+=0.5`,
            ) // Slight delay for smoother crossfade
        }
      })

      // Add final pause point
      tl.addLabel("end", `+=${sections.length}`).to({}, { duration: 0.5 }) // Add extra time at the end, default duration = 0.5
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="relative bg-black text-white">
      {items.map((item, i) => (
        <div
          key={i}
          ref={(el) => (sectionRefs.current[i] = el)}
          className="min-h-screen flex items-center justify-center py-24" // Added vertical padding
        >
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold">{item.title}</h2>
                <p className="text-xl text-gray-400">{item.description}</p>
              </div>
              <div className="relative aspect-square">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="rounded-lg shadow-2xl object-cover"
                />
              </div>
            </div>
          </Container>
        </div>
      ))}
    </div>
  )
}

