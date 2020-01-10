import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBook from "./pages/SaveBook";
import SearchBook from "./pages/SearchBook";
import NoMatch from "./pages/NoMatch";
import SearchBar from "./components/Nav";
import Footer from "./components/Footer"



function App() {

  return (
    <div>
      <SearchBar />


      <div>
        <Switch>
          <Route exact path="/" component={SearchBook} />
          <Route exact path="/saved" component={SaveBook} />
          <Route exact path="/saved/:id" component={SaveBook} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>

    </div>
  );
}

export default App;