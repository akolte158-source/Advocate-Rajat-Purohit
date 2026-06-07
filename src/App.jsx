import Footer from './components/Footer'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'
import PracticeAreas from './pages/PracticeAreas'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
