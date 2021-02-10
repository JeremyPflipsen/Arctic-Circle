import React from "react"
import "./App.css"
import Node from "./Node.js"
import Blocks from "./Blocks.js"
import fill from "./algorithm/fill.js"
import move from "./algorithm/move.js"
import remove from "./algorithm/remove.js"
import increaseGrid from "./algorithm/increaseGrid.js"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currSize: 1,
      grid: [],
      blocks: [],
      nodeSize: 30,
      currStep: 3,
      stop: 0,
    }
    this.step = this.step.bind(this)
    this.play = this.play.bind(this)
    this.fill = fill.bind(this)
    this.move = move.bind(this)
    this.remove = remove.bind(this)
    this.increaseGrid = increaseGrid.bind(this)
    this.play = this.play.bind(this)
    this.stop = this.stop.bind(this)
    this.playing = this.playing.bind(this)
  }

  step() {
    switch (this.state.currStep % 4) {
      case 0:
        this.increaseGrid()
        break

      case 1:
        this.remove()
        break

      case 2:
        this.move()
        break

      case 3:
        this.fill()
        break

      default:
        break
    }
    this.setState({
      currStep: this.state.currStep + 1,
    })
  }

  play() {
    this.setState({
      stop: 0,
    })

    setTimeout(() => this.playing(), 1) //otherwise the playing call happens before stop is set to 0
  }

  playing() {
    if (this.state.stop) {
      return
    }

    this.step()

    setTimeout(() => {
      this.playing()
    }, 500)
  }

  stop() {
    this.setState({
      stop: 1,
    })
  }

  componentDidMount() {
    let nodes = [
      [
        { row: 0, col: 0, full: 0 },
        { row: 0, col: 1, full: 0 },
      ],
      [
        { row: -1, col: 0, full: 0 },
        { row: -1, col: 1, full: 0 },
      ],
    ]
    // let bloks = [
    //   { xpos: 300, ypos: 300, color: "blue", arrow: "down" },
    //   { xpos: 300, ypos: 350, color: "red", arrow: "up" },
    // ]
    this.setState({
      grid: nodes,
      // blocks: bloks,
    })
  }

  render() {
    const { grid } = this.state
    return (
      <div className="App">
        <div className="App-header">i! love! you!</div>
        <button onClick={this.step} className="button">
          Step
        </button>
        <button onClick={this.play} className="button">
          Play
        </button>
        <button onClick={this.stop} className="button">
          Stop
        </button>
        {/* <button onClick={this.increaseGrid}>IncreaseGrid</button> */}
        {/* <button onClick={this.fill}>Fill</button> */}
        {/* <button onClick={this.move}>Move</button> */}
        {/* <button onClick={this.remove}>Remove</button> */}
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  return (
                    <Node
                      node={node}
                      nodeSize={this.state.nodeSize}
                      key={nodeIdx}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
        <Blocks blocks={this.state.blocks} nodeSize={this.state.nodeSize} />
      </div>
    )
  }
}

export default App
