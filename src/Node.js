import React, { Component } from "react"
import "./Node.css"

export default class Node extends Component {
  render() {
    let { row, col, full } = this.props.node
    return (
      <div
        className="node"
        style={{ width: this.props.nodeSize, height: this.props.nodeSize }}
        id={`node ${row} ${col}`}
      >
        {/* {`${row}${col}`} */}
        {full}
      </div>
    )
  }
}
