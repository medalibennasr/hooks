import { Nav, Container, Navbar } from "react-bootstrap";
import AddMovie from "../Addmovie/AddMovie";
import SearchStudent from "../Filtre/Search";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

function NavBar({ addMovie, setFilterByName, setRateByName }) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MOVIES</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>

            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <ReactStars
            count={5}
            onChange={(e) => setRateByName(e)}
            size={24}
            edit={true}
            color2={"#ffd700"}
          />
          <SearchStudent setFilterByName={setFilterByName} />
          <AddMovie addMovie={addMovie} />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
