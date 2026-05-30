import { 
  Wind, 
  Wrench, 
  Settings, 
  Home, 
  Building2, 
  Gauge, 
  Cable, 
  Search 
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Wind,
    title: "Instalacion de Aires Acondicionados",
    description: "Instalacion profesional de sistemas split, mini split, centrales y VRF para hogares y negocios.",
  },
  {
    icon: Settings,
    title: "Mantenimiento Preventivo y Correctivo",
    description: "Programas de mantenimiento para mantener tu equipo funcionando eficientemente.",
  },
  {
    icon: Wrench,
    title: "Reparacion de Equipos",
    description: "Diagnostico y reparacion de todo tipo de aires acondicionados con refacciones originales.",
  },
  {
    icon: Home,
    title: "Instalaciones Electricas Residenciales",
    description: "Cableado, iluminacion, contactos y tableros para casas y departamentos.",
  },
  {
    icon: Building2,
    title: "Instalaciones Electricas Comerciales",
    description: "Soluciones electricas para oficinas, locales comerciales y espacios de trabajo.",
  },
  {
    icon: Gauge,
    title: "Mantenimiento Electrico",
    description: "Revision periodica de instalaciones electricas para prevenir fallas y accidentes.",
  },
  {
    icon: Cable,
    title: "Cableado y Tableros Electricos",
    description: "Diseno e instalacion de tableros de distribucion y sistemas de cableado estructurado.",
  },
  {
    icon: Search,
    title: "Inspecciones y Diagnosticos",
    description: "Evaluacion completa de instalaciones electricas con reportes detallados.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Soluciones Integrales para tu Comodidad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ofrecemos servicios completos de climatizacion y electricidad con los mas altos 
            estandares de calidad y seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
