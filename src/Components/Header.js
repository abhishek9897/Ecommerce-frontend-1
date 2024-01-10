import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const count = useSelector((state) => {
    return state.cart.item.length;
  });
  console.log(count);

  const navigate = useNavigate();

  return (
    <Navbar
      expand="lg"
      className="navbar-dark bg-dark"
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 10 }}
    >
      <Container>
        <Navbar.Brand>Abhi Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="w-100 justify-content-end">
            <Button
              onClick={() => navigate("/")}
              style={{ backgroundColor: "transparent", border: "0px" }}
            >
              Home
            </Button>
            <Button
              onClick={() => navigate("/Menswear")}
              style={{ backgroundColor: "transparent", border: "0px" }}
            >
              Men's Wear
            </Button>

            <NavDropdown title="Women's Wear" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="">T-Shirts</NavDropdown.Item>
              <NavDropdown.Item href="">Shoes</NavDropdown.Item>

              <NavDropdown.Item href="">Footwears</NavDropdown.Item>
            </NavDropdown>

            <Button
              onClick={() => navigate("/CartItems")}
              // className=" btn btn-light"
              style={{ backgroundColor: "transparent", border: "0px" }}
            >
              <div className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  width="18"
                  viewBox="0 0 576 512"
                  fill="white"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
                <div
                  style={{
                    border: "1px solid #ff3e6c",
                    borderRadius: "100%",
                    backgroundColor: "#ff3e6c",

                    height: "15px",
                    width: "15px",
                    position: "relative",
                    right: "5px",
                    bottom: "3px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "small",
                      position: "relative",
                      bottom: "3px",
                      color: "white",
                      fontWeight: "700",

                      // font: "7px",
                    }}
                  >
                    {count}
                  </p>
                </div>
              </div>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
