import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="app-cont">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        <div data-testid="planets">
          {planetsList.map(eachItem => (
            <PlanetItem planetDetails={eachItem} key={eachItem.id} />
          ))}
        </div>
      </Slider>
    </div>
  )
}

export default PlanetsSlider
