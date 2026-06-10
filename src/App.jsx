import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import Navbar from './components/Navbar'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'

// Per-page enter/exit transition (transform + opacity only).
function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/shop" element={<Page><Shop /></Page>} />
            <Route path="/product/:id" element={<Page><ProductPage /></Page>} />
            <Route path="/cart" element={<Page><Cart /></Page>} />
          </Routes>
        </AnimatePresence>
      </main>
      <CartDrawer />
    </MotionConfig>
  )
}
