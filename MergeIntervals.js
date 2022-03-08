//https://leetcode.com/problems/merge-intervals/submissions/

//Time: O(nlogn)
//Space: O(n) or O(logn) (depending on the sorting algorithm)
const merge = (intervals) => {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a,b) => a[0] - b[0]);
  const result = [];
  let cur = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
      if(cur[1] < intervals[i][0]){
          result.push(cur);
          cur = intervals[i];
      } else {
          cur = [Math.min(cur[0], intervals[i][0]), Math.max(cur[1], intervals[i][1])];
      }
  }
  result.push(cur);
  return result;
};