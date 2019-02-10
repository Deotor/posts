import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./Posts";
import Post from "./Post";
import PostForm from "./Postform";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route path="/posts" component={Posts} />
      <Route path="/add-post" component={PostForm} />
      <Route path="/post/:id" component={Post} />
    </Switch>
  </main>
);

export default Main;
