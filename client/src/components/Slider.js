import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../components/style.css'
export default function Slider(){
  return(
    <Carousel>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src="https://www.safewise.com/app/uploads/2020/06/pets-social.jpg" alt="First slide"/>
        <Carousel.Caption>
          <h2 className="text-gradient1">Best place for pets!!</h2>
          {/* <h3>No one comes here once</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://www.rebgv.org/content/dam/rebgv_org_content/images/strata%20pets.jpg" alt="Second slide"/>
        <Carousel.Caption>
          <h2 className="text-gradient2">Unforgettable Moment!!</h2>
          {/* <h3>Friends are all around you</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900" alt="Third slide"/>
        <Carousel.Caption>
          <h2 className="text-gradient3">Vast Place!!</h2>
          {/* <h3>Every single place is for you</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}