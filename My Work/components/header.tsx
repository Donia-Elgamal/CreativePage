"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingBag, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Shop", href: "#shop" },
  { name: "Collections", href: "#collections" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="font-serif text-2xl font-semibold tracking-wide text-foreground">
              Iconic
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className="text-foreground"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium tracking-wide text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative text-foreground/70 hover:text-foreground">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center bg-foreground text-[10px] font-medium text-background">
              0
            </span>
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-background">
            <div className="flex items-center justify-between px-6 py-4">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="font-serif text-2xl font-semibold tracking-wide text-foreground">
                  Iconic
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root px-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 font-serif text-2xl font-medium text-foreground transition-colors hover:text-foreground/70"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex gap-4 border-t border-border pt-6">
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative text-foreground">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center bg-foreground text-[10px] font-medium text-background">
                    0
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
