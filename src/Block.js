import React, { Component } from "react"
import "./Block.css"

export default class Block extends Component {
  render() {
    let { row, col, color, arrow } = this.props.block

    if (arrow === "up" || arrow === "down") {
      return (
        <div
          style={{
            left: document.getElementById(`node ${row} ${col}`).offsetLeft,
            top: document.getElementById(`node ${row} ${col}`).offsetTop,
            backgroundColor: color,
            width: 2 * this.props.nodeSize,
            height: this.props.nodeSize,
          }}
          className="block"
          id={`block ${row} ${col}`}
        ></div>
      )
    } else {
      return (
        <div
          style={{
            left: document.getElementById(`node ${row} ${col}`).offsetLeft,
            top: document.getElementById(`node ${row} ${col}`).offsetTop,
            backgroundColor: color,
            width: this.props.nodeSize,
            height: 2 * this.props.nodeSize,
          }}
          className="block"
          id={`block ${row} ${col}`}
        ></div>
      )
    }
  }
}
