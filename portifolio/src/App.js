
import './App.css';
import './COMPONENTES/SECTION/Navbar'
import Navbar from './COMPONENTES/SECTION/Navbar';
import './COMPONENTES/SECTION/Presentation'
import Presentation from './COMPONENTES/SECTION/Presentation';
import './COMPONENTES/SECTION/Projects'
import Projects from './COMPONENTES/SECTION/Projects';
import './COMPONENTES/SECTION/Skills'
import Skills from './COMPONENTES/SECTION/Skills';
import './COMPONENTES/SECTION/Footer'
import Footer from './COMPONENTES/SECTION/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Presentation></Presentation>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>   
    </div>
  );
}

export default App;
