import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Topheadlines from './PAGES/Topheadlines';
import Poltics from './PAGES/Poltics';
import Sports from './PAGES/Sports';
import Bussiness from './PAGES/Bussiness';
import Other from './PAGES/Other';
import Header from './COMPONENTS.jsx/Header';
import Footer from './COMPONENTS.jsx/Footer';





function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route element={<Topheadlines />} path='/' />
        <Route element={<Bussiness />} path='/bussiness' />
        <Route element={<Poltics />} path='/poltics' />
        <Route element={<Sports />} path='/sports' />
        <Route element={<Other />} path='/other' />
      </Routes>
      <Footer />


    </>
  )
}

export default App
