import './App.css'
// import Pages from './components/pages/Pages'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/header/Header.jsx'
import Home from './components/pages/Home/Home.jsx'
import Footer from './components/footer/Footer.jsx'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Home />
        <Footer />
      </DndProvider>
    </>
  )
}

export default App
