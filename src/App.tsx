import "./App.css";
import { Landing } from "./components/landing";
// import { SignOut } from "./components/signout";
import { AuthProvider } from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <header>
          {/* <SignOut /> */}
          <img className='chat-avatar'
            src={process.env.PUBLIC_URL + "/account_circle_white_24dp.svg"}
            alt=""
          />
          <div className="chat-title-wrapper">
            <span className="chat-title">Group Chat</span>
            <span className="chat-online-status">online</span>
          </div>
        </header>
        <main>
          <Landing />
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
