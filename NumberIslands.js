//https://leetcode.com/problems/number-of-islands/

//dfs
//Time: O(M x N) columns and rows.
//Space: O(M x N) esp. in case where the map is full of land and recursive stack goes MxN deep.
const numberIslands = (grid) => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        checkNeighbors(grid, i, j);
        count++;
      }
    }
  }
  return count;
};

const checkNeighbors = (grid, i, j) => {
  if (grid[i][j] === '0' || grid[i][j] === '2') return;
  if (grid[i][j] === '1') grid[i][j] === '2';
  if (i > 0) checkNeighbors(grid, i - 1, j);
  if (j > 0) checkNeighbors(grid, i, j - 1);
  if (i < grid.length - 1) checkNeighbors(grid, i + 1, j);
  if (j < grid[0].length - 1) checkNeighbors(grid, i, j + 1);
};

//bfs
//Time: O(M x N) columns and rows.
//Space: O(min(M,N)) esp. in case where the map is full of land.
const numberIslands = (grid) => {
  const numRows = grid.length;
  const numCols = grid[0].length;
  let count = 0;
  for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
          if (grid[i][j] === '1') {
              count++;
              let queue = [[i, j]];
              while (queue.length) {
                  let curr = queue.shift();
                  if (curr[0] > 0 && grid[curr[0] - 1][curr[1]] === '1') {
                      queue.push([curr[0] - 1, curr[1]]);
                      grid[curr[0] - 1][curr[1]] = '0';
                  }
                  if (curr[1] > 0 && grid[curr[0]][curr[1] - 1] === '1') {
                      queue.push([curr[0], curr[1] - 1]);
                      grid[curr[0]][curr[1] - 1] = '0';
                  }
                  if (curr[0] < numRows - 1 && grid[curr[0] + 1][curr[1]] === '1') {
                      queue.push([curr[0] + 1, curr[1]]);
                      grid[curr[0] + 1][curr[1]] = '0';
                  }
                  if (curr[1] < numCols - 1 && grid[curr[0]][curr[1] + 1] === '1') {
                      queue.push([curr[0], curr[1] + 1]);
                      grid[curr[0]][curr[1] + 1] = '0';
                  }
              }
          }
      }
  }
  return count;
};

//union find
//Time: O(M x N) rows & columns
//Space: O(M x N) to hold the unionfind data structure
class UnionFind {
  constructor(grid) {
      this.count = 0;
      this.numRows = grid.length;
      this.numCols = grid[0].length;
      this.parent = [];
      this.rank = [];
      for (let i = 0; i < this.numRows; i++) {
          for (let j = 0; j < this.numCols; j++) {
              if (grid[i][j] === '1') {
                  this.parent[i * this.numCols + j] = i * this.numCols + j;
                  this.count++;
              }
              this.rank[i * this.numCols + j] = 0;
          }
      }
  }
  find (i) {
      if (this.parent[i] !== i) this.parent[i] = this.find(this.parent[i]);
      return this.parent[i];
  }
  getCount () {
      return this.count;
  }
  union (x, y) {
      const rootX = this.find(x);
      const rootY = this.find(y);
      if (rootX !== rootY) {
          if (this.rank[rootX] > this.rank[rootY]) {
              this.parent[rootY] = rootX;
          } else if (this.rank[rootX] < this.rank[rootY]) {
              this.parent[rootX] = rootY;
          } else {
              this.parent[rootY] = rootX;
              this.rank[rootX] += 1;
          }
          this.count--;
      }
  }
}

const numberIslands = (grid) => {
  let count = 0;
  const numRows = grid.length;
  const numCols = grid[0].length;
  const uf = new UnionFind(grid);
  for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
          if (grid[i][j] == '1') {
              grid[i][j] = '0';
              if (i - 1 >= 0 && grid[i-1][j] == '1') {
                  uf.union(i * numCols + j, (i - 1) * numCols + j);
              }
              if (i + 1 < numRows && grid[i + 1][j] == '1') {
                  uf.union(i * numCols + j, (i + 1) * numCols + j);
              }
              if (j - 1 >= 0 && grid[i][j - 1] == '1') {
                  uf.union(i * numCols + j, i * numCols + j - 1);
              }
              if (j + 1 < numCols && grid[i][j + 1] == '1') {
                  uf.union(i * numCols + j, i * numCols + j + 1);
              }
          }
      }
  }
  return uf.getCount();
};