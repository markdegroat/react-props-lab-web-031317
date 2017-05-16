import React from 'react'
export default class Spaceship extends React.Component {
  render () {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Speed: {this.props.speed}</h2>
        <h2>Does it have rockets?: {this.props.hasRockets}</h2>
        <h2>Colors: {this.props.colors.join(', ')}</h2>
      </div>
    )
  }
}//end class

Spaceship.defaultProps = {
  Name: "Millennium Falcon",
  Speed: 0,
  hasRockets: false,
  colors: ['black', 'red']
}
