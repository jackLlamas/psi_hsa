import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh', padding: '0px ' }}>
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}