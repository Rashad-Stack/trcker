import { Routes, Route } from "react-router-dom";

import useAuthCheck from "./hooks/useAuthCheck";
import { PrivetRoutes, PublicRoutes } from "./routes";
import { Login, Register } from "./pages/auth";
import {Home, HowItWorks } from "./pages";

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <h1 className="text-3xl font-bold underline">...Loading</h1>
  ) : (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />

      {/* this routes can not be visible after logged in */}
      <Route path="/*" element={<PublicRoutes />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Privet Routes, This routes can not be visible before logged in */}
      <Route path="/*" element={<PrivetRoutes />}>
        <Route path="panel/groups" element={<div>Group comming son</div>} />
        <Route path="panel/keywords" element={<div>Keyword comming son</div>} />
      </Route>

      {/* 404 Not Found */}
      <Route path="*" element={<div>404 Page not found!</div>} />
    </Routes>
  );
}

export default App;
