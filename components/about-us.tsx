import { CheckCircle, Users, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Personal Certificado",
    description: "Técnicos con certificaciones oficiales y capacitación continua.",
  },
  {
    icon: Clock,
    title: "Atención Rápida",
    description: "Respuesta en menos de 24 horas para emergencias eléctricas.",
  },
  {
    icon: CheckCircle,
    title: "Garantía Total",
    description: "Garantía por escrito en todos nuestros servicios y materiales.",
  },
  {
    icon: Users,
    title: "Servicio Personalizado",
    description: "Soluciones adaptadas a las necesidades de cada cliente.",
  },
]

const stats = [
  { value: "15+", label: "Años de Experiencia" },
  { value: "2,500+", label: "Proyectos Completados" },
  { value: "98%", label: "Clientes Satisfechos" },
  { value: "24/7", label: "Soporte Disponible" },
]

export function AboutUs() {
  return (
    <section id="nosotros" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Profesionalismo y Calidad en Cada Proyecto
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Somos una empresa especializada en servicios de climatización y electricidad 
              con más de 15 años de experiencia en el mercado. Nuestro compromiso es ofrecer 
              soluciones eficientes, seguras y duraderas.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Contamos con un equipo de técnicos altamente capacitados y certificados, 
              utilizamos equipos de última generación y trabajamos con las mejores marcas 
              del mercado para garantizar resultados excepcionales.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-primary-foreground mb-8 text-center">
              Nuestros Números Hablan
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
