import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.tsx'
import About from './pages/About/about.tsx'
import Booklist from './components/Booklist/booklist.tsx'
import Bookdetails from './components/Bookdetails/bookdetails.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}>        
        <Route path='about' element={<About />} />
        <Route path='Booklist' element={<Booklist />} />
        <Route path='book' element={<Booklist />} />
        <Route path='Bookdetails' element={<Bookdetails />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
