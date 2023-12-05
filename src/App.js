import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import FormContainer from "./components/Form/Container";

function App() {
  return (
    <div className="App">
      <SideBar />

      <FormContainer />
    </div>
  );
}

export default App;
