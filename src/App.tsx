import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Privacy from "./Privacy";
import Terms from "./Terms";
import logo from "./assets/logo.jpg";

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
                
                  <img src={logo} alt="CRM IMS Logo" width="150" />
                  <p>
                  CRM IMS is a customer relationship management system that allows users to manage clients, track sales, and send emails securely from their own Gmail accounts.
                  </p>
                  <p>
                  This app requests access to your Gmail only to send emails you initiate; we do not read, store, or analyze your inbox.
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