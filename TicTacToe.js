//https://leetcode.com/problems/design-tic-tac-toe/submissions/

//Brute Force
//Time: O(N) for every move;
//Space: O(N^2) for the board;
class TicTacToe {
  constructor(n) {
    this.side = n;
    this.grid = [];
  }
  createBoard() {
    for (let i = 0; i < this.side; i++) {
        this.grid.push([]);
        for (let j = 0; j < this.side; j++) {
            this.grid[i].push(0);
        }
    }
  }
  move(x, y, player) {
    if (this.grid.length === 0) this.createBoard();
    this.grid[x][y] = player;
    return this.isWin(player, x, y) ? player : 0;
  }
  isWin(player, x, y) {
    //check diagonal
    let count = 0;
    for (let i = 0; i < this.side; i++) {
        if (this.grid[i][i] === player) {
            count++;
            if (count === this.side) return true;
        } else {
            break;
        }
    }
    count = 0;
    //check diagonal
    for (let i = 0; i < this.side; i++) {
        if (this.grid[i][this.side - i - 1] === player) {
            count++;
            if (count === this.side) return true;
        } else {
            break;
        }
    }
    count = 0;
    //check col
    for (let i = 0; i < this.side; i++) {
        if (this.grid[i][y] === player) {
            count++;
            if (count === this.side) return true;
        } else {
            break;
        }
    }
    count = 0;
    //check diagonal
    for (let i = 0; i < this.side; i++) {
        if (this.grid[x][i] === player) {
            count++;
            if (count === this.side) return true;
        } else {
            break;
        }
    }
    return false;
  }
}

//Optimized
//Time: O(1) for every move
//Space: O(N) since we're only using 1D arrays
class TicTacToe {
  constructor(n) {
    this.side = n;
    this.rows = new Array(this.side).fill(0);
    this.cols = new Array(this.side).fill(0);
    this.diagonal = 0;
    this.antiDiagonal = 0;
  }
  move(x, y, player) {
    let currentPlayer = (player === 1) ? 1 : -1;
    this.rows[x] += currentPlayer;
    this.cols[y] += currentPlayer;
    if (x === y) this.diagonal += currentPlayer;
    if (y === this.cols.length - x - 1) this.antiDiagonal += currentPlayer;
    if(Math.abs(this.rows[x]) === this.side || Math.abs(this.cols[y]) === this.side || Math.abs(this.diagonal) === this.side || Math.abs(this.antiDiagonal) === this.side) return player;
    return 0;
  }
}