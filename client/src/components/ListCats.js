import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListCats extends Component {
  static propTypes = {
    dogFriendlyCats: PropTypes.array.isRequired,
    childFriendlyCats: PropTypes.array.isRequired,
    strangerFriendlyCats: PropTypes.array.isRequired
  }
 
  render() {
    const { dogFriendlyCats, childFriendlyCats, strangerFriendlyCats} = this.props
    return (
      <div >
          <div>
                <h1> Top five dog friendly cats with similar weighting: </h1>
                <ol>
                    {dogFriendlyCats.map((cat) => (
                    <li key={cat.id}>
                    <div >
                        <p>Origin: {cat.origin}</p>
                        <p>Name:{cat.name}</p>
                        <p>weight: {cat.dog_friendly}</p>
                    </div>
                    </li>
                    ))}
                </ol>
            </div>
            <div>
                <h1> Top five child friendly cats with similar weighting: </h1>
                <ol>
                    {childFriendlyCats.map((cat) => (
                    <li key={cat.id}>
                    <div >
                        <p>Origin: {cat.origin}</p>
                        <p>Name:{cat.name}</p>
                        <p>weight: {cat.child_friendly}</p>
                    </div>
                    </li>
                    ))}
                </ol>
            </div>

            <div>
                <h1> Top five stranger friendly cats with similar weighting: </h1>
                <ol>
                    {strangerFriendlyCats.map((cat) => (
                    <li key={cat.id}>
                    <div >
                        <p>Origin: {cat.origin}</p>
                        <p>Name:{cat.name}</p>
                        <p>weight: {cat.stranger_friendly}</p>
                    </div>
                    </li>
                    ))}
                </ol>
            </div>

      </div>
    )
  }
}

export default ListCats