"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Stay Connected
          </span>
          <h2 className="mt-2 font-serif text-4xl font-light text-foreground md:text-5xl">
            Join Our Newsletter
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration delivered directly to your inbox.
          </p>

          {submitted ? (
            <div className="mt-10 border border-border bg-card p-8">
              <p className="font-serif text-xl text-foreground">
                Thank you for subscribing!
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;ll be in touch with our latest updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border-border bg-card px-6 py-6 text-foreground placeholder:text-muted-foreground focus-visible:ring-foreground"
              />
              <Button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-foreground px-8 py-6 text-sm font-medium tracking-wide text-background transition-all hover:bg-foreground/90"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
