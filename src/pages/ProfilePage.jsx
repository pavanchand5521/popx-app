import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import defaultAvatar from "../assets/default-avatar.png";

// Screen 4 — Profile / Account Settings page
function ProfilePage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="mobile">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &#8592; Back
      </button>

      <h2>Account Settings</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <img
          src={defaultAvatar}
          alt="profile"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
          }}
        />
        <div style={{ marginLeft: "15px" }}>
          <h3>{user?.fullName || "Marry Doe"}</h3>
          <p>{user?.email || "marry@gmail.com"}</p>
        </div>
      </div>

      <p style={{ marginTop: "20px" }}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
      </p>
    </div>
  );
}

export default ProfilePage;
