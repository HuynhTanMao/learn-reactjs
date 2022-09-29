import { Container } from "@mui/material";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import productApi from './api/productApi.js';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import News from './pages/News';
import Todos from './pages/Todos';
import Tools from './pages/Tools';
import Tool from './pages/Tools/Tool.jsx';

function App() {

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();

  }, []);


  return (
    <div className="App">
      <Container fixed>
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
      </Container>
    </div>
  );
}

function HomePage() {
  return (
    <h1>Home page</h1>
  );
}


export default App;
