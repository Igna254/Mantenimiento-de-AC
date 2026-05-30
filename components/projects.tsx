"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    src: "/images/project-1.png",
    alt: "Instalacion comercial de aires acondicionados",
    title: "Sistema HVAC Comercial",
    description: "Instalacion de unidades de aire acondicionado en edificio corporativo",
  },
  {
    src: "/images/project-2.png",
    alt: "Tablero electrico industrial",
    title: "Tablero Electrico Industrial",
    description: "Diseno e instalacion de tablero de distribucion para planta industrial",
  },
  {
    src: "/images/project-3.png",
    alt: "Climatizacion de oficinas",
    title: "Climatizacion de Oficinas",
    description: "Sistema de aire acondicionado central para oficinas corporativas",
  },
  {
    src: "/images/project-4.png",
    alt: "Instalacion electrica residencial",
    title: "Instalacion Residencial",
    description: "Cableado electrico completo y sistema de iluminacion para casa nueva",
  },
  {
    src: "/images/project-5.png",
    alt: "Mantenimiento de aire acondicionado",
    title: "Mantenimiento Preventivo",
    description: "Servicio de mantenimiento a sistemas split en conjunto residencial",
  },
  {
    src: "/images/project-6.png",
    alt: "Centro de control electrico",
    title: "Centro de Control",
    description: "Instalacion de centro de control electrico para fabrica",
  },
]

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? projects.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === projects.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Proyectos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Nuestros Trabajos Realizados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conoce algunos de los proyectos que hemos completado con exito para nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <button
              key={project.src}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-muted"
              aria-label={`Ver proyecto: ${project.title}`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-white text-lg">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de proyectos"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={closeLightbox}
            aria-label="Cerrar galeria"
          >
            <X className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            aria-label="Proyecto anterior"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={projects[selectedImage].src}
              alt={projects[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            aria-label="Proyecto siguiente"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground text-center">
            <p className="font-semibold text-lg">{projects[selectedImage].title}</p>
            <p className="text-primary-foreground/70 text-sm">{projects[selectedImage].description}</p>
            <p className="text-primary-foreground/50 text-xs mt-2">
              {selectedImage + 1} / {projects.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
