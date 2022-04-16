import { SignOut } from "./components/signout";
import { AuthProvider } from "./providers/AuthProvider";
import { Landing } from "./components/landing";
import "./App.css";

// const db = getFirestore(app);

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <header>
          <SignOut />
        </header>
        <section>
          <Landing />
        </section>
      </div>
    </AuthProvider>
  );
}

export default App;
