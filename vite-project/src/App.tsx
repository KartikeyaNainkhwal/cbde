import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Api from './pages/APi.js'
import ContactForm from './pages/ContactForm.js'
function App() {
  return (
    <div>
      <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<APi />} />
          <Route path="/contactus" element={<ContactForm />} />
        </Routes>
      </main>
    </Router>
    </div>
  )
}

export default App
