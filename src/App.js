import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/contexts/AuthProvider";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import AllServices from "./components/Home/AllServices/AllServices";

import Blogs from "./components/Home/Blogs/Blogs";
import ContactUs from "./components/Home/ContactUs/ContactUs";

import Home from "./components/Home/Home/Home";
import ShowDetail from "./components/Home/ShowDetail/ShowDetail";
import Login from "./components/Login/Login/Login";

import Register from "./components/Login/Register/Register";

import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/allservices">
              <AllServices></AllServices>
            </Route>
            <PrivateRoute path="/blogs">
              <Blogs></Blogs>
            </PrivateRoute>
            <PrivateRoute path="/contactus">
              <ContactUs></ContactUs>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/service/:name">
              <ShowDetail />
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
