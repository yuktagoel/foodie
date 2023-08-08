import './App.css';

import Container from './components/Container';
import Header from './components/Header';
// import Header from './components/header';
import React from 'react';


const AppLayout = () => {
  return (
    <div className='App'>
      <Header />
      <Container/>
    </div>
  )
}
export default AppLayout
