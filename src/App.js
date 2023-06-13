import React from 'react';
import TodosLogic from './components/TodosLogic';
import './style/App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
}

export default App;
