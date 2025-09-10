import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (!currentUser) {
    return <h2>Please login first</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {currentUser.username}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
