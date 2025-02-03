"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface SectionBreakProps {
  title: string
  description: string
  align?: "left" | "right" | "center"
  theme?: "light" | "dark"
}

export function SectionBreak({ title, description, align = "center", theme = "light" }: SectionBreakProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const text = textRef.current

    if (container && text) {
      gsap.fromTo(
        text,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Parallax effect on scroll
      gsap.to(text, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div ref={textRef} className={`w-full max-w-4xl mx-auto px-6 text-${align} space-y-6`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{title}</h2>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

