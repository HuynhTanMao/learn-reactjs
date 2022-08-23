import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';
import Todos from './pages/Todos';
import News from './pages/News';
import Tools from './pages/Tools';
import Tool from './pages/Tools/Tool.jsx';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="container">
        {<Header />}
        <div className="page-wrap">
          <Routes>
            <Route index path='/' element={<HomePage />} />
            <Route path='/tools'>
              <Route index element={<Tools />} />
              <Route path=":toolSlug" element={<Tool />} />
            </Route>
            <Route path='/todos' element={<Todos />} />
            <Route path='/news' element={<News />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
        {<Footer />}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <h1>Home page</h1>
  );
}


export default App;
