import React, { Component } from "react"
import axios from "axios"

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
      searchResults: []
    }
    this.getSearchLink = this.getSearchLink.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  getSearchLink(userinput) {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${
          this.state.searchTerm
        }&api_key=GZCBaX1kYUSCE1Ni9xqAwfeLkYuWqE66&limit=10`
      )
      .then(response => {
        this.setState({ searchResults: response.data.data })
      })
  }

  handleChange(val) {
    this.setState({ searchTerm: val })
  }

  render() {
    const listleftpics = this.state.searchResults.map((pic, i) => (
      <div key={i}>
        {i % 2 === 0 ? (
          <img
            src={`https://i.giphy.com/${pic.id}.gif`}
            className="imageTile"
            alt="Search for pics!"
          />
        ) : (
          <div />
        )}
      </div>
    ))
    const listrightpics = this.state.searchResults.map((pic, i) => (
      <div key={i}>
        {i % 2 === 1 ? (
          <img
            src={`https://i.giphy.com/${pic.id}.gif`}
            className="imageTile"
            alt="Search for pics!"
          />
        ) : (
          <div />
        )}
      </div>
    ))

    return (
      <div className="centerIt">
        <div className="searchBox">
          <p>SEARCH HERE!</p>
          <input
            className="inputLine"
            onChange={e => this.handleChange(e.target.value)}
            placeholder="SEARCH DAT GIF"
          />

          <button
            type="submit"
            onClick={() => this.getSearchLink(this.state.searchTerm)}
          >
            {" "}
            Search
          </button>
        </div>
        <div className="imageDivider">
          <div className="imageFlex">{listleftpics}</div>
          <div className="imageFlex">{listrightpics}</div>
        </div>
      </div>
    )
  }
}
export default Search
