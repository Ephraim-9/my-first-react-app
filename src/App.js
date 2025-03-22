import React from "react";
import "./App.css"
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import UserCard from "./UserCard";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <div>
        <Header title="🚀 My First React App" />
        <Main content="This is the main content of the page!" />
        <Footer footerText="© 2025 All rights reserved" />
      </div>
      <div>
        <UserCard name="Alice" age={25} job="Engineer" />
        <UserCard name="Bob" age={30} job="Designer" />
      </div>
      <div>
        <h1>React Counter App</h1>
        <Counter />
      </div>

    </div>
  );
}

export default App;