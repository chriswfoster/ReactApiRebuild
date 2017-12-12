import React, { Component } from "react"
import "./App.css"

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      color: "",
      finalColor: "red"
    }
  }

  render() {
    return (
      <div>
        <div className="topLeft">
          <a
            href="http://angulargiphy.chriswf.com"
            className="topLeftButton infinite-spinning"
          >
            SEE IN ANGULAR!
          </a>
        </div>
      </div>
    )
  }
}
