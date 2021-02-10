import React, { Component } from "react"
import Block from "./Block.js"

export default class Blocks extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let blocks = this.props.blocks
    return (
      <div className="blocks">
        {blocks.map((block, blockIdx) => {
          return (
            <Block
              block={block}
              nodeSize={this.props.nodeSize}
              key={blockIdx}
            />
          )
        })}
      </div>
    )
  }
}
