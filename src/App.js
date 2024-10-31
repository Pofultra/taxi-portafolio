
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Mission } from './components/sections/Mission';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import './App.css';



const App = () => (
  <div className="min-h-screen bg-white">
  <Header />
  <main>
    <Hero />
    <div className="bg-yellow-500 h-1" />
    <About />
    <div className="bg-yellow-500 h-1" />
    <Services />
    <div className="bg-yellow-500 h-1" />
    <Mission />
    <div className="bg-yellow-500 h-1" />
    <Contact />
  </main>
  <Footer />
  <WhatsAppButton />
</div>
);

export default App;