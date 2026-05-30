"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

const serviceOptions = [
  "Instalacion de aire acondicionado",
  "Mantenimiento preventivo",
  "Reparacion de A/C",
  "Instalacion electrica residencial",
  "Instalacion electrica comercial",
  "Mantenimiento electrico",
  "Cableado y tableros",
  "Inspeccion y diagnostico",
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Solicitud Enviada
              </h3>
              <p className="text-muted-foreground mb-6">
                Hemos recibido tu solicitud. Nuestro equipo se pondra en contacto contigo en las proximas horas.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Enviar otra solicitud
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Solicita tu Cotizacion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Completa el formulario y te contactaremos para brindarte una cotizacion sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Formulario de Contacto</CardTitle>
                <CardDescription>Todos los campos marcados con * son obligatorios</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input id="name" name="name" placeholder="Tu nombre" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefono *</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+52 55 1234 5678" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electronico *</Label>
                      <Input id="email" name="email" type="email" placeholder="correo@ejemplo.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Servicio requerido *</Label>
                      <Select name="service" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe tu necesidad o proyecto..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Solicitar Cotizacion
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg text-foreground mb-4">Informacion de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Telefono</p>
                      <p className="text-muted-foreground">+52 55 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Correo</p>
                      <p className="text-muted-foreground">info@climaelecpro.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Ubicacion</p>
                      <p className="text-muted-foreground">Ciudad de Mexico, Mexico</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Horario</p>
                      <p className="text-muted-foreground">Lun - Sab: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Emergencias 24/7</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Para emergencias electricas fuera de horario, contactanos por WhatsApp.
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <a href="https://wa.me/5255123456789" target="_blank" rel="noopener noreferrer">
                    Contactar por WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <Card className="overflow-hidden">
            <div className="aspect-[21/9] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240861.28365953737!2d-99.43095385!3d19.3910036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f93e3a8b6c7f%3A0x3e1ad6c0f5c8e5e5!2sMexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion de ClimaElec Pro"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
