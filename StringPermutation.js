const stringPermutation = (str, patt) => {
  const map = {};
  for (let i = 0; i < patt.length; i++) {
    map[patt[i]] = map[patt[i]] + 1 || 1;
  }
  let start = 0;
  let matched = 0;
  for (let end = 0; end < str.length; end++) {
    if (map[str[end]] !== undefined) {
      map[str[end]]--;
      if (map[str[end]] === 0) matched++;
    }
    if (matched === Object.keys(map).length) return true;
    if (end >= patt.length - 1) {
      if (map[str[start]] !== undefined) {
        if (map[str[start]] === 0) matched--;
        map[str[start]]++;
      }
      start++;
    }
  }
  return false;
};

console.log(stringPermutation('oidbcaf', 'abc') === true);
console.log(stringPermutation('odicf', 'dc') === true);
console.log(stringPermutation('bcdxabcdy', 'bcdyabcdx') === true);
console.log(stringPermutation('aaacb', 'abc') === true);