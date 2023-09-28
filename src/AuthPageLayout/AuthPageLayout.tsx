import { Outlet, useNavigate } from "react-router-dom";
import NavigationBar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

import "./AuthPageLayout.css";
import { useEffect } from "react";

export default function AuthPageLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token") == null) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="AuthLayout">
        <div
          className="Navigation-bar"
          style={{ height: "55px", width: "100%", backgroundColor: "red" }}
        >
          <NavigationBar />
        </div>
        <div
          className="Conatiner"
          style={{ display: "flex", width: "100%", height: "90vh" }}
        >
          <div
            className="sidebar"
            style={{
              width: "20%",
              height: "784px",
              backgroundColor: "#6eb0fc",
            }}
          >
            <Sidebar />
          </div>
          <div
            className="tabledata"
            style={{
              width: "80%",
              height: "784px",
              backgroundColor: "#91AEC1",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
