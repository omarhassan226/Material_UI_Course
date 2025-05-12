import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/layout'
import { Home } from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Products from './pages/products'

function App() {

  return (
    <>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact />} />
          <Route path='products' element={<Products />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
