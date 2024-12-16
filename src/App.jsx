import { Button } from "./components/ui/button"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />

        </Routes>
      </Router>

    </>
  )
}

export default App
