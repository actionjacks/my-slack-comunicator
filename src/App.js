import "./App.css";
import Header from "./componets/Header";
import Sidebar from "./componets/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
