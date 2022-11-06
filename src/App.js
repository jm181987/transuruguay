import Header from "./components/Header";
import Main from "./components/Main";
import {useState} from "react"
function App() {
  return (
    <>
    <Header />
    <div className="container-fluid">
      <Main />
    </div>
    </>
  );
}

export default App;
