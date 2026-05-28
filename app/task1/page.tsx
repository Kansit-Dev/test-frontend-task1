'use client'

import { Instagram, Twitter, Facebook } from 'lucide-react'

// Navbar Component
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="text-xs uppercase tracking-[0.2em] text-[#2C1F14] hover:text-[#D4A5A0] transition-colors">Shop</a>
          <a href="#" className="text-xs uppercase tracking-[0.2em] text-[#2C1F14] hover:text-[#D4A5A0] transition-colors">Collections</a>
        </div>
        <a href="#" className="font-[family-name:var(--font-playfair)] text-2xl tracking-[0.15em] text-[#2C1F14]">ORACLE</a>
        <div className="flex items-center gap-8">
          <a href="#" className="text-xs uppercase tracking-[0.2em] text-[#2C1F14] hover:text-[#D4A5A0] transition-colors">About</a>
          <a href="#" className="text-xs uppercase tracking-[0.2em] text-[#2C1F14] hover:text-[#D4A5A0] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  )
}

// Hero Section with background image
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop&q=80)` 
        }}
      />
      {/* Soft cream overlay to maintain brand aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/85 via-[#FAF7F2]/75 to-[#FAF7F2]/90" />
      
      <div className="relative text-center max-w-4xl mx-auto z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8B7355] mb-6">Spring/Summer 2026</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.05em] text-[#2C1F14] leading-tight mb-8 text-balance">
          Embrace Your <br />Quiet Luxury
        </h1>
        <p className="text-sm md:text-base text-[#8B7355] max-w-xl mx-auto mb-12 leading-relaxed">
          Discover timeless elegance crafted for the modern woman. Each piece tells a story of sophistication and understated beauty.
        </p>
        <button className="border border-[#2C1F14] px-10 py-4 text-xs uppercase tracking-[0.2em] text-[#2C1F14] hover:bg-[#2C1F14] hover:text-[#FAF7F2] transition-all duration-300 rounded bg-[#FAF7F2]/50 backdrop-blur-sm">
          Explore Collection
        </button>
      </div>
    </section>
  )
}

// Product Card with always-visible name/price and hover effects
interface Product {
  name: string
  price: string
  image: string
}

function ProductCard({ name, price, image }: Product) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] bg-[#EDE8E1] rounded-lg overflow-hidden mb-4 relative transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-[#2C1F14]/10">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-[#2C1F14]/0 group-hover:bg-[#2C1F14]/5 transition-all duration-300" />
      </div>
      {/* Always visible product info */}
      <div className="text-center">
        <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#2C1F14] mb-1">{name}</h3>
        <p className="text-sm text-[#8B7355]">{price}</p>
      </div>
    </div>
  )
}

// New Arrivals Section with curated muted-tone images
function NewArrivals() {
  const products: Product[] = [
    { 
      name: 'Silk Midi Dress', 
      price: '$485', 
      // Muted beige/cream dress - soft editorial style
      image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&h=800&fit=crop&q=80' 
    },
    { 
      name: 'Cashmere Cardigan', 
      price: '$295', 
      // Warm neutral knitwear - soft browns and creams
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop&q=80' 
    },
    { 
      name: 'Linen Trousers', 
      price: '$185', 
      // Natural linen in soft neutral tones
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&q=80' 
    },
  ]

  return (
    <section className="py-24 px-6 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8B7355] mb-4">Fresh Arrivals</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#2C1F14] tracking-wide">New Collection</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Brand Statement Section
function BrandStatement() {
  return (
    <section className="py-32 px-6 bg-[#EDE8E1]/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl text-[#2C1F14] leading-relaxed font-light italic text-balance">
          {'"'}Fashion is not about labels. It is not about brands. It is about something else that comes from within you.{'"'}
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#8B7355]">— The Oracle Philosophy</p>
      </div>
    </section>
  )
}

// Lookbook Section with curated muted editorial images
function Lookbook() {
  const images = [
    // Woman in neutral beige coat - soft light
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=550&fit=crop&q=80',
    // Minimalist cream/white outfit - editorial
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=550&fit=crop&q=80',
    // Soft brown tones fashion
    'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=550&fit=crop&q=80',
    // Natural linen textures, muted palette
    'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=550&fit=crop&q=80',
    // Soft ivory/blush tones
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=550&fit=crop&q=80',
  ]

  return (
    <section className="py-24 px-6 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8B7355] mb-4">Editorial</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#2C1F14] tracking-wide">Lookbook</h2>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {images.map((img, i) => (
            <div 
              key={i}
              className="flex-shrink-0 w-64 md:w-72 aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[#2C1F14]/10"
            >
              <div 
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
interface Testimonial {
  quote: string
  author: string
  location: string
}

function TestimonialCard({ quote, author, location }: Testimonial) {
  return (
    <div className="bg-white/50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <p className="text-[#2C1F14] leading-relaxed mb-6 text-sm">{'"'}{quote}{'"'}</p>
      <div>
        <p className="font-[family-name:var(--font-playfair)] text-[#2C1F14]">{author}</p>
        <p className="text-xs text-[#8B7355] uppercase tracking-wider">{location}</p>
      </div>
    </div>
  )
}

function Testimonials() {
  const testimonials: Testimonial[] = [
    { quote: 'The quality is exceptional. Every piece feels like it was made just for me. True luxury.', author: 'Sophia Chen', location: 'New York' },
    { quote: 'Finally found a brand that understands elegance without excess. Beautifully minimal.', author: 'Emma Laurent', location: 'Paris' },
    { quote: 'Their attention to detail is remarkable. These are investment pieces you will treasure forever.', author: 'Aria Williams', location: 'London' },
  ]

  return (
    <section className="py-24 px-6 bg-[#EDE8E1]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8B7355] mb-4">Voices</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#2C1F14] tracking-wide">What They Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Newsletter Section
function Newsletter() {
  return (
    <section className="py-24 px-6 border-t border-[#EDE8E1] bg-[#FAF7F2]">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8B7355] mb-4">Stay Connected</p>
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#2C1F14] tracking-wide mb-6">Join Our World</h2>
        <p className="text-sm text-[#8B7355] mb-8">Receive exclusive updates, early access to new collections, and styling inspiration.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-transparent border border-[#D4C5B5] rounded text-sm text-[#2C1F14] placeholder:text-[#B5A595] focus:outline-none focus:border-[#D4A5A0] transition-colors"
          />
          <button className="px-8 py-3 bg-[#2C1F14] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] rounded hover:bg-[#8B7355] transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#EDE8E1] bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="font-[family-name:var(--font-playfair)] text-xl tracking-[0.15em] text-[#2C1F14]">ORACLE</a>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#8B7355] hover:text-[#2C1F14] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-[#8B7355] hover:text-[#2C1F14] transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-[#8B7355] hover:text-[#2C1F14] transition-colors">
              <Facebook size={18} />
            </a>
          </div>
          <p className="text-xs text-[#8B7355]">2026 Oracle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function OracleLandingPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <Navbar />
      <Hero />
      <NewArrivals />
      <BrandStatement />
      <Lookbook />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
