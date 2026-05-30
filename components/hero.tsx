import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Clock, Award } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-hvac.png"
          alt="Tecnico profesional instalando aire acondicionado"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            Mas de 15 anos de experiencia
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="text-balance">Expertos en Aires Acondicionados y Servicios Electricos</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
            Soluciones profesionales para climatizacion y electricidad residencial, 
            comercial e industrial. Personal certificado y garantia en todos nuestros trabajos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-base px-8" asChild>
              <a href="#contacto">Solicitar Cotizacion</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
              asChild
            >
              <a href="#servicios">Ver Servicios</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="text-white font-semibold">Garantia</p>
                <p className="text-white/70 text-sm">En todos los trabajos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <p className="text-white font-semibold">Respuesta Rapida</p>
                <p className="text-white/70 text-sm">Atencion inmediata</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <p className="text-white font-semibold">Certificados</p>
                <p className="text-white/70 text-sm">Personal capacitado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
