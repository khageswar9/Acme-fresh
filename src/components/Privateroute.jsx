import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ user, children }) => {
    let navigate = useNavigate();
    if (!user) {
      alert("You didnot Login Yet")
      return navigate("/");
    }
    return children;
  };