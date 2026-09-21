import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { Header } from "@/components/layout/header"
import { BottomBar } from "@/components/layout/bottom-bar"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import Home from "@/pages/home"
import About from "@/pages/about"
import Products from "@/pages/products"
import Capabilities from "@/pages/capabilities"
import Testimonials from "@/pages/testimonials"
import Faq from "@/pages/faq"
import Contact from "@/pages/contact"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])
  return null
}

export function App() {
  return (
    <div className="min-h-svh bg-background font-sans text-foreground antialiased">
      <ScrollToTop />
      <Header />
      <main className="pb-[calc(64px)] lg:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BottomBar />
      <WhatsAppFloat />
    </div>
  )
}

export default App
