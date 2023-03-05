// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planet-cont">
      <img className="image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="des">{description}</p>
    </div>
  )
}

export default PlanetItem
