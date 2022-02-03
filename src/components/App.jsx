import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from '../pages/Home';
import Header from './Header';
import VerticalNav from './VerticalNav';

/**
 * Styled Components
 */

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
    margin: auto;
    #root{
      position:relative;
      height: 100%;
    }
  }
`;

/**
 * App router
 * @return (JSX)
 */

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <VerticalNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
