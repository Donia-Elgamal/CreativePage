import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-5xl font-light leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              <span className="text-balance">Timeless elegance meets modern style</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Discover our curated collection of women&apos;s clothing designed for the modern woman who values quality and sophistication.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#shop"
                className="group inline-flex items-center justify-center gap-2 bg-foreground px-8 py-4 text-sm font-medium tracking-wide text-background transition-all hover:bg-foreground/90"
              >
                Shop Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#collections"
                className="inline-flex items-center justify-center border border-foreground/20 px-8 py-4 text-sm font-medium tracking-wide text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background"
              >
                View Collections
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[3/4] w-full overflow-hidden lg:aspect-[4/5]">
            <Image
              src="/images/hero.jpg"
              alt="Elegant woman in sophisticated outfit"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Bottom CTA Links */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-border py-8 sm:flex-row">
          <Link
            href="#about"
            className="group flex items-center gap-3 text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="uppercase">Learn Our Story</span>
            <span className="flex h-8 w-8 items-center justify-center border border-accent text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="#shop"
            className="group flex items-center gap-3 text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="uppercase">Shop Our Products</span>
            <span className="flex h-8 w-8 items-center justify-center border border-accent text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
