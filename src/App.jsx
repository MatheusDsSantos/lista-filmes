import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/Login";
import Watchlist from "./routes/Lista";

export default function App() {
  const currentUser = localStorage.getItem("lista_usuario_atual");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/lista"
          element={
            currentUser ? <Watchlist /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="*"
          element={<Navigate to={currentUser ? "/lista" : "/"} replace />}
        />
      </Routes>
    </Router>
  );
}