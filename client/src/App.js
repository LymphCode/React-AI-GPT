import logo from './logo.svg';
import './normal.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <h1 className="side-menu-button">
          <span>+</span>
          New chat
        </h1>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="avatar">
              Me
            </div>
            <div className="message">
              Hello World
            </div>
          </div>
        </div>
        <div className="chat-input-holder">
          <textarea
            rows="1"
            className="chat-input-textarea">
          </textarea>
        </div>

      </section>
    </div>
  );
}

export default App;
