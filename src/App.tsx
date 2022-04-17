import "./App.css";
import { Landing } from "./components/landing";
import { SignOut } from "./components/signout";
import { AuthProvider } from "./providers/AuthProvider";

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
