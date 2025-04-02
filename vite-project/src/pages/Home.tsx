import Header from '../components/Header.js'
import Hero from '../components/Hero'
import AfricaEcosystem from '../components/AfricaEcosystem'
import ProtocolFeatures from '../components/ProtocolFeatures.js'
import CTA from '../components/CTA.js'
import Footer from '../components/Footer.js'

function Home() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <AfricaEcosystem />
        <ProtocolFeatures />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default Home