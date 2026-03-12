// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

function App() {

   return (
      <>
         <Header />
         <About />
         <Projects />
         <Experience />
         <Education />
         <Skills />
         <Contact />
         <Footer />
      </>
   )
}

export default App
