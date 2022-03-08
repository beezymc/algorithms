//https://leetcode.com/problems/meeting-rooms/submissions/


//Time: O(nlogn)
//Space: O(1)--depends on the sorting algorithm.
const meetingRooms = (intervals) => {
  if (intervals.length < 2) return true;
  intervals.sort((a, b) => a[0] - b[0]);
  let curr = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
      if (curr[1] > intervals[i][0]) {
          return false;
      }
      curr = intervals[i];
  }
  return true;
}