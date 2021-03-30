import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "./pages/not-found/not-found.component";
import MoviesList from "./pages/MoviesList/MoviesList.component";
import MoviesDetails from "./pages/MovieDetails/Movie.component";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MoviesList} exact />
        <Route component={NotFound} />
        <Route path="/movies/:id" component={MoviesDetails} exact />
      </Switch>
    </>
  );
}

export default App;
