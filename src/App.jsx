import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout setUser={setUser} user={user} />}>
            <Route index element={<Home user={user} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route
              path="/profile"
              element={<Profile setUser={setUser} user={user} />}
            />
          </Route>
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
