/*
 * 回溯算法DFS：解决决策树的遍历
 * 
*/

/*
 * 解题框架
 result = []
 def backtrack(路径, 选择列表):
  if 满足结束条件:
    result.add(路径)
    return
  
  for 选择 in 选择列表
    做选择
    backtrack(路径, 选择列表)
    撤销选择
*/


/*
  * 题面： 给你一个 N×N 的棋盘，让你放置 N 个皇后，使得它们不能互相攻击（皇后可以攻击同一行、同一列、左上左下右上右下四个方向的任意单位）
*/

const res: string[][] = []
export default function solveQueen (n: number): string[][] {
  const board: string[][] = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'))
  backtrack(board, 0)
  return res
}

function backtrack (board: string[][], row: number) {
  if (row === board.length) {
    res.push([...board.map(item => item.join(''))])
    return
  }
  const len: number = board[row].length
  for (let col = 0; col < len; col++) {
    if (!isValid(board, row, col)) {
      continue
    }

    board[row][col] = 'Q'
    backtrack(board, row + 1)
    board[row][col] = '.' 
  }
}

function isValid (board: string[][], row: number, col: number): boolean {
  const len: number = board.length
  for (let i = 0; i < len; i++) {
    if (board[i][col] === 'Q') return false
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') return false
  }

  for (let i = row - 1, j = col + 1; i >= 0 && j < len; i--, j++) {
    if (board[i][j] === 'Q') return false
  }
  return true
}