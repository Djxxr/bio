var titles = [
    "@",
    "@d",
    "@dj",
    "@djx",
    "@djxx",
    "@djxxr",
    "@djxxr",
    "@djxxr",
    "@djxx",
    "@djx",
    "@dj",
    "@d",
    "@",
  ];
  
  function changeTitle() {
    var index = 0;
    setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
    }, 300);
  }
  
  changeTitle();