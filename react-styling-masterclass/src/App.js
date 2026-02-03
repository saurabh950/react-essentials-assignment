import React from "react";
import {ThemeProvider} from "styled-components";
import './App.css';
import ProfileCard from "./components/ProfileCard";
import ProfileCardStyled from "./components/ProfileCardStyled";

const theme = {
  colors:{
    primary:'#667eea',
    secondary:'#764ba2',
    text:'#2d3748',
    textLight:'#718096',
    textMuted:'#a0aec0',
    border:'#e2e8f0',
    white:'#ffffff',
    shadow:'rgba(0, 0, 0, 0.1)'
  },
  spacing:{
    xs:'5px',
    sm:'12px',
    md:'20px',
    lg:'25px',
    xl:'30px'
  },
  borderRadius:{
    sm:'8px',
    md:'12px',
    lg:'20px',
    full:'50%'
  }
};

function App(){
  return(
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>React Styling Masterclass</h1>
          <p>Building Beautiful components</p>
        </header>
        <main className="main-content">
          <ProfileCard/>
          <ProfileCardStyled/>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App;