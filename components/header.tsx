"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone, Mail, Zap } from "lucide-react"

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+525512345678" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+52 55 1234 5678</span>
            </a>
            <a href="mailto:info@climaelecpro.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@climaelecpro.com</span>
            </a>
          </div>
          <span className="text-xs sm:text-sm">Lun - Sab: 8:00 AM - 6:00 PM</span>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-bold text-foreground leading-tight">
                  ClimaElec Pro
                </span>
                <span className="text-xs text-muted-foreground hidden sm:block">
                  Aires Acondicionados y Servicios Electricos
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button asChild className="hidden sm:inline-flex">
                <a href="#contacto">Solicitar Cotizacion</a>
              </Button>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <SheetTitle className="sr-only">Menu de navegacion</SheetTitle>
                  <div className="flex flex-col gap-6 mt-8">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                      <div className="bg-primary p-2 rounded-lg">
                        <Zap className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <span className="font-bold text-foreground">ClimaElec Pro</span>
                    </Link>

                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-foreground/80 hover:text-primary font-medium transition-colors text-lg"
                      >
                        {item.label}
                      </Link>
                    ))}

                    <Button asChild className="mt-4">
                      <a href="#contacto" onClick={() => setIsOpen(false)}>
                        Solicitar Cotizacion
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
