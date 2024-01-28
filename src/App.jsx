import './App.css'
import Home from './components/Home'
import Updates from './components/Updates'
import LaxAI from './components/LaxAI'
import Chalaan from './components/Chalaan'
import Chatbot from './components/Chatbot'
import Footer from './components/Footer'
import Map from './components/Map'
function App() {
  return (
    <div>
      <Home />
      <Updates />
      <LaxAI/>
      <Chalaan/>
      <Map/>
      {/* <Chatbot/>  */}
      <Footer/>
    </div>
  )
}

export default App
