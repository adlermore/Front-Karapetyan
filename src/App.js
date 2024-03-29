import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import JsonContext from './components/JsonContext/JsonContext';
import HomePage from './pages/HomePage';
import request from './components/Request/request';

function App() {

  const [BlogListData, setBlogListData] = useState(null);
  const [originalData, setOriginalData] = useState(null);

  useEffect(() => {

    request(`https://cloud.codesupply.co/endpoint/react/data.json`)
      .then((home) => {
        setBlogListData(home);
        setOriginalData(home);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const setCurrentStop = (inputValue) => {
    if (inputValue === undefined) {
      return;
    }
    if (inputValue === '') {
      setBlogListData(originalData);
    } else {
      if (originalData) {
        const results = originalData.filter(blog =>
          (blog.title && blog.title.toLowerCase().includes(inputValue.toLowerCase())) ||
          (blog.text && blog.text.toLowerCase().includes(inputValue.toLowerCase()))
        );
        setBlogListData(results);
      }
    }
  };

  return (
    <div className="App">
      <JsonContext.Provider value={{ BlogListData, setCurrentStop }}>
        <Header />
        <HomePage />
      </JsonContext.Provider>
    </div>
  );
}

export default App;
