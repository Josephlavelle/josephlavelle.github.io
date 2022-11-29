var scrollNum = document.documentElement.scrollTop || document.body.scrollTop;

window.addEventListener('scroll', () => {
    console.log(scrollNum)
});
/*window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }*/