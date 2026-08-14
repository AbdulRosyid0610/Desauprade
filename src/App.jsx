import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

// ==========================================
// IMPORT HALAMAN PUBLIK
// ==========================================
import Beranda from './components/pages/Beranda'
import Profil from './components/pages/profil'
import Energi from './components/pages/Energi'
import Berita from './components/pages/Berita'
import UMKM from './components/pages/UMKM'
import Layanan from './components/pages/Layanan'
import LayananForm from './components/pages/LayananForm'
import Statistik from './components/pages/Statistik'
import Aparat from './components/pages/Aparat'
import PetaWilayah from './components/pages/petawilayah'
import CCTV from './components/pages/CCTV'

// ==========================================
// IMPORT LOGIN & ADMIN
// ==========================================
import Login from './components/Login'
import AdminDashboard from './components/Admin/AdminDashboard'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Routes>

        {/* ==========================================
            HALAMAN BERANDA
        ========================================== */}
        <Route
          path="/"
          element={
            <>
              <Navbar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
              <Beranda />
              <Footer />
            </>
          }
        />

        {/* ==========================================
            PROFIL
        ========================================== */}
        <Route
          path="/profile"
          element={
            <>
              <Navbar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
              <Profil />
              <Footer />
            </>
          }
        />

        {/* ==========================================
            BERITA
        ========================================== */}
        <Route
          path="/berita"
          element={
            <>
              <Navbar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
              <Berita />
              <Footer />
            </>
          }
        />

        {/* ==========================================
            UMKM
        ========================================== */}
        <Route
          path="/umkm"
          element={
            <>
              <Navbar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
              <UMKM />
              <Footer />
            </>
          }
        />

        {/* ==========================================
            ENERGI
        ========================================== */}
        <Route
          path="/energi"
          element={
            <>
              <Navbar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
              <Energi />
              <Footer />
            </>
          }
        />

        {/* ==========================================
            LAYANAN
        ========================================== */}
        <Route
          path="/layanan"
          element={
            <>
              <Navbar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
              <Layanan />
              <Footer />
            </>
          }
        />

        {/* ==========================================
            FORM LAYANAN
        ========================================== */}
        <Route
          path="/layanan/form"
          element={
            <>
              <Navbar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
              <LayananForm />
              <Footer />
            </>
          }
        />

        {/* ==========================================
            STATISTIK
        ========================================== */}
        <Route
          path="/statistik"
          element={
            <>
              <Navbar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
              <Statistik />
              <Footer />
            </>
          }
        />

        {/* ==========================================
            APARAT
        ========================================== */}
        <Route
          path="/aparat"
          element={
            <>
              <Navbar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
              <Aparat />
              <Footer />
            </>
          }
        />

        {/* ==========================================
            PETA WILAYAH
        ========================================== */}
        <Route
          path="/peta"
          element={
            <>
              <Navbar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
              <PetaWilayah />
              <Footer />
            </>
          }
        />

        {/* ==========================================
            CCTV
        ========================================== */}
        <Route
          path="/cctv"
          element={
            <>
              <Navbar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
              <CCTV />
              <Footer />
            </>
          }
        />

        {/* ==========================================
            LOGIN
            Tanpa Navbar & Footer
        ========================================== */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* ==========================================
            ADMIN DASHBOARD
            Tanpa Navbar & Footer
        ========================================== */}
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

      </Routes>
    </div>
  )
}

export default App