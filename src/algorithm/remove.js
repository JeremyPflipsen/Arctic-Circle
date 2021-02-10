export default function remove() {
  let blocks = this.state.blocks
  let blocksLength = blocks.length

  for (let i = 0; i < blocksLength; i++) {
    for (let j = 0; j < blocksLength; j++) {
      switch (blocks[i].arrow) {
        case "down":
          if (
            (blocks[i].row === blocks[j].row + 1) &
            (blocks[i].col === blocks[j].col) &
            (blocks[j].arrow === "up")
          ) {
            //blocks will collide so remove them
            if (i < j) {
              // this condition ensures the splicing happens in the right order and we don't skip any elements from shifting the array
              //decrease i by 1 so you don't skip the next element at i+1
              blocks.splice(j, 1)
              blocks.splice(i, 1)
              i = i - 1
              j = j - 2
            } else {
              blocks.splice(i, 1)
              blocks.splice(j, 1)
              i = i - 2
              j = j - 1
            }

            //decrease blocksLength by 2 since you're removing 2 elements
            blocksLength = blocksLength - 2
          }
          break

        case "right":
          if (
            (blocks[i].row === blocks[j].row) &
            (blocks[i].col === blocks[j].col - 1) &
            (blocks[j].arrow === "left")
          ) {
            //blocks will collide so remove them
            if (i < j) {
              // this condition ensures the splicing happens in the right order and we don't skip any elements from shifting the array
              //decrease i by 1 so you don't skip the next element at i+1
              blocks.splice(j, 1)
              blocks.splice(i, 1)
              i = i - 1
              j = j - 2
            } else {
              blocks.splice(i, 1)
              blocks.splice(j, 1)
              i = i - 2
              j = j - 1
            }

            //decrease blocksLength by 2 since you're removing 2 elements
            blocksLength = blocksLength - 2
          }
          break

        default:
          break
      }
    }
  }

  this.setState({
    blocks: blocks,
  })
}
