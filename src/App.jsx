import { Route, Router, Routes } from 'react-router-dom';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Cursor from './Components/cursor/Cursor';
import Hero from './Components/hero/Hero';
import Navbar from './Components/navbar/Navbar';
import Parallax from './Components/parallax/Parallax';
import Portfolio from './Components/portfolio/Portfolio';
import Service from './Components/services/Service';
import './app.scss'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return <div>
  <Cursor/>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id="About">
      <About/>
    </section>
    <section id='Services'><Parallax type="services"/></section>
    <section><Service/></section>
    <section id='Portfolio'><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id='Contact'>
      <Contact/>
    </section>
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    {/* <Router>
      <Routes>
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </Router>  */}
  </div>;
};

export default App;
