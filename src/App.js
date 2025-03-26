import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import MyCustomComponent from './myCustomComponent';

function App() {

  const [company, setCompany] =React.useState();
  const [name, setName] = React.useState();

  // const companyDetails = React.useState();
  // const company = companyDetails[0];
  // const setCompany = companyDetails[1];

  function handleChange(event){
    const textboxValue = event.target.value;
    console.log('textbox value changed', event, event.target, textboxValue);
    setCompany(textboxValue);
  }

  function handleChangeName(event){
    const textboxValue = event.target.value;
    console.log('textbox value changed', event, event.target, textboxValue);
    setName(textboxValue);
  }

  function useEffectCallback(){
    console.log('I come from useEffect')
  }

  useEffect(useEffectCallback, [company]);
  return (
    <div className="App">
      <div>
        <MyCustomComponent name="srilakshmi" company={company}/>
        <h1>Hello World!! {name}, {company}</h1>
        Name: <input type="text" onChange={handleChangeName}/>
        Company: <input type="text" onChange={handleChange}/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          My name is Srilakshmi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
