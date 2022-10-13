import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import productApi from "api/productApi";
import Products from "pages/Products";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import News from './pages/News';
import Todos from './pages/Todos';
import Tools from './pages/Tools';
import Tool from './pages/Tools/Tool.jsx';

const theme = createTheme({
  palette: {
    background: {
      default: "#f6f6f6"
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {<Header />}
        <div className="page-wrap">
          <Container>
            <Routes>
              <Route index path='/' element={<HomePage />} />
              <Route path='/tools'>
                <Route index element={<Tools />} />
                <Route path=":toolSlug" element={<Tool />} />
              </Route>
              <Route path='/todos' element={<Todos />} />
              <Route path='/news' element={<News />} />
              <Route path='/products' element={<Products />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Container>
        </div>
        {<Footer />}
      </ThemeProvider>
    </div>
  );
}

function HomePage() {
  return (
    <h1>Home page</h1>
  );
}


export default App;
