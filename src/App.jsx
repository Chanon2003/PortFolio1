import './App.css'
import resume from './assets/resume_chanon.pdf'
import BodySection from './section/BodySection'
import Header from './section/Header'
import { BrowserRouter as Router, } from "react-router-dom";


function App() {

  return (
    <Router>
      {/* ✅ ห่อ Layout ทั้งหมด */}
      <div className="mx-auto gap-y-4 p-2 max-w-6xl">
        <Header resume={resume} />
        <BodySection />
      </div>
    </Router>

  )
}

export default App
