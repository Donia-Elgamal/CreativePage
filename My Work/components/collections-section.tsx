import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    id: 1,
    name: "Spring Essentials",
    description: "Light layers and fresh silhouettes for the new season",
    image: "/images/collection-1.jpg",
    productCount: 24,
  },
  {
    id: 2,
    name: "Autumn Edit",
    description: "Timeless pieces in warm, earthy tones",
    image: "/images/collection-2.jpg",
    productCount: 18,
  },
]

export function CollectionsSection() {
  return (
    <section id="collections" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Curated For You
          </span>
          <h2 className="mt-2 font-serif text-4xl font-light text-foreground md:text-5xl">
            Our Collections
          </h2>
        </div>

        {/* Collections Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href="#shop"
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/20 transition-all duration-500 group-hover:bg-foreground/40" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-background">
                <span className="text-xs uppercase tracking-widest opacity-80">
                  {collection.productCount} Products
                </span>
                <h3 className="mt-2 font-serif text-3xl font-light md:text-4xl">
                  {collection.name}
                </h3>
                <p className="mt-2 max-w-xs text-sm opacity-80">
                  {collection.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium uppercase tracking-wide">
                  <span>Explore Collection</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
