const isValid = (stale, latest, otjson) => {
  let cursor = 0;
  const otjsonParsed = JSON.parse(otjson);
  let staleTransform = stale.split('');
  for (let i = 0; i < otjsonParsed.length; i++) {
    const { op, count, chars } = otjsonParsed[i];
    if (op === 'skip') {
      if (cursor + count >= staleTransform.length) return false;
      cursor += count;
    } else if (op === 'delete') {
      if (cursor + count >= staleTransform.length) return false;
      staleTransform.splice(cursor, count);
    } else if (op === 'insert') {
      const charSplit = chars.split('');
      staleTransform.splice(cursor, 2, ...charSplit)
      cursor += chars.length;
    } else {
      return false;
    }
  }
  const staleTransformStr = staleTransform.join('');
  console.log(staleTransformStr);
  return latest === staleTransformStr;
};

class IDEBox {
  constructor(text) {
    this.text = text;
    this.textArr = text.split('');
    this.cursor = 0;
  }
  performOperation(otjson) {
    const {op, count, chars} = JSON.parse(otjson);
    if (op === 'skip') {
      this.skipOp(count);
    } else if (op === 'delete') {
      this.deleteOp(count);
    } else if (op === 'insert') {
      this.insertOp(chars);
    } else {
      return new Error('Operation Not Found')
    }
   this.text = this.textArr.join('');
    return this.text;
  }
  skipOp(count) {
    if (this.cursor + count >= this.textArr.length) {
      return new Error('Invalid Input');
    }
    this.cursor += count;
  }
  deleteOp(count) {
    if (this.cursor + count >= this.textArr.length) {
      return new Error('Invalid Input');
    }
    this.textArr.splice(this.cursor, count);
  }
  insertOp(chars) {
    const charArr = chars.split('');
    this.textArr.splice(this.cursor, 0, ...charArr)
    this.cursor += chars.length;
  }
}

const box1 = new IDEBox('This IDE is pretty awesome!');
const box1Stream = ['{"op": "skip", "count": 4}', '{"op": "delete", "count": 7}']
for (let i = 0; i < box1Stream.length; i++) {
  console.log(box1.performOperation(box1Stream[i]));
}

console.log(box1.text)

// console.log(isValid(
//   'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
//   'Repl.it uses operational transformations.',
//   '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
// )); // true

// console.log(isValid(
//   'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
//   'Repl.it uses operational transformations.',
//   '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
// )); // false, delete past end

// console.log(isValid(
//   'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
//   'Repl.it uses operational transformations.',
//   '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
// )); // false, skip past end

// console.log(isValid(
//   'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
//   'We use operational transformations to keep everyone in a multiplayer repl in sync.',
//   '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
// )); // true

// console.log(isValid(
//   'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
//   'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
//   '[]'
// )); // true