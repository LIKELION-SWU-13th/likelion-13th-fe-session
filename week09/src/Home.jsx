import "./Home.css";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn]);
  return (
    <>
      <div className="Home">
        <div className="logo"></div>
        <div className="section">
          <h2>Home</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
