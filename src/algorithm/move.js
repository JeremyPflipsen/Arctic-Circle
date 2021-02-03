export default function move() {
  let blocks = this.state.blocks
  let grid = this.state.grid
  //   let newBlocks = []

  //set all the full values to 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      grid[row][col].full = 0
    }
  }

  //move all the blocks according to their arrows and update full values
  for (let i = 0; i < blocks.length; i++) {
    let { arrow } = blocks[i]
    let currRow
    let currCol
    let underCurrCol

    switch (arrow) {
      case "up":
        blocks[i].row = blocks[i].row + 1
        currRow = grid.length / 2 - 1 - blocks[i].row
        currCol = grid[currRow].length / 2 - 1 + blocks[i].col

        grid[currRow][currCol].full = 1
        grid[currRow][currCol + 1].full = 1
        break

      case "down":
        blocks[i].row = blocks[i].row - 1
        currRow = grid.length / 2 - 1 - blocks[i].row
        currCol = grid[currRow].length / 2 - 1 + blocks[i].col

        grid[currRow][currCol].full = 1
        grid[currRow][currCol + 1].full = 1
        break

      case "right":
        blocks[i].col = blocks[i].col + 1
        currRow = grid.length / 2 - 1 - blocks[i].row
        currCol = grid[currRow].length / 2 - 1 + blocks[i].col
        underCurrCol = grid[currRow + 1].length / 2 - 1 + blocks[i].col

        grid[currRow][currCol].full = 1
        grid[currRow + 1][underCurrCol].full = 1
        break

      case "left":
        blocks[i].col = blocks[i].col - 1
        currRow = grid.length / 2 - 1 - blocks[i].row
        currCol = grid[currRow].length / 2 - 1 + blocks[i].col
        underCurrCol = grid[currRow + 1].length / 2 - 1 + blocks[i].col

        grid[currRow][currCol].full = 1
        grid[currRow + 1][underCurrCol].full = 1
        break

      default:
        break
    }
  }

  this.setState({
    blocks: blocks,
    grid: grid,
  })
}
