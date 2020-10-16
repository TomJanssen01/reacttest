import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const NAMES_Data = [
    {name: "Walter", function: "HR"},
    {name: "Alpa", function: "SALES"},
    {name: "Bert", function: "SALES"},
    {name: "Sven", function:"TECS"},
    {name: "Nataï", function:"ADMIN"},
];

function Names (props){
  const {name}  =props;
  return <div>{name}</div>
}

const[welcomeText, setWelcomeText]= useState(process.env.REACT_APP_TEXT);
function App() {
  return (

    <div>
        <p>{process.env.REACT_APP_TEXT}</p>
      <h1>Hier is een namenlijst van jouw collega's</h1>
        {NAMES_Data.map((n)=>
        <Names key={n.name} name={n.name}/>)}
    </div>
  );
}

export default App;
