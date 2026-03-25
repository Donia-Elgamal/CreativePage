import { Leaf, Heart, Star } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Sustainable Fashion",
    description: "We prioritize eco-friendly materials and ethical production practices.",
  },
  {
    icon: Heart,
    title: "Made With Love",
    description: "Each piece is crafted with attention to detail and passion for quality.",
  },
  {
    icon: Star,
    title: "Timeless Design",
    description: "Our designs transcend trends, offering pieces you'll cherish for years.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Text Content */}
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Our Story
            </span>
            <h2 className="mt-2 font-serif text-4xl font-light text-foreground md:text-5xl">
              Dedicated to timeless elegance
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                ÉLISE was born from a simple belief: every woman deserves to feel confident and beautiful in what she wears. We create clothing that celebrates femininity while embracing modern sensibilities.
              </p>
              <p>
                Our collections blend classic silhouettes with contemporary details, using premium fabrics sourced from the finest mills around the world. Each piece is designed to become a cherished part of your wardrobe.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="flex flex-col justify-center space-y-8">
            {values.map((value) => (
              <div key={value.title} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-background">
                  <value.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
