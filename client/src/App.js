import NavBar from "./components/Navbar"
import './components/style.css'
import { Carousel } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/BAF5/production/_111516874_gettyimages-451627799-1.jpg" alt="First slide"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://www.rebgv.org/content/dam/rebgv_org_content/images/strata%20pets.jpg" alt="Third slide"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://i.cbc.ca/1.5077459.1553886010!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/pets.jpg" alt="Third slide"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="footer fixed-bottom bg-dark text-center text-white">
        @Decoding Java Drinkers
      </div>
    </div>
    
  );
}
export default App;
