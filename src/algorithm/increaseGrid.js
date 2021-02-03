export default function increaseGrid() {
  let nodes = []
  let currRow = []
  let currSize = this.state.currSize

  // Make top half
  for (let row = 0; row < currSize + 1; row++) {
    for (let col = 0; col < (row + 1) * 2; col++) {
      currRow.push({ row: currSize - row, col: col - row, full: 0 })
    }
    nodes.push(currRow)
    currRow = []
  }

  //make bottom half
  for (let row = 0; row < currSize + 1; row++) {
    for (let col = 0; col < 2 * (currSize + 1 - row); col++) {
      currRow.push({
        row: -1 * (row + 1),
        col: col + row - currSize,
        full: 0,
      })
    }
    nodes.push(currRow)
    currRow = []
  }

  //shift all blocks down by 50px
  let blocks = this.state.blocks //FIXME this doesn't work

  // for (let i = 0; i < this.state.blocks.length; i++) {
  //   blocks[i].ypos = blocks[i].ypos + this.state.nodeSize
  // }

  this.setState({
    currSize: currSize + 1,
    grid: nodes,
    blocks: blocks,
  })
}
