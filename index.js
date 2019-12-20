
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested").querySelector(".target")
}

function increaseRankBy(n) {
  var rankedLis = document
  .querySelectorAll("ul.ranked-list li");
  for (let i=0; i < rankedLis.length; i++) {
//    rankNum = parseInt(rankedLis[i].innerHTML, 10) + n;
    rankedLis[i].innerHTML = (parseInt(rankedLis[i].innerHTML, 10) + n).toString()
  }
}
// Nothing
