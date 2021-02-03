//FIXME add an array of blocks to be rendered in render()
//FIXME add a class for each type of block
//FIXME have the position and type of block in blocks in the state of App
//FIXME send the position and type through the props to blocks and then each block
//FIXME figure out how to get the grid to line up

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
