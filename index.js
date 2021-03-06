function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  var rankList=document.querySelectorAll('ul.ranked-list li');
  for (var i=0; i<rankList.length;i++) {
    rankList[i]+=n;
  }
  return rankList;
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div')
}
