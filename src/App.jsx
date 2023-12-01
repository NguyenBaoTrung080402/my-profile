import Contact from './Components/contact/Contact';
import Cursor from './Components/cursor/Cursor';
import Hero from './Components/hero/Hero';
import Navbar from './Components/navbar/Navbar';
import Parallax from './Components/parallax/Parallax';
import Portfolio from './Components/portfolio/Portfolio';
import Service from './Components/services/Service';
import './app.scss'

const App = () => {
  return <div>
  <Cursor/>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'><Parallax type="services"/></section>
    <section><Service/></section>
    <section id='Portfolio'><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id='Contact'>
      <Contact/>
    </section>
    
  </div>;
};

export default App;
