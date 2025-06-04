import React from 'react';
import Nested from './Nested';
import Calculator from './Calculator';
import './App.css';
import TodoList from './TodoList';
import QuoteGenerator from './QuoteGenerator';
import ThemeToggle from './ThemeToggle';
import ImageCarousel from './ImageCarousel';
import QuizApp from './QuizApp';
import CountdownTimer from './CountdownTimer';

function App() {
  return (
    <div className="app-container">
      <h1 id='reacttopic'>React Topics</h1>
      <ul>
        <li>
          <h2>Nested</h2>
          <Nested />
        </li>
        <li>
          <h2>Calculator (State Management)</h2>
          <Calculator />
        </li>
        <li>
          <h2>To Do List (Props and Prop Drillings)</h2>
          <TodoList />
        </li>
        <li>
          <h2>Quote Generator (React Hoop)</h2>
          <QuoteGenerator/>
        </li>
        <li>
          <h2>Theme Toggle (Higher Order Component)</h2>
          <ThemeToggle/>
        </li>
        <li>
          <h2>Image Carousoul (useState)</h2>
          <ImageCarousel/>
        </li>
        <li>
          <h2>Quiz App (Conditional Rendering)</h2>
          <QuizApp/>
        </li>
        <li>
          <h2>Countdown Timer (Ending)</h2>
          <CountdownTimer/>
        </li>
      </ul>
    </div>
  );
}

export default App;
