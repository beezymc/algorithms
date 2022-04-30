const fruitBasket = (fruit) => {
  let start = 0;
  let maxFruit = -Infinity;
  const fruitMap = {};
  for (let end = 0; end < fruit.length; end++) {
    fruitMap[fruit[end]] = fruitMap[fruit[end]] + 1 || 1;
    while (Object.keys(fruitMap).length > 2) {
      fruitMap[fruit[start]]--;
      if (fruitMap[fruit[start]] === 0) delete fruitMap[fruit[start]];
      start++;
    }
    maxFruit = Math.max(maxFruit, end - start + 1);
  }
  return maxFruit;
};

console.log(fruitBasket(['A', 'B', 'C', 'A', 'C']) === 3);
console.log(fruitBasket(['A', 'B', 'C', 'B', 'B', 'C']) === 5);
