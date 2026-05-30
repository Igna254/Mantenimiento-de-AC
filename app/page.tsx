import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { AboutUs } from "@/components/about-us"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Projects />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
