import "./App.scss";
import Header from "./components/header";
import { Landing } from "./components/landing";
import { AuthProvider } from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header></Header>
        <main>
          <Landing />
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
