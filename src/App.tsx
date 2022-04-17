import { SignOut } from "./components/signout";
import { AuthProvider } from "./providers/AuthProvider";
import { Landing } from "./components/landing";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <header>
          <SignOut />
        </header>
        <main>
          <Landing />
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
