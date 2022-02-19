
//Time O(nlogn)
//Space O(n) or O(n) + O(logn) if considering stack frames.
const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length/2);
  const left = arr.splice(0, mid);
  return merge(mergeSort(left), mergeSort(arr));
}

const merge = (left, right) => {
  const merged = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return [...merged, ...left, ...right];
}