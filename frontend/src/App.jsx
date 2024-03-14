import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import HomeView from "./views/HomeView";
import endpoints from "../endpoints";
import SignUpView from "./views/SignUpView/SignUpView";
import SignInView from "./views/SignInView/SignInView";
function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path={endpoints.SIGN_UP} element={<SignUpView />}></Route>
          <Route path={endpoints.SIGN_IN} element={<SignInView />}></Route>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
