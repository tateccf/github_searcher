import React from 'react';
import './App.css';
import { Routes } from './routes/routes';
import { Navbar } from './components/Navbar/Navbar';

export const App: React.FC = () => {
  return (
    <>
      <Navbar title="GitHub Searcher" icon="fab fa-github" />
      <div className="container">
        <Routes />
      </div>
    </>
  );
};
