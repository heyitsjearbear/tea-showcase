import React from 'react';
import Header from './components/Header/Header';
import TeaList from './components/TeaList/TeaList';
import Footer from './components/Footer/Footer';
import './App.css'; // Your main CSS file

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TeaList />
      <Footer />
    </div>
  );
};

export default App;
