import Header from "./components/Header";
import Main from "./components/Main";
import {useState} from "react"
import Footer from "./components/Footer"
function App() {
  return (
    <>
    <Header />
    <div className="container-fluid">
      <Main />
      <Footer />
    </div>
    </>
  );
}

export default App;
