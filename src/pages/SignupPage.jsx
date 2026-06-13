import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FloatingInput from "../components/common/FloatingInput";

// Screen 3 — Signup / Register page
function SignupPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    signup(form);
    navigate("/profile");
  };

  return (
    <div className="mobile">
      <button className="back-btn" onClick={() => navigate("/", { replace: true })}>
        &#8592; Back
      </button>

      <h1>Create your PopX account</h1>

      <FloatingInput
        label="Full Name"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        required
      />
      <FloatingInput
        label="Phone Number"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <FloatingInput
        label="Email Address"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <FloatingInput
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <FloatingInput
        label="Company Name"
        name="company"
        value={form.company}
        onChange={handleChange}
      />

      <p className="agency-text">Are you an Agency?</p>
      <div className="radio-group">
        <label className="radio-label">
          <input
            type="radio"
            name="agency"
            value="Yes"
            checked={form.agency === "Yes"}
            onChange={handleChange}
          />
          <span>Yes</span>
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="agency"
            value="No"
            checked={form.agency === "No"}
            onChange={handleChange}
          />
          <span>No</span>
        </label>
      </div>

      <button className="primary-btn" onClick={handleSignup}>
        Create Account
      </button>
    </div>
  );
}

export default SignupPage;
