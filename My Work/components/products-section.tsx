"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Linen Blazer",
    price: 189,
    image: "/images/product-1.jpg",
    category: "Outerwear",
  },
  {
    id: 2,
    name: "Silk Midi Dress",
    price: 245,
    image: "/images/product-2.jpg",
    category: "Dresses",
  },
  {
    id: 3,
    name: "Tailored Trousers",
    price: 145,
    image: "/images/product-3.jpg",
    category: "Bottoms",
  },
  {
    id: 4,
    name: "Cashmere Sweater",
    price: 275,
    image: "/images/product-4.jpg",
    category: "Knitwear",
  },
]

export function ProductsSection() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section id="shop" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              New Arrivals
            </span>
            <h2 className="mt-2 font-serif text-4xl font-light text-foreground md:text-5xl">
              Our Latest Pieces
            </h2>
          </div>
          <Link
            href="#shop"
            className="border-b border-foreground pb-1 text-sm font-medium tracking-wide text-foreground transition-all hover:border-foreground/50"
          >
            View All Products
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Quick Actions */}
                <div
                  className={`absolute inset-x-4 bottom-4 flex items-center justify-between transition-all duration-300 ${
                    hoveredProduct === product.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <Button
                    className="flex-1 bg-background text-foreground hover:bg-foreground hover:text-background"
                  >
                    Add to Cart
                  </Button>
                </div>
                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute right-3 top-3 h-9 w-9 bg-background/80 backdrop-blur-sm transition-all hover:bg-background ${
                    wishlist.includes(product.id) ? "text-accent" : "text-foreground"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      wishlist.includes(product.id) ? "fill-accent" : ""
                    }`}
                  />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
              </div>

              {/* Product Info */}
              <div className="mt-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="mt-1 font-serif text-lg font-medium text-foreground">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-foreground">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
