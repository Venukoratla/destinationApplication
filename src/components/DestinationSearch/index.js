// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachObject =>
      eachObject.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <h1>Destination Search</h1>
        <input type="search" onChange={this.searchValue} placeholder="Search" />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="image"
        />
        <ul>
          {searchResults.map(eachObject => (
            <DestinationItem key={eachObject.id} details={eachObject} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
