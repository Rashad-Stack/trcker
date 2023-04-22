import { Routes, Route } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import { PrivetRoutes, PublicRoutes } from "./routes";
import { Main } from "./layouts";
import { Register } from "./pages/auth";

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <h1 className="text-3xl font-bold underline">...Loading</h1>
  ) : (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <Main>
              <div className="bg-white dark:bg-black">Home</div>
            </Main>
          }
        />
        <Route
          path="/start"
          element={
            <Main>
              <div className="bg-white dark:bg-black">Home</div>
            </Main>
          }
        />
      </Route>
      {/* Privet Routes */}
      <Route path="/" element={<PrivetRoutes />}></Route>

      {/* 404 Not Found */}
      <Route path="*" element={<div>404 Page not found!</div>} />
    </Routes>
  );
}

export default App;
