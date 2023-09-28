import { Button, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function NavigationBar() {
  const navigate = useNavigate();

  const LogOut = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <Navbar className="navbar" style={{ backgroundColor: "#EAE6E5" }}>
        <Container>
          <Navbar.Brand href="#home">NAVBAR</Navbar.Brand>
          <div>
            <Navbar.Text>
              Signed in as: <a href="#login">Rohan Sarkar</a>
            </Navbar.Text>
          </div>
        </Container>
        <Button
          className="btn"
          variant="danger"
          onClick={() => LogOut()}
          style={{ padding: "4px 8px", marginRight: "20px" }}
        >
          LOG OUT
        </Button>
      </Navbar>
    </div>
  );
}
