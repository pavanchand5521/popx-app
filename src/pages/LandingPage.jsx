import { useNavigate } from "react-router-dom";

// Screen 1 — Landing / Welcome page
function LandingPage() {
  const navigate = useNavigate();


  return (
    <div className="mobile welcome">
      <div className="bottom-section">
        <h1>Welcome to PopX</h1>
        <p>
          Create your account, explore PopX features, and get started in a few
          simple steps.
        </p>
        {/* Use push (default) so browser back from /signup or /login returns here */}
        <button className="primary-btn" onClick={() => navigate("/signup")}>
          Create Account
        </button>
        <button className="secondary-btn" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
