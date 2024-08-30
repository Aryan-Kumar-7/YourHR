import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home'
import SignUp from './component/SignUp/SignUp'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
