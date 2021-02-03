export default function fill() {
  let blocks = this.state.blocks
  let grid = this.state.grid
  // console.log(grid)
  //find empty squares
  for (let row = 0; row < grid.length - 1; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      // console.log(grid[row + 1][col])
      //find col of undernode
      let undercol
      for (undercol = 0; undercol < grid[row + 1].length; undercol++) {
        if (grid[row + 1][undercol].col === grid[row][col].col) {
          break
        }
      }

      // console.log(row, col)
      try {
        if (
          !grid[row][col].full &
          !grid[row][col + 1].full &
          !grid[row + 1][undercol].full &
          !grid[row + 1][undercol + 1].full
        ) {
          // console.log("empty square")
          //set the full values of the nodes to 1
          grid[row][col].full = 1
          grid[row][col + 1].full = 1
          grid[row + 1][undercol].full = 1
          grid[row + 1][undercol + 1].full = 1

          //add new blocks to fill the empty square
          var nodeRow = grid[row][col].row
          var nodeCol = grid[row][col].col

          //randomly choose vertical or horizontal blocks to fill
          if (Math.random() < 0.5) {
            blocks.push(
              { row: nodeRow, col: nodeCol, color: "blue", arrow: "up" },
              {
                row: nodeRow - 1,
                col: nodeCol,
                color: "HotPink",
                arrow: "down",
              }
            )
          } else {
            blocks.push(
              {
                row: nodeRow,
                col: nodeCol,
                color: "red",
                arrow: "left",
              },
              {
                row: nodeRow,
                col: nodeCol + 1,
                color: "green",
                arrow: "right",
              }
            )
          }
        }
      } catch (error) {
        // console.log("no square")
      }
    }
  }

  this.setState({
    blocks: blocks,
    grid: grid,
  })
}
