import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Privacy from "./Privacy";
import Terms from "./Terms";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>CRM IMS</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/privacy">Privacy Policy</Link> |{" "}
          <Link to="/terms">Terms of Service</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <p>
                  CRM IMS is a customer relationship management system that allows
                  users to manage clients and send emails securely using their own
                  Google accounts.
                </p>
              </div>
            }
          />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}