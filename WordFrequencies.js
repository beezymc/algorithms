let document1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis diam at convallis vulputate. Quisque placerat a justo at eleifend. Etiam facilisis egestas lectus. Pellentesque tempus orci tristique, ornare sapien id, fermentum dolor. Sed justo massa, auctor eu rhoncus non, maximus id purus. Aliquam dapibus scelerisque gravida. Curabitur id suscipit orci. Suspendisse tincidunt ex nec quam rutrum, mattis dictum turpis mollis. Integer molestie, ex tempus rutrum pellentesque, enim risus fermentum massa, ut elementum mauris nulla ac urna."

let document2 = "Nam eu velit sit amet velit efficitur rutrum ut ac mauris. Nam sodales maximus sapien. Phasellus at ex erat. Curabitur faucibus lorem a molestie hendrerit. Aliquam aliquam ligula vitae leo condimentum porttitor. Vivamus semper justo nec mauris auctor, sed blandit ex sodales. Duis sed gravida sem. Maecenas tincidunt et erat sed semper. Nam a est ut mauris ullamcorper aliquet."

const compareDocuments = (document1, document2) => {
  let punctuationless = document1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  let finalString = punctuationless.replace(/\s{2,}/g," ").toLowerCase();
  let finalStringArr = finalString.split(" ");
  const docOneCount = finalStringArr.length;
  let docOneObj = {};
  for (let i = 0; i < finalStringArr.length; i++) {
    docOneObj[finalStringArr[i]] = docOneObj[finalStringArr[i]] + 1 || 1;
  }
  punctuationless = document2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  finalString = punctuationless.replace(/\s{2,}/g," ").toLowerCase();
  finalStringArr = finalString.split(" ");
  const docTwoCount = finalStringArr.length;
  let docTwoObj = {};
  for (let i = 0; i < finalStringArr.length; i++) {
    docTwoObj[finalStringArr[i]] = docTwoObj[finalStringArr[i]] + 1 || 1;
  }
  let num = 0;
  for (let key in docOneObj) {
    if (docTwoObj[key]) {
      num += docOneObj[key] > docTwoObj[key] ? 2 * docTwoObj[key] : 2 * docOneObj[key];
    }
  }
  let den = docOneCount + docTwoCount;
  return num / den;
};