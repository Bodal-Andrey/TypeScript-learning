import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';


const App:React.FC = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default App;
