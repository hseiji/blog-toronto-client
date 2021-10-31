import NavbarComp from "./components/navbar/NavbarComp";
import Home from "./components/pages/home/Home";
import Post from "./components/pages/post/Post";
import Edit from "./components/pages/edit/Edit";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import { useContext } from "react";
import { Context } from "./components/context/Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  const { user } = useContext(Context);
  return (
    // <>
    //   <NavbarComp/>
    //   <Register/>
    // </>
    <Router>
      <NavbarComp/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/edit">
            {user ? <Edit/> : <Register/>}
          </Route>
          <Route path="/posts/:postId">
            <Post/>
          </Route>
          <Route path="/login">
            {user ? <Home/> : <Login/>}
          </Route>
          <Route path="/register">
            {user ? <Home/> : <Register/>}
          </Route>
          <Route path="/settings">
            {user ? <Settings/> : <Register/>}
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
