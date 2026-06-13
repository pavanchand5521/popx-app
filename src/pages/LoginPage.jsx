import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FloatingInput from "../Components/common/FloatingInput";

// Screen 2 — Login page
function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("user"));

    if (!stored || stored.email !== email || stored.password !== password) {
      alert("Invalid email or password.");
      return;
    }

    login(stored);
    navigate("/profile");
  };

  return (
    <div className="mobile">
      <button className="back-btn" onClick={() => navigate("/", { replace: true })}>
        &#8592; Back
      </button>

      <h1>Signin to your PopX account</h1>
      <p>
        Sign in to review your profile details, continue your work and stay
        connected.
      </p>

      <FloatingInput
        label="Email Address"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FloatingInput
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button className="primary-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;
