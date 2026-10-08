class Solution {
  /**
   * Второе решение после того, как я узнал про способ проще.
   * @param {character[][]} board
   * @return {void} Do not return anything, modify board in-place instead.
   */
  solve(board) {
    const m = board.length;
    if (m === 0) return;
    const n = board[0].length;
    if (n === 0) return;

    const directions = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];

    function dfs(i, j) {
      if (board[i][j] !== "O") return;
      board[i][j] = "#";
      const stack = [[i, j]];
      while (stack.length > 0) {
        const curr = stack.pop();
        for (const direction of directions) {
          const i = curr[0] + direction[0];
          const j = curr[1] + direction[1];
          if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== "O")
            continue;
          stack.push([i, j]);
          board[i][j] = "#";
        }
      }
    }

    for (let i = 0; i < m; i++) {
      dfs(i, 0);
      dfs(i, n - 1);
    }
    for (let j = 1; j < n - 1; j++) {
      dfs(0, j);
      dfs(m - 1, j);
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === "#") board[i][j] = "O";
        else if (board[i][j] === "O") board[i][j] = "X";
      }
    }
  }
}