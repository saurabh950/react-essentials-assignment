import React from 'react';
import PortfolioCard from './components/PortfolioCard';
import './App.css';

function App() {
  const data = {
    name: 'John Doe',
    title: 'Software Developer',
    bio: 'Passionate about coding and building amazing user experiences.',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    skills: ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js'],
    images: [
      'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D'
    ]
  };

  return (
    <div className="App">
      <PortfolioCard {...data} />
    </div>
  );
}

export default App;