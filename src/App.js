import React, { Component } from "react"
// import axios from "axios";
import Search from "./Search"
import Navbar from "./Navbar"
import Visitgiphy from "./Visitgiphy"
import Bottombar from "./Bottombar"
import "./myBg.jpg"

import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      something: ""
    }
  }

  render() {
    return (
      <div className="background-Color">
        <div className="navBar">
          <Navbar />
          <Visitgiphy />
        </div>
        <Search />
        <Bottombar />
      </div>
    )
  }
}

export default App
