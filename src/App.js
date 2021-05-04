import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation"
import "./routes/Home.css"

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail}></Route>
    </HashRouter>
  );
}

//exact는 paht경로가 "" 일때만 렌더링 한다는 뜻! 즉, 렌더링이 겹치지않게 만들어주는 기능

export default App;