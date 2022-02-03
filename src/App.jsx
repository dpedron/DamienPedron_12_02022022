import { BrowserRouter, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import VerticalNav from './components/VerticalNav';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
    margin: auto;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <VerticalNav />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
