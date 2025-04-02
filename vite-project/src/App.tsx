import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Api from './pages/APi.js'

function App() {
  return (
    <div>
      <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </main>
    </Router>
    </div>
  )
}

export default App
