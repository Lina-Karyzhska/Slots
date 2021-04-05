import { useEffect, useState } from 'react';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
  const [dollars, setDollars] = useState(localStorage.dollars);

  const changeDollars = () => {
    setDollars(localStorage.dollars);
  }

  useEffect(() => {
    if (localStorage.dollars === undefined) {
      localStorage.dollars = 5;
      setDollars(localStorage.dollars)
    }
    if (localStorage.history === undefined) localStorage.history = JSON.stringify([]);
  }, [])

  return (
    <>
      <Header dollars={dollars}/>
      <Content changeDollars={changeDollars}/>
      <Footer />
    </>
  );
}

export default App;
