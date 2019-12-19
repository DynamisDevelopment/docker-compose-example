import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const sendMessage = e => {
    e.preventDefault();
    const message = { message: e.target.elements.message.value };
    axios.post("/api/message", message);
    e.target.elements.message.value = "";
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={e => sendMessage(e)}>
          <input type="text" placeholder="Message" id="message" name="message" />
          <button type="submit">Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
