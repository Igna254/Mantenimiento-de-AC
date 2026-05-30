import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Roberto Hernandez",
    service: "Instalacion de A/C",
    rating: 5,
    text: "Excelente servicio. Instalaron el aire acondicionado en mi oficina de manera rapida y profesional. El equipo fue muy amable y dejaron todo limpio.",
  },
  {
    name: "Maria Garcia",
    service: "Servicio Electrico",
    rating: 5,
    text: "Contrate sus servicios para la instalacion electrica de mi negocio. Trabajo impecable, cumplieron con los tiempos y el precio fue justo. Muy recomendados.",
  },
  {
    name: "Carlos Lopez",
    service: "Mantenimiento HVAC",
    rating: 5,
    text: "Llevan 3 anos dando mantenimiento a los aires de mi empresa. Siempre puntuales, profesionales y con precios competitivos. 100% recomendados.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            La satisfaccion de nuestros clientes es nuestra mayor recompensa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card border-border hover:border-primary/30 transition-all">
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {`"${testimonial.text}"`}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">2,500+</p>
            <p className="text-muted-foreground text-sm">Proyectos completados</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">98%</p>
            <p className="text-muted-foreground text-sm">Clientes satisfechos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">15+</p>
            <p className="text-muted-foreground text-sm">Anos de experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">24/7</p>
            <p className="text-muted-foreground text-sm">Soporte disponible</p>
          </div>
        </div>
      </div>
    </section>
  )
}
