import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from '../pages/Login';
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
    height: 100vh;
    min-height: 920px;
  }
  #root{
    position:relative;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

/**
 * @description App router
 * @returns {JSX}
 */

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <VerticalNav />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/user/:userId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
